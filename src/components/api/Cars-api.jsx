import axios from "axios";

const CARS_API_URL = "https://myfakeapi.com/api/cars"

export const getAllCars = async () => {
    const { data } = await axios.get(CARS_API_URL);
    return data.cars;
}