import { PostForm } from "./components/post-form";

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const post: any = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${params.slug}`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return (
    <div className="min-h-screen flex justify-center items-center py-10 md:py-20">
      <PostForm initialData={post} />
    </div>
  );
};

export default BlogPostPage;
