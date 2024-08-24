import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ProductType } from "@/services/products";
// import SuccessToast from '../components/SuccessToast'

type ProductCardProps = {
    product: ProductType
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    const [toastIsOpen, setToastIsOpen] = useState(false)
    const { id, name, imageUrl, price } = product

    return (
        <>
        <section>
            <Link href={`/products/${id}`}>
            <Image className="" src={imageUrl} alt={product.name} height={500} width={600} />
            </Link>
            
            <div className="flex flex-col px-4">
            <Link href={`/products/${id}`}>
            <h5 className="font-bold text-xs">{name}</h5>
            </Link>
            <span className="text-xs">
                R$ {price}
            </span>
            <button className="bg-black mt-4 text-white text-xs mb-2 rounded py-2" onClick={() => {
                setToastIsOpen(true)
                setTimeout(() => setToastIsOpen(false), 1000 * 3)
            }}>
                Adicionar ao Carrinho
            </button>
            </div>
        </section>

        {/* <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} /> */}

</>
    )
}

export default ProductCard