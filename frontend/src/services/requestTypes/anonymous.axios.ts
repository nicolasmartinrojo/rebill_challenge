import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
});

const anonymousAxios = (serviceModel: string) => ({
  list: () => instance.get(`${serviceModel}`),
  single: (id: string) => instance.get(`${serviceModel}/${id}`),
  update: (id: string) => instance.put(`${serviceModel}/${id}`),
  create: (id: string) => instance.post(`${serviceModel}/${id}`),
  delete: (id: string) => instance.delete(`${serviceModel}/${id}`),
});
export default anonymousAxios;
