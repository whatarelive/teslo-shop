import { initialData } from "@/seed/seed";
import Title from "@/components/ui/title/Title";
import ProductGrid from "@/components/products/ProductGrid";

const products = initialData.products;

export default function HomePage() {
  return (
    <>
      <Title 
        title="Tienda" 
        subtitle="Todos los productos" 
        className="mb-2"
      />

      <ProductGrid products={products}/>
    </> 
  );
}
