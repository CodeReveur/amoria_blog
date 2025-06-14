import React from "react";

interface ProductCardProps {
  title: string;
  description: string;
  imgSrc?: string;
}

const ProductCard = ({ title, description, imgSrc }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-xl transition-all">
      {imgSrc && (
        <img
          src={imgSrc}
          alt={title}
          className="mx-auto mb-4 h-32 w-full object-cover rounded"
        />
      )}
      <h3 className="text-lg font-bold text-black">{title}</h3>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      
    </div>
  );
};

export default ProductCard;
