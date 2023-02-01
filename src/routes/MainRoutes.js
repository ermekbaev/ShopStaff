import React from "react";
import { Route, Routes } from "react-router-dom";

import AboutUsPage from "../pages/AboutUsPage";
import AdminPage from "../pages/AdminPage";

import CartPage from "../pages/CartPage";
import EditProductPage from "../pages/EditProductPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import OurPartnersPage from "../pages/OurPartnersPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/products",
      element: <ProductsPage />,
      id: 1,
    },
    {
      link: "/",
      element: <HomePage />,
      id: 2,
    },

    {
      link: "/cart",
      element: <CartPage />,
      id: 3,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 4,
    },
    {
      link: "/products/:id",
      element: <ProductDetailsPage />,
      id: 5,
    },
    {
      link: "/partners",
      element: <OurPartnersPage />,
      id: 6,
    },
    {
      link: "/about",
      element: <AboutUsPage />,
      id: 7,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 8,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 9,
    },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
