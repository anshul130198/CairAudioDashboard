import { apiCall } from "./apiCall";
import { API_METHODS, API_ROUTES } from "../Constants/constants";



export const API = {

  createOrganization: async (body) => {
    const data = await apiCall({
      method: API_METHODS.POST,
      endpoint: API_ROUTES.CREATE_ORGANIZATION,
      data: body,
    });

    return data;
  },

//   getUsers: async (queryParams) => {
//     const data = await apiCall({
//       method: API_METHODS.GET,
//       route: `${API_ROUTES.GET_USERS}?${queryParams}`,
//     });

//     return {
//       listData: data.success.data.records,
//       total_records: data.success.data.total_records,
//       total_pages: data.success.data.total_pages,
//     }
//   },

//   deleteUser: async (id) => {
//     const data = await apiCall({
//       method: API_METHODS.DELETE,
//       route: `${API_ROUTES.DELETE_USER}${id}`,
//     });
//     return data;
//   },
}