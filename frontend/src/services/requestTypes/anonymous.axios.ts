import axios from "axios";
import IContent from "../../models/IContent";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
});

const anonymousAxios = (serviceModel: string) => ({
  list: () => instance.get(`${serviceModel}`),
  single: (id: string) => instance.get(`${serviceModel}/${id}`),
  update: (id: string, data: IContent) =>
    instance.put(`${serviceModel}/${id}`, data),
  create: (data: IContent) => instance.post(`${serviceModel}/`, data),
  delete: (id: string) => instance.delete(`${serviceModel}/${id}`),
});
export default anonymousAxios;
export { instance };
