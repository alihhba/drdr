import { Search, MapPin } from "lucide-react";
import React from "react";

const SearchBox = () => {
  return (
    <div className="w-full lg:w-[550px] h-[50px] flex items-center justify-between border-2 border-[#1aab49]  rounded-full px-2 pr-4 bg-[#ffffff] group">
      <div className="w-full">
        <input
          type="text"
          placeholder="جستوجوی نام دکتر،کاینیک یا تخصص"
          className="w-full bg-transparent outline-none border-none focus-visible:ring-0 placeholder:text-[#1aab49] "
        />
      </div>

      <div className="flex gap-2">
        <button className="flex items-center justify-center gap-1">
          <MapPin className="w-4 h-4 text-blue-600" />
          <p className="text-blue-600">ایران</p>
        </button>
        <div className="bg-[#1aab49] p-2 rounded-full">
          <Search className="w-4 h-4  text-white" />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
