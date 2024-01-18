import axios, {AxiosInstance} from 'axios';

const baseUrl = 'https://13.design.pages.academy/wtw';
const defaultTimeout = 5000;


export const createApi = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: defaultTimeout
  });

  instance.interceptors.response.use(
    response => response,
    // eslint-disable-next-line no-alert
    () => alert('Network error')
  );

  return instance;
};
