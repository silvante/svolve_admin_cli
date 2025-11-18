import api_endpoints from "../api.endpoints.js";
import api from "../axios.config.js";

const authService = {
  register: async (password) => {
    try {
      return await api.post(api_endpoints.auth, { password });
    } catch (error) {
      return error;
    }
  },
};

export default authService;
