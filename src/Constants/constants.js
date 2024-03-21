export const AppRoutes = {
  HOME: "/",
  PROJECT: "/project",
  DATASET: "/data-set",
  ORGANIZATION: "/organization",
  CONTAINER: "/container",
  COMPUTE: "/compute",
  TEAM: "/team",
  LOGIN: "/login",
  FORGOTPASSWORD: "/forgot-password",
  STARTPROJECT: "start-project",
  PROJECT_PAGE: ":name",
  ADDFILETOPROJECT: "addFileToProject",
  VIEWANDADDNEWFILETOPROJECT: "viewAndAddFileToProject",
  WORKSPACE: "workspace",
  PROGRESS: "workspace/progress",
  EXPERIMENT: "experiment",
  SETTING: "setting",
  SERVING: "serving",
  GENERAL: "general",
  INFO: "info",
  COMMIT: "commit",
  REGISTRY: "registry",
  BUILDIMG: "build-img",
  TEMPLATE: "template",
  RESOURCE: "resource",
  STORAGE: "storage",
  ADD_NEW_TEMPLATE: "add-new-template",
  ALL_TEAMS: "all-teams",
  GET_ALL_ORGANIZATIONS: "get-all-organizations",
  CREATE_ORGANIZATION: "create-organization",
  EDIT_ORGANIZATION: "edit-organization"

};

export const SERVER_URL = 'http://127.0.0.1:8000/';

export const API_METHODS = {
  'POST': 'POST',
  'PUT': 'PUT',
  'PATCH': 'PATCH',
  'GET': 'GET',
  'DELETE': 'DELETE',
};
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  COADMIN: 'co-admin',
};
export const API_ROUTES = {
  ORGANIZATION: 'organization',
  CREATE_ORGANIZATION: 'organization/create',
  GET_ORGANIZATIONS_LIST: 'organization/organization-list',
};