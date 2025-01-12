import Link from "next/link";
import Image from "next/image";
import { titleFont } from "@/config/fonts";

export default function PageNotFound() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:h-[800px] w-full justify-center items-center align-middle">
        
        {/* Text Message Container */}
        <div className="text-center px-5 mx-5">
            <h2 className={`${ titleFont.className } antialiased text-9xl`}>404</h2>
            <p className="font-semibold text-xl">Whoops! Lo sentimos mucho</p>
            <p className="font-light">
                <span>Puedes regresar al </span>
                <Link 
                    href="/"
                    className="font-normal hover:underline transition-all"
                >
                        Inicio
                </Link>
            </p>
        </div>

        {/* Image Container */}
        <div className="md:px-5 md:mx-5">
            <Image 
                src="/imgs/starman_750x750.png" 
                alt="Starman"
                className="p-5 sm:p-0"
                width={ 550 }
                height={ 550 }
            />
        </div>
        
    </div>
  )
}
