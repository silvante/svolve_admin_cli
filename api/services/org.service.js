import api_endpoints from "../api.endpoints.js";
import api from "../axios.config.js";

const authService = {
  get: async (unique_name) => {
    try {
      return await api.get(api_endpoints.get_org(unique_name));
    } catch (error) {
      return error;
    }
  },

  mkvip: async (unique_name) => {
    try {
      return await api.put(api_endpoints.make_org_vip(unique_name))
    } catch (error) {
      return error
    }
  }
};

export default authService;
