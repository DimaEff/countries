import { Capital, Country } from "@components/countriesList/types";

export const reformatToCountry = (originalCountry: any): Country => {
    const capital: Capital | null = originalCountry?.capital?.[0]
        ? {
              name: originalCountry.capital[0],
              lat: originalCountry.capitalInfo.latlng?.[0],
              lng: originalCountry.capitalInfo.latlng?.[1],
          }
        : null;

    return {
        code: originalCountry.cca2,
        name: originalCountry.name.common,
        fullName: originalCountry.name.official,
        region: originalCountry.region,
        subregion: originalCountry.subregion,
        area: originalCountry.area,
        flagIcon: originalCountry.flag,
        flagImageSrc: originalCountry.flags?.svg || null,
        population: originalCountry.population,
        languages: originalCountry.languages ? Object.values(originalCountry.languages) : null,
        capital,
    };
};
