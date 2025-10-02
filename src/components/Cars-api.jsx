import axios from "axios";

const API_URL = "https://myfakeapi.com/api/cars"

export async function getAllCars() {
    const { data } = await axios.get(API_URL);
    return data;
}