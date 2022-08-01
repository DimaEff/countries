import axios from "axios";

const COUNTRIES_API_URL = "https://restcountries.com/v3.1/";

/**
    The "https://restcountries.com/v3.1/all" endpoint returned about 250 countries, too much for reformatToCountry transformation.
 */
export const fetchAllCountries = async (): Promise<any[]> => {
    const res = await axios.get<any[]>(COUNTRIES_API_URL + "all");
    return res.data;
};
