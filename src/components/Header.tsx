import Link from "next/link"


const Header = () => {
    return (
        <header className=" bg-black fixed w-full top-0 text-white py-2  px-4 flex justify-between">
            <div>
            <Link href="/" passHref>
            Início
            </Link>
            </div>
            
            <div className="flex gap-3">
            <Link href="/products">
            Produtos
            </Link>
            <Link href="/cart">
            Carrinho
            </Link>
            </div>
        </header>
    )
}

export default Header