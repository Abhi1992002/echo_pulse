"use client";
import { Send, XCircle } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Button } from "../ui/button";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { UploadingTag } from "../home/uploadingTag";
import { useEdgeStore } from "@/lib/edgestore";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  fileStatePost,
  isFileAdded,
  isFileAddedChat,
} from "@/store/fileStorage";
import { UserAvatar } from "../common/userAvatar";
type ChatInputProps = {};

export const ChatInput = ({}: ChatInputProps) => {
  const [state, setState] = useState();
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
    <div className="flex flex-col  gap-4 w-[100%]">
      <div className="flex gap-4">
        <div>
          <UserAvatar size={"sm"} />
        </div>

        <div className="w-[100%] bg-[#222222] border border-[#2F2E2E] flex gap-2 justify-between items-start rounded-[15px]">
          <TextareaAutosize
            placeholder="Tell People About Your thoughts"
            className="bg-transparent no-scrollbar py-3 px-3 placeholder:text-[#7D7D7D] outline-none rounded-[10px] text-sm w-[100%]"
          />

          <div className=" flex items-start justify-start gap-4 p-3">
            {!fileAdded ? (
              <>
                <UploadingTag type="image" />
                <UploadingTag type="video" />
              </>
            ) : (
              ""
            )}

            <div>
              <Send className="text-[#CBCBCB] w-[20px] h-[20px]" />
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
};
