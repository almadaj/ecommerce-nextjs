import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Meu carrinho de compras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <h1>Carrinho</h1>
    </>
  );
};

export default Cart;
