const api_endpoints = {
  auth: "/admin/auth",

  get_org: (unique_name) => `/admin/org/${unique_name}`,
  make_org_vip: (unique_name) => `/admin/org/mkvip/${unique_name}`
};

export default api_endpoints;
