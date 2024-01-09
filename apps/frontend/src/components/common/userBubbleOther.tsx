"use client";
import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy } from "lucide-react";
import { toaster } from "@/lib/toast";

type UserBubbleOtherProps = {
  type: "ai" | "normal";
  src?: string;
  codeObj?: { language: string; code: string };
};

export const UserBubbleOther = ({
  type,
  src,
  codeObj,
}: UserBubbleOtherProps) => {
  if (type === "ai") {
    return (
      <>
        <div className="bg-[#282828] w-fit max-w-[70%] mt-[20px]  p-4 rounded-[20px] flex flex-col gap-2 float-left ">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-[#FF8181]">@ai</p>
            <p className="text-sm font-semibold">23/04/2023</p>
          </div>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            nihil dolor ipsum suscipit neque obcaecati, aliquid doloribus maxime
            accusantium.
          </p>
          {src && (
            <div className="w-[100%]">
              <AspectRatio ratio={16 / 9} className="rounded-[15px]">
                <Image
                  src={src}
                  alt="Image"
                  fill
                  className="rounded-[15px] object-cover"
                />
              </AspectRatio>
            </div>
          )}
          {codeObj && (
            <div className="w-[100%] rounded-[20px] overflow-hidden">
              <div className="w-[100%] h-[50px] bg-black/40 flex justify-between items-center px-4 text-sm">
                <p className="font-semibold">{codeObj.language}</p>
                <CopyToClipboard
                  text={codeObj.code}
                  onCopy={() =>
                    toaster({
                      message: "Copied",
                    })
                  }
                >
                  <div role="button">
                    <Copy className="w-[20px] h-[20px]" />
                  </div>
                </CopyToClipboard>
              </div>
              <SyntaxHighlighter
                customStyle={{
                  paddingLeft: "16px",
                  paddingBottom: "16px",
                  paddingTop: "16px",
                  fontSize: "14px",
                }}
                language={codeObj.language}
                style={atomOneDarkReasonable}
              >
                {codeObj.code}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      </>
    );
  }

  if (type === "normal") {
    return (
      <>
        <div className="bg-[#282828] w-fit max-w-[70%] mt-[20px]  p-4 rounded-[20px] flex flex-col gap-2 float-left ">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-[#FF8181]">@abhi1992002</p>
            <p className="text-sm font-semibold">23/04/2023</p>
          </div>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            nihil dolor ipsum suscipit neque obcaecati, aliquid doloribus maxime
            accusantium.
          </p>
          {src && (
            <div className="w-[100%]">
              <AspectRatio ratio={16 / 9} className="rounded-[15px]">
                <Image
                  src={src}
                  alt="Image"
                  fill
                  className="rounded-[15px] object-cover"
                />
              </AspectRatio>
            </div>
          )}
        </div>
      </>
    );
  }
};
