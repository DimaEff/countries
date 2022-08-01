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
    flagImageSrc: string | null;
    population: number;
    languages: string[] | null;
    capital: Capital | null;
}
