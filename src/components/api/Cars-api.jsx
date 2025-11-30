import axios from "axios";

const CARS_API_URL = "/cars.json"

export const getAllCars = async () => {
    const { data } = await axios.get(CARS_API_URL);
    return data.cars;
}