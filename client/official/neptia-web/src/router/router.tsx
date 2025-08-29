import About from "@src/component/ui/About/About";
import Open from "@src/component/ui/Open/Open";
import Product from "@src/component/ui/Product/Product";
import Home from "@src/page/HomePage/HomePage";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to="/home" />,
    },
    {
      path: "/home",
      element: <Home />,
      children: [
        {
          path: "/home",
          element: <Navigate to={"/home/about"} />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "open",
          element: <Open />,
        },

        {
          path: "product",
          element: <Product />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true, // Enables future flag for relative paths in splats
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

const AppRouter: React.FC = () => {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
};

export default AppRouter;
