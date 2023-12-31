/* eslint-disable @next/next/no-img-element */
import "@/styles/components/card/expertise-card.css";
import Link from "next/link";
import React from "react";

interface props {
  title: string;
  img: string;
  id: string;
}

const ExpertiseCard = ({ title, img, id }: props) => {
  return (
    <Link href={`/search/expertise/${id}`}>
      <div className="expertise-card-container">
        <img src={img} alt="expertise-1" className="expertise-card-image" />
        <p className="expertise-card-title">{title}</p>
      </div>
    </Link>
  );
};

export default ExpertiseCard;
