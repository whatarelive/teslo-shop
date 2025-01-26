import { notFound } from "next/navigation";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";

import SelectedSize from "@/components/products/SelectedSize";
import SelectedQuantity from "@/components/products/SelectedQuantity";
import ProductSlideshow from "@/components/products/ProductSlideshow";


interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* SlideShow */}
      <ProductSlideshow
        title={ product.title }
        images={ product.images }
        className="col-span-1 md:col-span-2"
      />

      {/* Product Details */}
      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased text-xl font-bold`}>
          { product.title }
        </h1>
        <p className="text-lg mb-5">
          ${ product.price }
        </p>
        
        {/* Size selector */}
        <SelectedSize selectedSize={product.sizes[0]} avalibleSizes={product.sizes}/>

        {/* Quantity selector */}
        <SelectedQuantity quantity={1}/>

        {/* Button */}
        <button className="btn-primary my-5">
          Agregar al carrito       
        </button>

        {/* Description */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">
          { product.description }
        </p>
      </div>
    </div>
  )
}
