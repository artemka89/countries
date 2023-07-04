import axios from "axios";
import { ICountry, ICountryDitails } from "../types/CountryType";

const BASE_URL = "https://restcountries.com/v2/";
const ALL_COUNTRIES = "all?fields=name,capital,flags,population,region";
const searchByCountry = (name: string | undefined) => "name/" + name;
const filterByCode = (codes: string[]) => "alpha?codes=" + codes.join(",");

export const getCountries = () => {
    return axios.get<ICountry[]>(BASE_URL + ALL_COUNTRIES);
};

export const getCountry = (name: string | undefined) => {
    return axios.get<ICountryDitails[]>(BASE_URL + searchByCountry(name));
};

export const getCountryByCode = (codes: string[]) => {
    return axios.get<ICountry[]>(BASE_URL + filterByCode(codes));
};
