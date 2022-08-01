import { RouteObject } from "react-router-dom";

import CountriesList from "@components/countriesList";
import CountryInfo from "@components/countryInfo";
import { HOME } from "@shared/router/paths";

export const routes: RouteObject[] = [
    {
        path: HOME,
        children: [
            {
                index: true,
                element: <CountriesList />,
            },
            {
                path: ":code",
                element: <CountryInfo />,
            },
        ],
    },
];
