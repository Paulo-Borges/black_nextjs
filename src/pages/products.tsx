import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { NextPage } from "next";
import Head from "next/head";

const Products: NextPage = () => {
  return (
    <>
    <Head>
      <title>Nossos Produtos</title>
      <meta name="description" content="Conheça todos os nosso produtos"/>
      <link rel="icon" href="/faviacon.ico" />
    </Head>

    <Header />
      <h1 className="mt-20">
        Nossos Produtos
      </h1>

      <Footer />
    </>
  )
}

export default Products
