export interface ICountry {
    name: CountryName;
    capital: string;
    flags: CountryFlags;
    population: number;
    region: string;
}

type CountryFlags = {
    alt: string;
    png: string;
    svg: string;
};

type CountryName = {
    common: string;
    official: string;
};

export interface ICountryDitails {
    name?: CountryName;
    capital?: string;
    flags?: CountryFlags;
    population?: number;
    region?: string;
    subregion?: string;
    tld?: string[];
    borders?: string[];
}

