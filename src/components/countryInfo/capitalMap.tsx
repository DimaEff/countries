import React, { useRef } from "react";

import { Capital } from "@components/countriesList/types";
import { useCreateMap } from "@shared/hooks/useCreateMap";

interface CapitalMapProps {
    capital: Capital;
}

const CapitalMap: React.FC<CapitalMapProps> = ({ capital }) => {
    const mapDiv = useRef<HTMLDivElement>(null);
    useCreateMap(mapDiv, [capital.lng, capital.lat]);

    return <div style={{ width: "100%", height: "400px" }} ref={mapDiv}></div>;
};

export default CapitalMap;
