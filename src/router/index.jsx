import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Loader from "@/components/Loader";

import MainLayout from "@layouts/mainLayout";

const Router = () => {
  const { pathname } = useLocation();

  //import project pages
  const Home = lazy(() => import("@pages/Home"));
  const News = lazy(() => import("@pages/News"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/yangiliklar" element={<News />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <p>404</p>
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default Router;
