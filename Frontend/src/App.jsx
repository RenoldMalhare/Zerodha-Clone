import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Landing Page/Home/HomePage";
import AboutPage from "./Landing Page/About/AboutPage";
import PricingPage from "./Landing Page/Pricing/PricingPage";
import ProductPage from "./Landing Page/Product/ProductPage";
import SignUp from "./Landing Page/Signup/SignupPage";
import Support from "./Landing Page/Support/SupportPage";
import Footer from "./Landing Page/Footer";
import Navbar from "./Landing Page/Navbar";
import PageNotFound from "./Landing Page/PageNotFound";
import Login from "./Landing Page/Signup/LoginForm";

function App() {
  // const router = createBrowserRouter([
  //   { path: "/", element: <HomePage /> },
  //   { path: "/about", element: <AboutPage /> },
  //   { path: "/pricing", element: <PricingPage /> },
  //   { path: "/product", element: <ProductPage /> },
  //   { path: "/signup", element: <SignUp /> },
  //   { path: "/support", element: <Support /> },
  //   { path: "*", element: <PageNotFound /> },
  // ]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <Navbar /> */}
      {/* <RouterProvider router={router} /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
