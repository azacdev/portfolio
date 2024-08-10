import { auth } from "@/auth";
import { notFound } from "next/navigation";

import { PostForm } from "./components/post-form";

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const session = await auth();

  if (session?.user?.email !== "azacdev@gmail.com") {
    notFound();
  }

  console.log(params.slug);

  const post: any = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${params.slug}`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  console.log(post);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <PostForm initialData={post} />
    </div>
  );
};

export default BlogPostPage;
