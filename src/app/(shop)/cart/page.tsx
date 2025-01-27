import Link from "next/link";
import Image from "next/image";
import { initialData } from "@/seed/seed";

import Title from "@/components/ui/title/Title";
import SelectedQuantity from '@/components/products/SelectedQuantity';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CartPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito"/>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cart */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">
              Agregar más items
            </span>
            <Link href="/" className="underline mb-5">
              Continúa comprando
            </Link>
          </div>

          {/* Items */}
          {
            productsInCart.map((product) => (
              <div key={ product.slug } className="flex">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={ 100 }
                  height={ 100 }
                  alt={ product.title }
                  className="mr-5 rounded"
                />

                <div>
                  <p>{ product.title }</p>
                  <p>{ product.price }</p>
                  <SelectedQuantity quantity={ 3 }/>

                  <button className="underline mt-3">
                    Remover
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
