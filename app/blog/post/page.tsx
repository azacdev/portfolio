import { POST } from "@/types";
import PostCard from "@/components/post-card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Plus } from "lucide-react";

const BlogPostPage = async () => {
  const posts: any = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/`,
    {
      cache: "no-store",
    }
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return (
    <div className="min-h-screen pt-40 w-full h-full space-y-7 inline-block z-0 bg-light dark:bg-dark px-4 sm:px-8 lg:px-36 xl:px-52">
      <Link
        href="/blog/post/new"
        className={`${buttonVariants({
          variant: "default",
        })} text-xl flex items-center justify-center ml-auto`}
      >
        <Plus className="h-6 w-6 mr-2" /> <span>New Post</span>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-20 pt-10">
        {posts.map((post: POST, index: number) => (
          <PostCard post={post} key={index} showEdit />
        ))}
      </div>
    </div>
  );
};

export default BlogPostPage;
