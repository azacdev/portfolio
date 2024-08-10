import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/post`;

  const response = await fetch(url);
  const posts = await response.json();

  const postEntries: MetadataRoute.Sitemap = posts.map((post: any) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${post.slug}`,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
    },
    ...postEntries,
  ];
}
