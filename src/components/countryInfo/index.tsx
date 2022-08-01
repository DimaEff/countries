import React from "react";

import { useParams } from "react-router-dom";

const CountryInfo = () => {
    const { code } = useParams();

    return <div>Country info {code}</div>;
};

export default CountryInfo;
