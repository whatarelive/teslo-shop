'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, type FC } from "react";
import type { Product } from "@/interfaces/product.interface";

interface Props {
    product: Product;
}

const ProductGridItem: FC<Props> = ({ product }) => {
    const [ displayImage, setDisplayImage ] = useState(product.images[0]);

  return (
    <div className="rounded-md overflow-hidden fade-in">
        {/* Product Image */}
        <Link href={`/product/${ product.slug }`}>
            <Image 
                src={`/products/${ displayImage }`} 
                alt={ product.title } 
                className="w-full object-cover rounded" 
                width={ 500 } 
                height={ 500 }
                onMouseEnter={() => setDisplayImage(product.images[1])}
                onMouseLeave={() => setDisplayImage(product.images[0])}
            />
        </Link>

        {/* Product Description */}
        <div className="p-4 flex flex-col">
            <Link 
                href={`/product/${ product.slug }`}
                className="hover:text-blue-600"
            >
                { product.title }
            </Link>

            <span className="font-bold">
                ${ product.price }
            </span>
        </div>
    </div>
  )
}

export default ProductGridItem;
