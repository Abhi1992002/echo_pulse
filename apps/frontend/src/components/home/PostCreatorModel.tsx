"use client";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UploadingTag } from "./uploadingTag";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEdgeStore } from "../../lib/edgestore";
import { fileStatePost, isFileAdded } from "@/store/fileStorage";
import { Button } from "../ui/button";
import TextareaAutosize from "react-textarea-autosize";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import { XCircle } from "lucide-react";

type PostCreatorModelProps = {};

export const PostCreatorModel = ({}: PostCreatorModelProps) => {
  const { edgestore } = useEdgeStore();
  const file = useRecoilValue(fileStatePost);
  const setFile = useSetRecoilState(fileStatePost);
  const fileAdded = useRecoilValue(isFileAdded);
  const setIsFileAdded = useSetRecoilState(isFileAdded);
  async function submitHandler() {
    if (file) {
      const res = await edgestore.publicFiles.upload({
        file,
        onProgressChange: (progress) => {
          // you can use this to show a progress bar
          console.log(progress);
        },
      });
      console.log(res);
    }
  }

  return (
    <div className="w-[100%] flex flex-col items-center gap-4 text-white ">
      <div className="flex w-[100%] items-start gap-4 ">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="w-[100%] flex gap-2 flex-col">
          <TextareaAutosize
            placeholder="Tell People About Your thoughts"
            className="bg-[#222222] border border-[#2F2E2E] py-3 px-3 placeholder:text-[#7D7D7D] outline-none rounded-[10px] text-sm w-[100%]"
          />
          <div className="w-[100%]">
            {fileAdded ? (
              <div className="w-[70%] ">
                <AspectRatio ratio={16 / 9} className="rounded-[15px] relative">
                  <Button
                    onClick={() => {
                      setIsFileAdded(false);
                      setFile(undefined);
                    }}
                    tone="dark"
                    className="w-fit p-0 bg-transparent absolute top-[-5px] right-[-5px] z-50"
                  >
                    <XCircle className="text-white rounded-full bg-black w-[20px] h-[20px]" />
                  </Button>
                  <Image
                    src={URL.createObjectURL(file!)}
                    alt="Image"
                    fill
                    className="rounded-[15px] relative object-cover z-1"
                  />
                </AspectRatio>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="w-[100%] flex items-center justify-start gap-4">
            {!fileAdded ? (
              <>
                <UploadingTag type="image" />
                <UploadingTag type="video" />
              </>
            ) : (
              ""
            )}

            <Button tone="bright" className="w-fit">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
