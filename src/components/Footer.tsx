import Link from "next/link"


const Footer = () => {
    return (
        <footer className=" bg-black fixed w-full bottom-0 py-2 text-white  justify-center px-4 flex ">
            <div>
            <Link href="https://black-nextjs-ten-alpha.vercel.app/" target="_blank">
            &copy; Borges 2024
            </Link>
            </div>
        
        </footer>
    )
}

export default Footer