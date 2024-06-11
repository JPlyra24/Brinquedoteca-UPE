import axios, { AxiosResponse, Method } from "axios";

export const api = axios.create({ baseURL: "http://localhost:8080/api/v1" });

export async function request<R>(
  method: Method,
  url: string,
  body?: unknown,
  token?: string
) {
  let status: number | undefined;
  let result: R | undefined;
  let errors: string | undefined;
  await api
    .request<R>({
      method: method,
      headers: { Authorization: token && "Bearer " + token },
      data: body,
      url,
    })
    .then((response: AxiosResponse<R, unknown>) => {
      status = response.status;
      result = response.data;
    })
    .catch((error) => {
      console.error(error);
      status = error.response.status;
      errors = error.response.data.message;
    });

  return { status, result, errors };
}