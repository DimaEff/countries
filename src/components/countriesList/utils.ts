import { Capital, Country } from "@components/countriesList/types";

export const reformatToCountry = (originalCountry: any): Country => {
    const capital: Capital = {
        name: originalCountry.capital[0],
        lat: originalCountry.capitalInfo.latlng[0],
        lng: originalCountry.capitalInfo.latlng[1],
    };

    return {
        code: originalCountry.cca2,
        name: originalCountry.name.common,
        fullName: originalCountry.name.official,
        region: originalCountry.region,
        subregion: originalCountry.subregion,
        area: originalCountry.area,
        flagImageSrc: originalCountry.flags.svg,
        population: originalCountry.population,
        languages: Object.values(originalCountry.languages),
        capital,
    };
};
