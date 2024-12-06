import React from "react";
import Navbars from "../Components/NavbarComponent/Navbars";
import Crousels from "../Components/CrouselComponent/Crousels";
import Catogories from "../Components/CatogoriesComponent/Catogories";
import Banner from "../Components/BannerCtgrCmpnt/Banner";
import TopProducts from "../Components/TopProductsCmpnt/TopProducts";
import ProductPackage from "../Components/ProductPackage/ProductPackage";
import Footer from "../Components/footer/Footer";
import Blog from "../Components/BlogComponent/Blog";
import Brand from "../Components/BrandsComponent/Brand";

function HomePages() {
  return (
    <>
      <Navbars />
      <Crousels />
      <Catogories />
      <Banner />
      <TopProducts />
      <ProductPackage />
      <Blog />
      <Brand />
      <Footer />
    </>
  );
}

export default HomePages;
