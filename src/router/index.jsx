import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

import MainLayout from "@layouts/mainLayout";

const Router = () => {
  const { pathname } = useLocation();

  //import project pages
  const Home = lazy(() => import("@pages/Home"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Suspense fallback={<div>Laoding...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
