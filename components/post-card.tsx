import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { POST } from "@/types";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";

interface PostCardProps {
  post: POST;
  showEdit?: boolean;
}

const PostCard = ({ post, showEdit }: PostCardProps) => {
  return (
    <Card
      className={cn(
        "h-full w-full flex flex-col overflow-hidden rounded-md border-dark dark:border-light"
      )}
    >
      <Link href={`/blog/${post.slug}`}>
        <CardHeader className="p-3">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={post.image}
              alt="Image"
              className="aspect-video object-cover"
              fill
              loading="lazy"
            />
          </AspectRatio>
        </CardHeader>
        <span className="sr-only">{post.title}</span>
      </Link>
      <Link
        href={`/blog/${post.slug}`}
        tabIndex={-1}
        className="flex flex-col h-full"
      >
        <CardContent className="space-y-2 p-3 flex-grow">
          <CardTitle className="line-clamp-2 hover:underline text-xl md:text-2xl">
            {post.title}
          </CardTitle>
          <CardDescription className="line-clamp-4 text-base md:text-lg">
            {parse(post.description)}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between items-center w-full p-3 mt-auto">
          <div className="flex items-center w-full ">
            <span>{format(new Date(post.createdAt), "MMM d, yyyy")}</span>
            <Separator
              className="dark:bg-light bg-dark w-[2px] h-5 mx-5"
              orientation="vertical"
            />
            <span>{post.views} views</span>
          </div>

          {showEdit && (
            <Link href={`/blog/post/${post.slug}`}>
              <Pencil className="h-6 w-6" />
            </Link>
          )}
        </CardFooter>
      </Link>
    </Card>
  );
};

export default PostCard;
