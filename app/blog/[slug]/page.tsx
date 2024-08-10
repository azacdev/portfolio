import { Metadata } from "next";
import { format } from "date-fns";
import Image from "next/image";
import { Eye } from "lucide-react";
import parse from "html-react-parser";

import { POST } from "@/types";
import { db } from "@/lib/db";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import SocialShare from "@/components/social-share";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const postUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${params.slug}`;

  try {
    const response = await fetch(postUrl)
      .then((res) => res.json())
      .catch((error) => console.log(error));

    const post: any = response;

    if (!post) {
      throw new Error("Post not found");
    }

    const postDescription = post.description;

    const removeHtmlTags = (html: string) => {
      return html.replace(/<\/?[^>]+(>|$)/g, "");
    };

    const cleanDescription = removeHtmlTags(postDescription);

    return {
      title: post.title,
      description: cleanDescription,
      openGraph: {
        images: [
          {
            url: post.image,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
      openGraph: {
        images: [
          {
            url: "default-image-url",
          },
        ],
      },
    };
  }
}

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const response: any = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${params.slug}`,
    { cache: "no-store" }
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  const post: POST = response;

  await db.post.update({
    where: { slug: params.slug },
    data: { views: { increment: 1 } },
  });

  return (
    <div className="min-h-screen">
      <div className="w-full h-full space-y-7 inline-block z-0 bg-light dark:bg-dark px-4 sm:px-8 lg:px-36 xl:px-60 py-32 md:py-40">
        <div className="space-y-3">
          <p>{format(new Date(post.createdAt), "EEEE, MMMM d, yyyy")}</p>
          <h1 className="text-2xl md:text-4xl font-bold max-w-[800px]">
            {post.title}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-3 justify-between">
          <div className="flex gap-3 items-center">
            {post.tags.map((tag, index) => (
              <Badge
                className="capitalize bg-dark dark:bg-light text-base"
                key={index}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex justify-between items-center md:justify-normal">
            <div className="inline-flex items-center justify-center mr-3">
              <Eye className="h-7 w-7 mr-2" /> {post.views}
            </div>

            <SocialShare slug={post.slug} />
          </div>
        </div>

        <div className="space-y-10">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={post.image}
              alt="Image"
              className="aspect-video object-cover rounded-md border-dark dark:border-light border"
              fill
              loading="lazy"
            />
          </AspectRatio>

          <div>{parse(post.description)}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
