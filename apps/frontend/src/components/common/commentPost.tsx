import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import TextareaAutosize from "react-textarea-autosize";
import { Send, XCircle } from "lucide-react";
import { UploadingTag } from "../home/uploadingTag";
import { Button } from "../ui/button";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { fileStatePost, isFileAdded } from "@/store/fileStorage";

type CommentPostProps = {};

export const CommentPost = ({}: CommentPostProps) => {
  const file = useRecoilValue(fileStatePost);
  const setFile = useSetRecoilState(fileStatePost);
  const fileAdded = useRecoilValue(isFileAdded);
  const setIsFileAdded = useSetRecoilState(isFileAdded);
  return (
    <>
      <div className="flex gap-4 items-center">
        <div>
          <Avatar className="w-9  h-9 rounded-[30px] z-[1]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <Dialog>
          <DialogTrigger className="w-[100%]">
            <div className="w-[100%] flex items-center justify-between px-4 h-12 hover:cursor-pointer rounded-[15px] bg-[#222222]">
              <p className="text-sm text-[#7D7D7D]">Write your comment</p>
              <Send className="text-[#CBCBCB] w-[20px] h-[20px]" />
            </div>
          </DialogTrigger>

          <DialogContent className="rounded-[30px!important] bg-[#1a1a1a]  border border-[#2F2E2E]">
            <DialogHeader>
              <DialogDescription>
                <div className="w-[100%] flex flex-col items-center gap-4 text-white ">
                  <div className="flex w-[100%] items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <TextareaAutosize
                      placeholder="Tell People About Your thoughts"
                      className="bg-[#222222] border border-[#2F2E2E] py-3 px-3 placeholder:text-[#7D7D7D] outline-none rounded-[10px] text-sm w-[100%]"
                    />
                  </div>

                  <div className="w-[100%]">
                    {fileAdded ? (
                      <div className="w-[70%] ">
                        <AspectRatio
                          ratio={16 / 9}
                          className="rounded-[15px] relative"
                        >
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
                  <div className="w-[100%] flex items-center justify-end gap-4">
                    {!fileAdded ? (
                      <>
                        <UploadingTag type="image" />
                        <UploadingTag type="video" />
                      </>
                    ) : (
                      ""
                    )}

                    <DialogClose>
                      <Button tone="bright" className="w-fit">
                        Submit
                      </Button>
                    </DialogClose>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
