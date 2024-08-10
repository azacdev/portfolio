import Link from "next/link";

import { POST } from "@/types";
import { auth } from "@/auth";
import PostCard from "@/components/post-card";
import { buttonVariants } from "@/components/ui/button";

const BlogPage = async () => {
  const session = await auth();

  const posts: any = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/`,
    {
      cache: "no-store",
    }
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return (
    <main className="pt-40 min-h-screen">
      <div className="w-full h-full space-y-7 inline-block z-0 bg-light dark:bg-dark px-4 sm:px-8 lg:px-36 xl:px-52">
        <div className="flex flex-col text-center space-y-5">
          <h1 className="font-bold text-2xl lg:text-3xl">Blog</h1>
          <p className="lg:text-lg">
            Personal perspectives on a broad range of topics.
          </p>

          {session?.user?.email === "azacdev@gmail.com" && (
            <Link
              href="/blog/post"
              className={`${buttonVariants({
                variant: "default",
              })} text-xl w-20 mx-auto`}
            >
              Post
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
          {posts.map((post: POST, index: number) => (
            <PostCard post={post} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
