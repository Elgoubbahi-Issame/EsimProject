import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import WwwmontyesimcomByHtmltod61 from "./pages/WwwmontyesimcomByHtmltod61";
import WwwmontyesimcomByHtmltod from "./pages/WwwmontyesimcomByHtmltod";
import WwwmontyesimcomByHtmltod5 from "./pages/WwwmontyesimcomByHtmltod5";
import WwwmontyesimcomByHtmltod1 from "./pages/WwwmontyesimcomByHtmltod1";
import WwwmontyesimcomByHtmltod2 from "./pages/WwwmontyesimcomByHtmltod2";
// import WwwmontyesimcomByHtmltod3 from "./pages/WwwmontyesimcomByHtmltod3";
import WwwmontyesimcomByHtmltod4 from "./pages/WwwmontyesimcomByHtmltod4";
import WwwmontyesimcomByHtmltod6 from "./pages/WwwmontyesimcomByHtmltod6";
import WwwmontyesimcomByHtmltod7 from "./pages/WwwmontyesimcomByHtmltod7";
import WwwmontyesimcomByHtmltod9 from "./pages/WwwmontyesimcomByHtmltod9";
import WwwmontyesimcomByHtmltod8 from "./pages/Term&Condition";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/wwwmontyesimcom-by-htmltodesign-free-version-22022024-191258-cet":
        title = "";
        metaDescription = "";
        break;
      case "/wwwmontyesimcom-by-htmltodesign-free-version-22022024-191336-cet":
        title = "";
        metaDescription = "";
        break;
      case "/wwwmontyesimcom-by-htmltodesign-free-version-22022024-191417-cet":
        title = "";
        metaDescription = "";
        break;
      case "/wwwmontyesimcom-by-htmltodesign-free-version-22022024-191432-cet":
        title = "";
        metaDescription = "";
        break;
      case "/wwwmontyesimcom-by-htmltodesign-free-version-22022024-191537-cet":
        title = "";
        metaDescription = "";
        break;
      case "/wwwmontyesimcom-by-htmltodesign-free-version-22022024-191647-cet":
        title = "";
        metaDescription = "";
        break;
      case "/wwwmontyesimcom-by-htmltodesign-free-version-22022024-191734-cet":
        title = "";
        metaDescription = "";
        break;
      case "/wwwmontyesimcom-by-htmltodesign-free-version-24022024-210712-cet":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<WwwmontyesimcomByHtmltod61 />} />
      <Route
        path="/how-it-works"
        element={<WwwmontyesimcomByHtmltod />}
      />
      <Route
        path="/partnership"
        element={<WwwmontyesimcomByHtmltod5 />}
      />
      <Route
        path="/about-us"
        element={<WwwmontyesimcomByHtmltod1 />}
      />
      <Route
        path="/contact-us"
        element={<WwwmontyesimcomByHtmltod2 />}
      />
      {/* <Route
        path="/sign-in"
        element={<WwwmontyesimcomByHtmltod3 />}
      /> */}
      <Route
        path="/plans/*"
        element={<WwwmontyesimcomByHtmltod4 />}
      />
      <Route
        path="/plans/one-plan"
        element={<WwwmontyesimcomByHtmltod6 />}
      />
      <Route
        path="/checkout"
        element={<WwwmontyesimcomByHtmltod7 />}
      />
      <Route
        path="/payment-status"
        element={<WwwmontyesimcomByHtmltod9 />}
      />
      <Route
        path="/term-condition"
        element={<WwwmontyesimcomByHtmltod8 />}
      />
    </Routes>
  );
}
export default App;
