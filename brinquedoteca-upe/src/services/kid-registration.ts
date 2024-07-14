import { AxiosError } from "axios";
import { api } from "./api";
import Cookies from "js-cookie"; // Assuming you are using js-cookie for managing cookies

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
  address: Address;
  observations: string;
  description: string;
  birthday: string;
}

export const addChild = async (data: UserRequest) => {
  try {
    const token = Cookies.get("token");

    if (!token) {
      throw new Error("Authentication token not found");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log(data);
    console.log(token);
    const response = await api.post("/child", data, { headers });
    console.log(response);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      console.error("Error creating child:", error);
      throw new Error("Error creating child");
    }
  }
};
