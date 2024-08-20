import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { NextPage } from "next";
import Head from "next/head";

const Cart: NextPage = () => {
  return (
    <>
    <Head>
      <title>Nossos Produtos</title>
      <meta name="description" content="Meu carrinho de compras"/>
      <link rel="icon" href="/faviacon.ico" />
    </Head>

    <Header />
      <h1 className="mt-20">
        Carrinho
      </h1>
      <Footer />
    </>
  )
}

export default Cart