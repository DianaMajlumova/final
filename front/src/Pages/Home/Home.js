import React from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import { Helmet } from "react-helmet";
import GlobalBrands from "../../Components/HomeComponents/Globalbrands/GlobalBrands";
import Insights from "../../Components/HomeComponents/Insights/Insights";
import FirstSection from "../../Components/HomeComponents/FirstSection/FirstSection";
import Worktogether from "../../Components/HomeComponents/Worktogether/Worktogether";
import Footer from "../../Layout/Footer/Footer";
import Industry from "../../Components/HomeComponents/Industry/Industry";

function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <FirstSection />
      <Industry/>
      <Insights />
      <GlobalBrands />
      <Worktogether />
      <Footer />
    </div>
  );
}

export default Home;
