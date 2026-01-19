import { lazy } from "react";
import { Routes, Route } from "react-router";

// Main Pages

const HomePage = lazy(() => import("../pages/Home/Home.jsx"));
const ServiceDetailPage = lazy(() => import("../pages/ServiceDetail/ServiceDetail.jsx"));

const AppRoutes = () => {
  return (
    // <React.Suspense
    //   fallback={
    //     <Modal>
    //       <Loader />
    //     </Modal>
    //   }
    // >
    <Routes>
      <Route path="/" element={<HomePage />} exact />
      <Route path="/service/:slug" element={<ServiceDetailPage />} />

      {/* Unknown Routes */}

      {/* <Route path="*" element={<PageNotFoundEl />} /> */}
    </Routes>
    // </React.Suspense>
  );
};

export default AppRoutes;
