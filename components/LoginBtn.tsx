"use client";
import { User } from "lucide-react";

const LoginBtn = () => {
  return (
    <div>
      <button className="flex  items-center justify-center lg:px-3 px-2 py-2 rounded-lg gap-2 text-blue-600 border border-blue-600">
        <User className="w-4 h-4 lg:w-6 lg:h-6" />
        <p className="max-lg:hidden">ورود</p>
      </button>
    </div>
  );
};

export default LoginBtn;
