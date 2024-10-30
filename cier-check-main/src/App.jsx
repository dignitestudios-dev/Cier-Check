import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./component/Global/Layout";
import Loader from "./component/Global/Loader";
import ScrollToTop from "./component/Global/ScrollToTop";
import ScrollToTopButton from "./component/Global/ScrollToTopButton";
import AllProduct from "./pages/Product/AllProducts";
import Detail from "./pages/ProductDetail/Detail";
import Checkout from "./pages/Checkout/Checkout";
import Offer from "./pages/offer/Offer";

const Home = lazy(() => import("./pages/home/Home"));
const BreastCancer = lazy(() =>
  import("./pages/breastcancerawareness/BreastCancer")
);
const CancerGlossery = lazy(() =>
  import("./pages/cancerglossery/CancerGlossery")
);
const Contact = lazy(() => import("./pages/contact/Contact"));
const StartQuestionnaire = lazy(() =>
  import("./pages/startquestionnaire/StartQuestionnaire")
);
const Admin = lazy(() => import("./pages/admin/Admin"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Layout pages={<Home />} />} />
        <Route
          path="/breast-cancer"
          element={<Layout pages={<BreastCancer />} />}
        />
        <Route path="/contact-us" element={<Layout pages={<Contact />} />} />
        <Route
          path="/cancer-glossery"
          element={<Layout pages={<CancerGlossery />} />}
        />
        <Route
          path="/startquestionnaire"
          element={<Layout pages={<StartQuestionnaire />} />}
        />
        <Route
          path="/product"
          element={<Layout pages={<AllProduct />} />}
        />
        <Route
          path="/detail/:id"
          element={<Layout pages={<Detail />} />}
        />
        <Route
          path="/checkout"
          element={<Layout pages={<Checkout />} />}
        />
        <Route path="/admin" element={<Layout pages={<Admin />} />} />
        <Route path="/offers" element={<Layout pages={<Offer />} />} />
      </Routes>
    </Suspense>
  );
}

export default App;
