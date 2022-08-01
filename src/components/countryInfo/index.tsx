import React from "react";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { fetchCountryByCode } from "@components/countryInfo/api";
import { FETCH_COUNTRY_BY_CODE } from "@components/countryInfo/consts";
import MainInfo from "@components/countryInfo/mainInfo";

const CountryInfo = () => {
    const { code } = useParams();
    const { isLoading, data } = useQuery([FETCH_COUNTRY_BY_CODE], () => fetchCountryByCode(code!));

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <div>{data && <MainInfo country={data} />}</div>;
};

export default CountryInfo;
