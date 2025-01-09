import axios from "axios";
import axiosInstance from "./AxiosInstance";

const URL = "http://localhost:8000/api";

export const FetchFoods = async () => {
  try {
    const response = await axios.get(`${URL}/Foods/fetch-items`);
    return response.data; // Use `.data` to get the actual data from the API
  } catch (error) {
    console.error("Error fetching foods:", error);
    return null; // Explicitly return null in case of an error
  }
};

export const addToCart = async (payload) => {
  try {
    const response = await axiosInstance.post(`/cart/add-to-cart`, payload);
    return response.data; // Use `.data` to get the actual data from the API
  } catch (error) {
    console.error("Error fetching foods:", error);
    return null; // Explicitly return null in case of an error
  }
};

export const removeFomeCart = async (payload) => {
  try {
    const response = await axiosInstance.post(`/cart/delete-from-cart`, payload);
    return response.data; // Use `.data` to get the actual data from the API
  } catch (error) {
    console.error("Error fetching foods:", error);
    return null; // Explicitly return null in case of an error
  }
};

export const fetchCartList = async () => {
  try {
    const response = await axiosInstance.get(`/cart/get-cart-data`);
    return response.data; // Use `.data` to get the actual data from the API
  } catch (error) {
    console.error("Error fetching foods:", error);
    return null; // Explicitly return null in case of an error
  }
};
