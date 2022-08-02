import React from "react";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { fetchCountryByCode } from "@components/countryInfo/api";
import CapitalMap from "@components/countryInfo/capitalMap";
import {
    CAPITAL_NOT_EXISTS_MESSAGE,
    COUNTRY_NOT_FOUND_MESSAGE,
    FETCH_COUNTRY_BY_CODE,
} from "@components/countryInfo/consts";
import MainInfo from "@components/countryInfo/mainInfo";
import FullscreenLoader from "@shared/components/fullscreenLoader";
import InfoMessage from "@shared/components/infoMessage";

const CountryInfo = () => {
    const { code } = useParams();
    const { isLoading, data } = useQuery([FETCH_COUNTRY_BY_CODE], () => fetchCountryByCode(code!));

    if (isLoading) {
        return <FullscreenLoader />;
    }

    return (
        <div>
            {data ? (
                <>
                    <MainInfo country={data} />
                    {data.capital ? (
                        <CapitalMap capital={data.capital} />
                    ) : (
                        <InfoMessage>{CAPITAL_NOT_EXISTS_MESSAGE}</InfoMessage>
                    )}
                </>
            ) : (
                <InfoMessage>{COUNTRY_NOT_FOUND_MESSAGE}</InfoMessage>
            )}
        </div>
    );
};

export default CountryInfo;
