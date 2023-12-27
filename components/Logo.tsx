/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

interface props {
  blue?: boolean;
}

const Logo = ({ blue }: props) => {
  return (
    <Link href={"/"} className="flex items-center gap-1">
      <img src="/images/drdr-heart.svg" alt="logo" />
      {blue ? (
        <img src="/images/drdr.svg" alt="logo" />
      ) : (
        <img src="/images/drdr-logo-white.svg" alt="logo" />
      )}
    </Link>
  );
};

export default Logo;
