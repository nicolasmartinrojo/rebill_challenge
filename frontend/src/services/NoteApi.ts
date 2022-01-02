import anonymousAxios, { instance } from "./requestTypes/anonymous.axios";

const serviceModel = "api/note";
const noteApi = {
  ...anonymousAxios(serviceModel),
  message: (id: string) => instance.get(`${serviceModel}/${id}/message`),
};
export default noteApi;
