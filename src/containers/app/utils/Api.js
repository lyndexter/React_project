import axios from "axios";
import { setImages } from "../utils/ProcessData";

const resurce = axios.create({
  baseURL: "http://localhost:8080/toyCars",
  responseType: "json",
});

export const fetchData = async () => {
  let responseData = await resurce.get("/");
  console.log(responseData.data);
  return setImages(responseData.data);
};

export const fetchDataById = async (id) => {
  let responseElement = await resurce.get("/" + id);
  console.log(responseElement.data);
  return setImages([responseElement.data]);
};
