import axios from "axios";

import { Country } from "@components/countriesList/types";
import { reformatToCountry } from "@components/countriesList/utils";

const COUNTRIES_API_URL = "https://restcountries.com/v3.1/";

export const fetchCountryByCode = async (code: string): Promise<Country> => {
    const res = await axios.get<any[]>(COUNTRIES_API_URL + `alpha/${code}`);
    return reformatToCountry(res.data[0]);
};
