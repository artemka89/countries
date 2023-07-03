import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1/";
const ALL_COUNTRIES = "all?fields=name,capital,flags,population,region";
const searchByCountry = (name: string | undefined) => "name/" + name;
const filterByCode = (codes: string[]) => "alpha?codes=" + codes.join(",");

export const getCountries = () => {
    return axios.get(BASE_URL + ALL_COUNTRIES);
};

export const getCountry = (name: string | undefined) => {
    return axios.get(BASE_URL + searchByCountry(name));
};

export const getCountryByCode = (codes: string[]) => {
    return axios.get(BASE_URL + filterByCode(codes));
};
