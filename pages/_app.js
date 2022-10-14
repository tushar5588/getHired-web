import "../styles/globals.css";
import "../public/assets/css/bootstrap.min.css";
// import "../public/assets/css/owl.carousel.min.css";
import "../public/assets/css/flaticon.css";
import "../public/assets/css/price_rangs.css";
import "../public/assets/css/slicknav.css";
import "../public/assets/css/animate.min.css";
import "../public/assets/css/magnific-popup.css";
import "../public/assets/css/fontawesome-all.min.css";
import "../public/assets/css/themify-icons.css";
import "../public/assets/css/slick.css";
import "../public/assets/css/nice-select.css";
import "../public/assets/css/style.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
