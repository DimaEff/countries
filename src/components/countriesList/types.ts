export interface Capital {
    name: string;
    lat: number;
    lng: number;
}

export interface Country {
    code: string;
    name: string;
    fullName: string;
    region: string;
    subregion: string;
    area: number;
    flagImageSrc: string;
    population: number;
    languages: string[];
    capital: Capital;
}
