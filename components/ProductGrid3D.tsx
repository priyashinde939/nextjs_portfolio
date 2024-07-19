"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";



interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}
const products: Product[] = [
  { id: 1, name: "Elegant Pink Dress", price: 89.99, rating: 4.5, image: "/1.jpg" },
  { id: 2, name: "Rose Gold Watch", price: 129.99, rating: 4.8, image: "/2.jpg" },
  { id: 3, name: "Pink Wireless Earbuds", price: 79.99, rating: 4.2, image: "/3.jpg" },
  { id: 4, name: "Blush Makeup Palette", price: 34.99, rating: 4.7, image: "/4.jpg" },
  { id: 5, name: "Pink Leather Handbag", price: 149.99, rating: 4.6, image: "/5.jpg" },
  { id: 6, name: "Flamingo Phone Case", price: 19.99, rating: 4.3, image: "/6.jpg" },
];

const ProductGrid3D = () => {
  return (
      <div className="py-32">
      <h1 style={{ fontFamily:'blackExtraExpanded'}}
        className="heading">
        A small selection of{" "}
        <span className="text-purple-300">recent projects</span>
      </h1>
    
    <div className="flex flex-wrap gap-16 bg-black-100 items-center justify-center mt-10 mb-10 pb-32 ">
      {products.map((product) => (
        <CardContainer key={product.id} className="inter-var cursor-pointer">
          <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-slate-600 bg-opacity-0.2 dark:border-white/[0.2] border-black/[0.1] w-10px h-15 rounded-xl p-5 border">
            <CardItem
              translateZ="50"
              className="text-lg font-bold text-white-300"
            >
              {product.name}
            </CardItem>
            
            <CardItem
              as="p"
              translateZ="60"
              className="text-blue-200 text-sm mt-2"
            >
              ${product.price.toFixed(2)}
            </CardItem>

            <CardItem translateZ="100" className="w-full mt-4">
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl group-hover/card:shadow-xl"
                  alt={product.name}
                />
              </div>
            </CardItem >

            <CardItem
              translateZ="60"
              className="text-white text-sm mt-2"
            >
              <p className="text-white-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt </p>
            </CardItem>

            <CardItem 
            translateZ="45">
                <div>
                  
                </div>
                <MagicButton 
                title="Explore"
                icon={<FaLocationArrow />}
                position="inline"
                />
            </CardItem >
          </CardBody>
        </CardContainer>
      ))}
    </div>
    </div>
  );
}

export default ProductGrid3D;
    
