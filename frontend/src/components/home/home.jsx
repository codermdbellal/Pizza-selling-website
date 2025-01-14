import NavbarMini from "../../components/navbarmini/navbarmini.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import MobileNav from "../../components/mobileNav/mobilenav.jsx";
import Brand from "../../components/brand/brand.jsx";
import ProductMenu from "../../components/productmenu/productmenu.jsx";
import Store from "../../components/store/store.jsx";
import Footer from "../../components/footer/footer.jsx";


const home = () => {
  return (
    <div className="home-container">
      <NavbarMini />
      <Navbar />
      <MobileNav/>
      <Brand />
      <ProductMenu />
      <Store />
      <Footer />
    </div>
  );
};

export default home;
