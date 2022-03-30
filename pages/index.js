import React from "react";

//Components
import Products from "../components/Products/Products";

const Home = () => {
  return (
    <>
      <title>Ecommerce</title>
      <meta name="description" content="Generated by create next app" />
      <link
        rel="icon"
        href="https://image.shutterstock.com/image-vector/selfservice-supermarket-full-shopping-trolley-260nw-374614351.jpg"
      />
      <Products />
    </>
  );
};

export default Home;