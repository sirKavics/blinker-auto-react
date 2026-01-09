import axios from "axios";

// const CARS_API_URL = "/cars.json"
const CARS_API_URL = "/api/cars/route.js";

const generateRandomPrice = (min = 1000, max = 10000) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // Create random number for price
};
const generateRandomMiles = (min = 20000, max = 250000) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // Create random number for miles
}

export const getAllCars = async () => {
    try {
        const cached = sessionStorage.getItem("cars");
        if (cached) {
            return JSON.parse(cached);
        }
        
        const { data } = await axios.get(CARS_API_URL);
        
        //Add price to each car
        const cars = data.trims.map((car) => ({
            ...car,
            model_price: generateRandomPrice(),
            model_mileage: generateRandomMiles(),
        }));
        
        sessionStorage.setItem("cars", JSON.stringify(cars));
        
        return cars;
    } catch (error) {
      console.error("getAllCars failed:", error);
      return [];
    }
};