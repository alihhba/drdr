import { User } from "lucide-react";
import React from "react";
import StarBox from "../StarBox";

const CommentCard = () => {
  return (
    <div className="flex flex-col p-4 rounded-lg border border-[#004E9B] w-[400px] min-w-[330px] h-fit shadow-sm">
      {/* info */}
      <div className="flex items-center  justify-between">
        <div className="flex  justify-start gap-2">
          <div className="bg-[#E6F3FF] rounded-full p-2 w-12 h-12 min-w-12 min-h-12 flex items-center justify-center">
            <User className="w-6 h-6 text-[#0067CD] " />
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <p>کاربر دکتردکتر</p>
            <StarBox />
          </div>
        </div>
        <p className="mb-auto text-[10px] text-[#1E1F21]"> ۲۶ مهر ۱۴۰۲ </p>
      </div>

      {/* main */}
      <p className="mt-5 text-[#1E1F21] line-clamp-4">
        دو تا از بچه هام رو آقای دکتر عمل کردن وخودم هم به خاطر سینوزیت بیمار
        آقای دکتر بودم و خیلی راضی بودم
      </p>

      <div className="mt-14">
        <p className="text-[#1E1F21]">
          <span className="text-[#0067CD]">مراجعه</span> به{" "}
          <span className="text-black">دکتر سیدعبداله مدنی</span>
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
