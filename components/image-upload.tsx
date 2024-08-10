"use client";

import { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { app } from "@/lib/firebase";
import Image from "next/image";

import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { ImageIcon, Trash } from "lucide-react";
import { useRouter } from "next/navigation";

interface ImageUploadProps {
  disabled: boolean;
  onChange: (value: string) => void;
  onRemove: () => void;
  value: string;
}

const ImageUpload = ({
  disabled,
  onChange,
  onRemove,
  value,
}: ImageUploadProps) => {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      console.log("Image upload");
      const name = new Date().getTime() + file!.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file!);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
            onChange(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  const onDelete = () => {
    onRemove();
    console.log("REMOVED");

    router.refresh();
  };

  return (
    <div className="pb-10">
      <div className="mb-4 flex flex-col items-center gap-4">
        {value && (
          <div className="relative w-full h-[300px] rounded-md overflow-hidden">
            <div className="z-10 absolute top-2 right-2">
              <Button
                type="button"
                onClick={() => onDelete()}
                variant={"destructive"}
              >
                <Trash className="h-2 w-4" />
              </Button>
            </div>

            <Image fill className="object-cover" alt="Image" src={value} />
          </div>
        )}
      </div>
      <div className="flex gap-5">
        <input
          type="file"
          id="image"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          style={{ display: "none" }}
        />
        <Label
          htmlFor="image"
          className="w-9 h-9 rounded-[50%] border flex items-center justify-center cursor-pointer"
        >
          <ImageIcon className="w-16 h-16" />
        </Label>
      </div>
    </div>
  );
};

export default ImageUpload;
