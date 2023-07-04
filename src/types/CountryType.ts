export interface ICountry {
    name: string;
    nativeName?: string;
    capital: string;
    region: string;
    subregion?: string;
    population: number;
    flags: { png: string; svg: string };
    languages?: { name: string }[];
    borders?: string[];
}
export interface ICountryDitails {
    name: string;
    nativeName: string;
    capital: string;
    region: string;
    subregion: string;
    population: number;
    flags: { png: string; svg: string };
    languages: { name: string }[];
    borders: string[];
    topLevelDomain: string[];
}
