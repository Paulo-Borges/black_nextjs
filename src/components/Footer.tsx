import Link from "next/link"


const Footer = () => {
    return (
        <footer className=" bg-black fixed w-full bottom-0 py-2 text-white  justify-center px-4 flex ">
            <div>
            <Link href="https://www.linkedin.com/in/paulo-borges-de-almeida-b543b3242/" target="_blank">
            &copy; Borges 2024
            </Link>
            </div>
            {/* href="https://black-nextjs-ten-alpha.vercel.app/" */}
        </footer>
    )
}

export default Footer