import { Eye } from "lucide-react";
import React from "react";

const View = () => {
  return (
    <div className="flex items-center  gap-1 mx-auto mt-auto">
      <Eye className="w-3 h-3 mb-1.5" />
      <p className="text-sm">
        12<span className="">K</span>
      </p>
    </div>
  );
};

export default View;
