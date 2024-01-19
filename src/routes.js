import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Constants/app.routes";
import Redirect from "./Components/Redirect/Redirect";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Components/Screens/Dashboard/Dashboard";
import Login from "./Components/Screens/Login/Login";
import AuthGuard from "./Components/AuthGuard/AuthGuard";

const appRouter = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: <Redirect />,
  },
  {
    path: AppRoutes.HOME,
    element: (
      <AuthGuard>
        <Layout />
      </AuthGuard>
    ),
    children: [
      {
        path: AppRoutes.DASHBOARD,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: AppRoutes.LOGIN,
    element: <Login />,
  },
]);

export default appRouter;
