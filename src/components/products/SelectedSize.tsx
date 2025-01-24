import clsx from "clsx";
import type { FC } from "react";
import type { ValidSizes } from "@/interfaces/product.interface";

interface Props {
    selectedSize: ValidSizes;
    avalibleSizes: ValidSizes[];
}

const SelectedSize: FC<Props> = ({ selectedSize, avalibleSizes }) => {
  return (
    <div className="my-5">
        <h3 className="font-bold mb-4">Tallas disponibles</h3>

        <div className="flex">
            {
                avalibleSizes.map((size) => (
                    <button
                        key={size}
                        className={
                            clsx(
                                "mx-2 text-lg hover:underline",
                                { "underline" : size === selectedSize }
                            )
                        }>
                        { size }
                    </button>
                ))
            }
        </div>
    </div>
  )
}

export default SelectedSize;