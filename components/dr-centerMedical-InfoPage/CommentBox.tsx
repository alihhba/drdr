import React from "react";
import StarBox from "../StarBox";

const CommentBox = () => {
  return (
    <div className="w-full h-fit p-3 border border-[#ECEFF1] rounded-lg py-4">
      <div className="flex flex-col gap-3">
        <div className="flex ">
          <div className="flex flex-col">
            <p className="font-bold text-sm ">کاربر دکتردکتر</p>
            <p className="text-sm">دوشنبه 20 آذر</p>
          </div>
          <div className="mr-auto mb-auto bg-[#ECEFF1] p-0.5 px-2 rounded-sm">
            <StarBox />
          </div>
        </div>
        <p className="text-sm">
          كيست مويي انجام دادم بسيار راضيم و براي ترميم زخم بنده كلينيكشون
          پانسمان نوين هم انجام ميدهند تا ترميم زخم و بسته شدن زودتر انجام بشه
          من خيلي واضي هستم
        </p>
      </div>
    </div>
  );
};

export default CommentBox;
