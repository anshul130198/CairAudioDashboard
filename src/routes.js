import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Constants/constants";
import Redirect from "./Components/Redirect/Redirect";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Screens/Login/Login";
import AuthGuard from "./Components/AuthGuard/AuthGuard";
import NewProject from "./Components/Screens/Project/NewProject/NewProject";
import AddFileToProject from "./Components/Screens/Project/File/AddFileToProject";
import ViewOrAddNewFile from "./Components/Screens/Project/File/ViewOrAddNewFile";
import Workspace from "./Components/Screens/Project/Workspace/Workspace";
import StartProject from "./Components/Screens/Project/StartProject/StartProject";
import Project from "./Components/Screens/Project/Project";
import Dataset from "./Components/Screens/Datasets/Dataset";
import General from "./Components/Screens/Datasets/General/General";
import DatasetSetting from "./Components/Screens/Datasets/DatasetSetting/DatasetSetting";
import Info from "./Components/Screens/Datasets/Info/Info";
import Commit from "./Components/Screens/Datasets/Commits/Commit";
import ProgressBar from "./Components/Screens/Project/Workspace/ProgressBar";
import Experiment from "./Components/Screens/Project/Experiment/Experiment";
import Setting from "./Components/Screens/Project/Setting/Setting";
import Serving from "./Components/Screens/Project/Serving/Serving";
import Container from "./Components/Screens/Containers/Container";
import Registry from "./Components/Screens/Containers/Registry/Registry";
import BuildImg from "./Components/Screens/Containers/BuildImg/BuildImg";
import Compute from "./Components/Screens/Compute/Compute";
import Template from "./Components/Screens/Compute/Template/Template";
import Resource from "./Components/Screens/Compute/Resource/Resource";
import Storage from "./Components/Screens/Compute/Storage/Storage";
import AddNewTemplate from "./Components/Screens/Compute/Template/AddNewTemplate";
import Team from "./Components/Screens/Team/Team";
import AllTeams from "./Components/Screens/Team/AllTeams/AllTeams";
import Error from "./Components/Screens/Error/Error";
import Organization from "./Components/Screens/Organization/Organization";
import GetAllOrganizations from "./Components/Screens/Organization/GetAllOrganizations/GetAllOrganizations";
import CreateOrganization from "./Components/Screens/Organization/CreateOrganization/CreateOrganization";
import ForgotPassword from "./Components/Screens/Login/ForgotPassword";
import CreateOrganizationSetting from "./Components/Screens/Organization/CreateOrganizationSetting/CreateOrganizationSetting";
import GetAllSettings from "./Components/Screens/Organization/GetAllSettings/GetAllSettings";

const appRouter = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: <Redirect />,
    errorElement: <Error />
  },
  {
    path: AppRoutes.HOME,
    element: (
      <AuthGuard>
        <Layout />
      </AuthGuard>
    ),
    errorElement: <Error />,
    children: [
      {
        path: AppRoutes.PROJECT,
        element: <AuthGuard><Project /></AuthGuard>,
        errorElement: <Error />,
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
        element: <AuthGuard><Dataset /></AuthGuard>,
        errorElement: <Error />,
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
            element: <Info />,
          },
          {
            path: AppRoutes.COMMIT,
            element: <Commit />,
          },
        ],
      },
      {
        path: AppRoutes.ORGANIZATION,
        element: <AuthGuard><Organization /></AuthGuard>,
        errorElement: <Error />,
        children: [
          {
            path: AppRoutes.CREATE_ORGANIZATION,
            element: <CreateOrganization />,
          },
          {
            path: `${AppRoutes.EDIT_ORGANIZATION}/:id`,
            element: <CreateOrganization />,
          },
          {
            path: `${AppRoutes.VIEW_ORGANIZATION}/:id`,
            element: <CreateOrganization />,
          },
          {
            path: AppRoutes.GET_ALL_ORGANIZATIONS,
            element: <GetAllOrganizations />,
          },
          {
            path: `${AppRoutes.CREATE_SETTINGS}`,
            element: <CreateOrganizationSetting />,
          },
          {
            path: AppRoutes.GET_ALL_SETTINGS,
            element: <GetAllSettings />,
          },
          {
            path: `${AppRoutes.EDIT_SETTING}/:id`,
            element: <CreateOrganizationSetting />,
          },
          {
            path: `${AppRoutes.VIEW_SETTING}/:id`,
            element: <CreateOrganizationSetting />,
          },
        ],
      },
      {
        path: AppRoutes.CONTAINER,
        element: <AuthGuard><Container /></AuthGuard>,
        errorElement: <Error />,
        children: [
          {
            path: AppRoutes.REGISTRY,
            element: <Registry />,
          },
          {
            path: AppRoutes.BUILDIMG,
            element: <BuildImg />,
          },
        ],
      },
      {
        path: AppRoutes.COMPUTE,
        element: <AuthGuard><Compute /></AuthGuard>,
        errorElement: <Error />,
        children: [
          {
            path: AppRoutes.TEMPLATE,
            element: <Template />,
          },
          {
            path: AppRoutes.ADD_NEW_TEMPLATE,
            element: <AddNewTemplate />,
          },
          {
            path: AppRoutes.RESOURCE,
            element: <Resource />,
          },
          {
            path: AppRoutes.STORAGE,
            element: <Storage />,
          },
        ],
      },
      {
        path: AppRoutes.TEAM,
        element: <AuthGuard><Team /></AuthGuard>,
        errorElement: <Error />,
        children: [
          {
            path: AppRoutes.ALL_TEAMS,
            element: <AllTeams />
          }
        ]
      }
    ],
  },
  {
    path: AppRoutes.LOGIN,
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: AppRoutes.FORGOTPASSWORD,
    element: <ForgotPassword />,
    errorElement: <Error />
  },
]);

export default appRouter;
