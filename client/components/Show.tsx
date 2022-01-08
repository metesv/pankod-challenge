import React from "react";
import Image from 'next/image'
import { ShowType } from "../types";

const Show = ({ title, description, programType, images, releaseYear }: ShowType) => {
  return (
    <div>
      <Image
        src={images["Poster Art"].url}
        alt={title}
        width={100}
        height={100}
      />
      <h3>{title}</h3>
      <h4>{programType}</h4>
      <h4>{releaseYear}</h4>
      <h4>{description}</h4>
    </div>
  );
}

export default Show;