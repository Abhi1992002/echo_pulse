import { BookmarkIcon } from "lucide-react";
import React from "react";
import TextTruncate from "react-text-truncate";

type BookmarkProps = {
  date: string;
  content: string;
  bookmarkId: string;
};

export const Bookmark = ({ content, date, bookmarkId }: BookmarkProps) => {
  return (
    <div
      role="button"
      className="w-[100%] bg-[#222222] border border-white/40 text-[#CBCBCB] rounded-[20px] p-4 flex gap-2 flex-col"
    >
      <div className="flex justify-between">
        <p>{date}</p>
        <div role="button">
          <BookmarkIcon className="w-[16px] h-[16px] hover:text-[#FFFD00] hover:fill-[#FFFD00] text-white fill-white" />
        </div>
      </div>

      {/* content */}
      <div>
        <div className="text-sm text-white">
          <TextTruncate
            line={2}
            element="span"
            truncateText="…"
            text={content}
          />
        </div>
      </div>
    </div>
  );
};
