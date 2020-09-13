import React from "react";
import "./Home.css";
import ProductItem from "./ProductItem/ProductItem";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
          className="home__image"
        />
      </div>

      <div className="home__row">
        <ProductItem
          id="2123213"
          title="Amazon Brand - Solimo Lily Bloom 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Green"
          image="https://images-na.ssl-images-amazon.com/images/I/91WpPGL-YmL._SX522_.jpg"
          rating={5}
          price={599}
        />
        <ProductItem
          id="3243242"
          title="Mi Notebook Horizon Edition 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop"
          image="https://images-na.ssl-images-amazon.com/images/I/712rw0zcH8L._SX679_.jpg"
          rating={4}
          price={52999}
        />
        <ProductItem
          id="234324"
          title="Lenovo Tab M10 FHD Plus Tablet (10.3-inch, 4GB, 128GB, Wi-Fi + LTE, Volte Calling), Platinum Grey"
          image="https://images-na.ssl-images-amazon.com/images/I/81o5b7QHITL._SX679_.jpg"
          rating={2}
          price={15890}
        />
      </div>
      <div className="home__row">
        <ProductItem
          id="324234"
          title="Apple iPhone 11 (64GB) - Black"
          image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SX679_.jpg"
          rating={4}
          price={59790}
        />
        <ProductItem
          id="234454"
          title="Lenovo Casual Laptop Backpack B210 15.6-inch Water Repellent Blue"
          image="https://images-na.ssl-images-amazon.com/images/I/71EQMrnlDUL._SY450_.jpg"
          rating={5}
          price={899}
        />
      </div>
      <div className="home__row">
        <ProductItem
          id="543422"
          title="Lenovo Legion Y540 9th Gen Intel Core i5 15.6 inch FHD Gaming Laptop (8GB/1TB HDD+256GB SSD/Windows 10/NVIDIA GTX 1650 4GB/Black/2.3Kg), 81SY00TGIN"
          image="https://images-na.ssl-images-amazon.com/images/I/61WVv134ZsL._SL1500_.jpg"
          rating={5}
          price={51250}
        />
      </div>
    </div>
  );
}

export default Home;
