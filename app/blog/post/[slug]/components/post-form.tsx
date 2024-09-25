"use client";

import { useState, useEffect } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import { useRouter } from "next/navigation";
import { TagInput } from "emblor";
import { v4 as uuidv4 } from "uuid";
import "react-quill/dist/quill.snow.css";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { postSchema } from "@/schemas";
import { Label } from "@/components/ui/label";
import ImageUpload from "@/components/image-upload";
import { POST } from "@/types";
import { DeleteDialog } from "./delete-dialog";
import { toast } from "sonner";

type PostFormValues = z.infer<typeof postSchema>;
interface PostFormProps {
  initialData?: POST | null;
}

interface Tag {
  id: string;
  text: string;
}

export function PostForm({ initialData }: PostFormProps) {
  const router = useRouter();

  const [exampleTags, setExampleTags] = useState<Tag[]>([]);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: initialData
      ? {
          title: initialData?.title,
          description: initialData?.description,
          image: initialData?.image,
          tags: initialData.tags,
        }
      : {
          title: "",
          description: "",
          image: "",
        },
  });

  useEffect(() => {
    if (initialData) {
      const formattedTags = initialData.tags.map((tag: string) => ({
        id: uuidv4(),
        text: tag,
      }));
      setExampleTags(formattedTags);
    }
  }, [initialData]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const onSubmit = async (values: PostFormValues) => {
    const tags = exampleTags.map((tag) => tag.text);

    try {
      setLoading(true);
      if (initialData) {
        //PUT
        const res = await fetch(`/api/post/${initialData.id}`, {
          method: "PATCH",
          body: JSON.stringify({
            ...values,
            tags: tags,
            slug: slugify(values.title),
          }),
        });

        const data = await res.json();

        if (data.success) {
          form.reset();
          router.push("/blog");
          toast("Blog Updated.");
        }
      } else {
        // POST
        const res = await fetch("/api/post", {
          method: "POST",
          body: JSON.stringify({
            ...values,
            tags: tags,
            slug: slugify(values.title),
          }),
        });

        const data = await res.json();

        if (data.success) {
          form.reset();
          router.push("/blog");
          toast("Blog Created.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 lg:p-10 space-y-3 max-w-[550px] w-full py-10 lg:py-20 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <ImageUpload
                    value={field.value}
                    disabled={loading}
                    onChange={(url) => field.onChange(url)}
                    onRemove={() => field.onChange("")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="relative h-16 mb-8 w-full">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="absolute top-[-0.5rem] left-5 text-sm p-1 z-30 text-dark bg-light dark:text-light dark:bg-dark">
                    Title
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Title"
                      {...field}
                      className="absolute top-0 left-0 right-0 w-full h-full outline-none text-dark rounded-xl border p-6 bg-light border-dark dark:text-light dark:bg-dark dark:border-light"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col space-y-3">
            <Label>Tags</Label>
            <TagInput
              tags={exampleTags}
              setTags={(newTags) => {
                setExampleTags(newTags);
              }}
              className="outline-none text-dark rounded-xl border p-6 bg-light border-dark dark:text-light dark:bg-dark dark:border-light"
              placeholder="Add a tag"
              styleClasses={{
                input: "w-full max-w-[350px]",
              }}
              activeTagIndex={activeTagIndex}
              setActiveTagIndex={setActiveTagIndex}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <ReactQuill
                    theme="snow"
                    value={field.value}
                    onChange={field.onChange}
                    modules={modules}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={loading}>
            {initialData ? "Edit Post" : "Create Post"}
          </Button>
        </form>
      </Form>

      {initialData && <DeleteDialog isPending={loading} id={initialData.id} />}
    </div>
  );
}
