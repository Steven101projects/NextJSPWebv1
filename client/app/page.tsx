import Image from "next/image";

import MainHeader from "./components/MainHeader"
import MainFooter from "./components/MainFooter";

import AboutInfo from "./components/about_components/AboutPage";
import ServicesInfo from "./components/services_components/ServicesPage";
import ContactInfo from "./components/contact_components/ContactPage";

import BannerHome from "./components/home_components/BannerHome"

export default function Home() {
  return (
   <div>
    <MainHeader />
    <BannerHome/>
    Hello World!
    <AboutInfo/>
    <ServicesInfo/>
    <ContactInfo />
    <MainFooter/>
   </div>
  );
}
