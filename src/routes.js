import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Constants/app.routes";
import Redirect from "./Components/Redirect/Redirect";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Components/Screens/Project/StartProject/StartProject";
import Login from "./Components/Screens/Login/Login";
import AuthGuard from "./Components/AuthGuard/AuthGuard";
import NewProject from "./Components/Screens/NewProject/NewProject";
import AddFileToProject from "./Components/Screens/File/AddFileToProject";
import ViewOrAddNewFile from "./Components/Screens/Project/File/ViewOrAddNewFile";
import Workspace from "./Components/Screens/Project/Workspace/Workspace";
import ProgressBar from "./Components/Screens/Project/Workspace/ProgressBar";
import Experiment from "./Components/Screens/Project/Experiment/Experiment";
import Setting from "./Components/Screens/Project/Setting/Setting";
import Serving from "./Components/Screens/Project/Serving/Serving";
import StartProject from "./Components/Screens/Project/StartProject/StartProject";
import Project from "./Components/Screens/Project/Project";
import Dataset from "./Components/Screens/Datasets/Dataset";
import General from "./Components/Screens/Datasets/General/General";
import DatasetSetting from "./Components/Screens/Datasets/DatasetSetting/DatasetSetting";
import Info from "./Components/Screens/Datasets/Info/Info";
import Commit from "./Components/Screens/Datasets/Commits/Commit";

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
        path: AppRoutes.PROJECT,
        element: <Project />,
        children: [
          {
            path: AppRoutes.STARTPROJECT,
            element: <StartProject />,
          },
          {
            path: AppRoutes.PROJECT_PAGE,
            element: <NewProject />,
          },
          {
            path: AppRoutes.ADDFILETOPROJECT,
            element: <AddFileToProject />,
          },
          {
            path: AppRoutes.VIEWANDADDNEWFILETOPROJECT,
            element: <ViewOrAddNewFile />,
          },
          {
            path: AppRoutes.WORKSPACE,
            element: <Workspace />,
          },
          {
            path: AppRoutes.PROGRESS,
            element: <ProgressBar />,
          },
          {
            path: AppRoutes.EXPERIMENT,
            element: <Experiment />,
          },
          {
            path: AppRoutes.SETTING,
            element: <Setting />,
          },
          {
            path: AppRoutes.SERVING,
            element: <Serving />,
          },
        ],
      },
      {
        path: AppRoutes.DATASET,
        element: <Dataset />,
        children: [
          {
            path: AppRoutes.GENERAL,
            element: <General />,
          },
          {
            path: AppRoutes.SETTING,
            element: <DatasetSetting />,
          },
          {
            path: AppRoutes.INFO,
            element: <Info/>
          },
          {
            path: AppRoutes.COMMIT,
            element: <Commit/>
          }
        ],
      },
    ],
  },
  {
    path: AppRoutes.LOGIN,
    element: <Login />,
  },
]);

export default appRouter;
