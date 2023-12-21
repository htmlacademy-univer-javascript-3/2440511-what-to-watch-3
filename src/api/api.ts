import axios, {AxiosInstance} from 'axios';

const baseUrl = 'https://13.design.pages.academy/wtw';
const defaultTimeout = 5000;


export const createApi = (): AxiosInstance =>
  axios.create({
    baseURL: baseUrl,
    timeout: defaultTimeout
  });
