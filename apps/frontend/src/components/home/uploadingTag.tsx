"use client";
import React, { Ref, useRef } from "react";

import { Input } from "../ui/input";
import { useSetRecoilState } from "recoil";
import { fileStatePost, isFileAdded } from "@/store/fileStorage";
import { FileVideo, Image } from "lucide-react";

type UploadingTagProps = {
  type: "video" | "image";
};

export const UploadingTag = ({ type }: UploadingTagProps) => {
  const setFile = useSetRecoilState(fileStatePost);
  const fileRef = useRef<HTMLInputElement>(null);
  const setIsFileAdded = useSetRecoilState(isFileAdded);
  return (
    <>
      <div
        className="hover:cursor-pointer "
        onClick={() => fileRef.current?.click()}
      >
        <Input
          id={type === "image" ? "image" : "video"}
          ref={fileRef}
          type="file"
          accept={type === "image" ? "image/*" : "video/*"}
          className="hidden"
          onChange={(e) => {
            setFile(e.target.files?.[0]);
            setIsFileAdded(true);
          }}
        />
        {type === "image" ? (
          <Image className="hover:text-white h-5 w-5 text-[#20EBA5]" />
        ) : (
          <FileVideo className="hover:text-white h-5 w-5 text-[#5197FF]" />
        )}
      </div>
    </>
  );
};
