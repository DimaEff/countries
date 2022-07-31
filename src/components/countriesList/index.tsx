import React from "react";

import { useQuery } from "@tanstack/react-query";

import { fetchAllCountries } from "@components/countriesList/api";
import { FETCH_ALL_COUNTRIES } from "@components/countriesList/consts";
import { Country } from "@components/countriesList/types";
import { reformatToCountry } from "@components/countriesList/utils";
import usePaginationData from "@shared/hooks/usePaginationData";

const CountriesList = () => {
    const { isLoading, data } = useQuery([FETCH_ALL_COUNTRIES], fetchAllCountries);

    const { paginationData, page } = usePaginationData<Country>(data, { reformatDataFn: reformatToCountry });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {page}
            <ul>
                {paginationData?.map(c => (
                    <li key={c.code}>{c.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CountriesList;
