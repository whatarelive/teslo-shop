import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";

import Title from "@/components/ui/title/Title";
import ProductGrid from "@/components/products/ProductGrid";

import type { ValidCategory } from "@/interfaces/product.interface";


const seedProducts = initialData.products;
const labels: Record<ValidCategory, string> = {
  men: "para hombres",
  women: "para mujeres",
  kid: "para niños",
  unisex: "para todos",
}

interface Props {
  params: Promise<{
    id: ValidCategory;
  }>;
}

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;

  const products = seedProducts.filter((product) => product.gender === id);
  
  if (products.length === 0) {
    notFound();
  }

  return (
    <>
      <Title 
        title={`Artículos ${labels[id]}`} 
        subtitle={"Todos los productos"} 
        className="mb-2"
      />

      <ProductGrid products={products}/>
    </>
  )
}
