import Cookies from "js-cookie";
import { api } from "./api";
import { AxiosError } from "axios";

export interface AuthInterface {
  email: string;
  password: string;
}

interface Address {
  cep: string;
  street: string;
  district: string;
  city: string;
  state: string;
  number: number;
  supplement: string;
}

interface UserRequest {
  cpf: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  address: Address;
  birthday: string;
  role: "BRINQUEDISTA";
  linkToInstitucion: "EXTERNAL";
}

export interface Token {
  token: string;
}

export const LoginUser = async (data: AuthInterface) => {
  try {
    const response = await api.post("/parent/login", data);
    Cookies.set("token", response.data.token);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.status;
    }
  }
};

export const CreateUserParent = async (data: UserRequest) => {
  try {
    const response = await api.post("/parent/register", data);
    Cookies.set("token", response.data.token);
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};
