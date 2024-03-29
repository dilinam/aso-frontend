import axios from "axios";
import { BASE_URL } from "../utils/constants";

const AXIOS_INSTANCE = axios.create({
  baseURL: BASE_URL,
});

const requestHandler = (request) => {
  const TOKEN = localStorage.getItem("JWT");
  if (TOKEN && !request.headers.Authorization) {
    request.headers.Authorization = TOKEN ? "Bearer " + TOKEN : null;
  }

  return request;
};

const responseHandler = (response) => {
  return response;
};

const errorHandler = async (error) => {
  if (error?.response?.status == 403) {
    localStorage.removeItem("JWT");
    window.location.href = "/login";
  }
  return Promise.reject(error);
};

AXIOS_INSTANCE.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => {
    return Promise.reject(error);
  }
);

AXIOS_INSTANCE.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default AXIOS_INSTANCE;
