import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductsList from "@/components/ProductList";
import { fetchproducts, ProductType } from "@/services/products";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";


export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchproducts()

  return { props: { products }}
}

const Products: NextPage = (props: {
  children?: ReactNode
  products?: ProductType[]
}) => {
  return (
    <>
    <Head>
      <title>Nossos Produtos</title>
      <meta name="description" content="Conheça todos os nosso produtos"/>
      <link rel="icon" href="/faviacon.ico" />
    </Head>

    <Header />
    <main>
      <h1 className="mt-20 font-bold px-4">
        Nossos Produtos
      </h1>
      {<ProductsList  products={props.products!} />}
      </main>
      <Footer />
    </>
  )
}

export default Products
