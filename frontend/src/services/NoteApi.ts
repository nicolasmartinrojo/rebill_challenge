import anonymousAxios, { instance } from "./requestTypes/anonymous.axios";

const serviceModel = "api/note";
const noteApi = anonymousAxios(serviceModel);
export default noteApi;
