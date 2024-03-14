import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";

// Fetches a list of all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw error; // Rethrow to allow caller to handle
  }
};

// Fetches details for a single product by its ID
export const getProductDetails = async (id) => {
  try{
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error){
    throw error;
  }
};

// Deletes a product by its ID
export const removeProduct = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error; // Rethrow to allow caller to handle
  }
};

// Adds a new product to the database
export const addProduct = (product) => {
  console.log('hello')
  return axios.post(`${BASE_URL}/add`, JSON.stringify(product));
};

// Edits an existing product by ID
export const editProduct = (id, product) => {
  try{
    const response =  axios.put(`${BASE_URL}/edit/${id}`, JSON.stringify(product));
    return response.data;
  }catch(error){
    throw error;
  }

};
