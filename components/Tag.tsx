import React from "react";

const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border border-[#c4ced4] rounded-full px-3 py-1 text-sm text-gray-500 min-w-max">
      {children}
    </div>
  );
};

export default Tag;
