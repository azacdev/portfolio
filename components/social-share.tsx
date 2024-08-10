"use client";

import { Copy, Facebook, Linkedin, Share2, X } from "lucide-react";

import { toast } from "sonner";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

interface SocialShareProps {
  slug: string;
}

const SocialShare = ({ slug }: SocialShareProps) => {
  const link = `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    toast("Copied to clipboard.");
  };

  return (
    <div className="flex gap-3 items-center">
      <Button variant={"link"} onClick={handleCopy}>
        <Copy className="h-7 w-7 hover:cursor-pointer" />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Share2 className="h-7 w-7 hover:cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-light dark:bg-dark items-start">
          <DropdownMenuCheckboxItem>
            <Link
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                link
              )}`}
              target="_blank"
              className={`${buttonVariants({ variant: "link" })} !px-0 !py-0`}
            >
              <X className="mr-2 h-6 w-6" />
              <span>Share on X</span>
            </Link>
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem>
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                link
              )}`}
              target="_blank"
              className={`${buttonVariants({ variant: "link" })} !px-0 !py-0`}
            >
              <Facebook className="mr-2 h-6 w-6" />
              <span>Share on Facebook</span>
            </Link>
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem>
            <Link
              href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                link
              )}`}
              target="_blank"
              className={`${buttonVariants({ variant: "link" })} !px-0 !py-0`}
            >
              <Linkedin className="mr-2 h-6 w-6" />
              <span>Share on LinkedIn</span>
            </Link>
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SocialShare;
