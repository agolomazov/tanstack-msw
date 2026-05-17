import type { AxiosError, AxiosRequestConfig } from 'axios';
import axios from 'axios';

// import { IS_LOGGED_KEY } from '../../context/auth';

const API_TIMEOUT = 10_000;

const logoutChannel = new BroadcastChannel('auth-logout');

if (logoutChannel) {
  logoutChannel.addEventListener('message', () => {
    globalThis.location.reload();
  });
}

const client = axios.create({
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Accept: 'application/json',
    'Trace-Id': crypto.randomUUID(),
  },
  withCredentials: true,
  baseURL: 'http://backend-app.com'
});

// client.interceptors.response.use(
//   (response) => response,
//   (error: AxiosError) => {
//     if (error.response?.status === 401) {
//       localStorage.removeItem(IS_LOGGED_KEY);

//       if (logoutChannel) {
//         logoutChannel.postMessage('');
//       }

//       if (globalThis.location.pathname !== '/lk/login') {
//         globalThis.location.reload();
//       }
//     }

//     return Promise.reject(error);
//   },
// );

type RequestConfig<TData = unknown> = {
  baseURL?: string;
  url?: string;
  method?: 'GET' | 'PUT' | 'PATCH' | 'POST' | 'DELETE' | 'OPTIONS';
  params?: unknown;
  data?: TData | FormData;
  responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
  signal?: AbortSignal;
  headers?: AxiosRequestConfig['headers'];
  timeout?: AxiosRequestConfig['timeout'];
};

type ResponseErrorConfig<TError = unknown> = AxiosError<TError>;

export default client;

export { client, type RequestConfig, type ResponseErrorConfig };
