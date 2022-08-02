import React from "react";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { fetchCountryByCode } from "@components/countryInfo/api";
import CapitalMap from "@components/countryInfo/capitalMap";
import { FETCH_COUNTRY_BY_CODE } from "@components/countryInfo/consts";
import MainInfo from "@components/countryInfo/mainInfo";
import FullscreenLoader from "@shared/components/fullscreenLoader";

const CountryInfo = () => {
    const { code } = useParams();
    const { isLoading, data } = useQuery([FETCH_COUNTRY_BY_CODE], () => fetchCountryByCode(code!));

    if (isLoading) {
        return <FullscreenLoader />;
    }

    return (
        <div>
            {data && <MainInfo country={data} />}
            {data?.capital && <CapitalMap capital={data.capital} />}
        </div>
    );
};

export default CountryInfo;
