import { useEffect, useState } from "react";
import { Controls } from "../components/Controls/Controls";
import { List } from "../components/List/List";
import { Card } from "../components/Card/Card";
import { ICountry } from "../types/CountryType";
import { useNavigate } from "react-router-dom";
import { getCountries } from "../api/api_countries";

type HomePage = {
    countries: ICountry[];
    setCountries: (data: ICountry[]) => void;
};

export const HomePage = ({ countries, setCountries }: HomePage) => {

    const [filteredCountries, setFilteredCountries] =
        useState<ICountry[]>(countries);

    const navigate = useNavigate();

    const handleSearch = (search: string, region: string) => {
        let data: ICountry[] = [...countries];
        if (search) {
            data = data.filter((country) =>
                country.name
                    .toLowerCase()
                    .includes(search.toLocaleLowerCase())
            );
        }
        if (region) {
            data = data.filter((country) =>
                country.region
                    .toLowerCase()
                    .includes(region.toLocaleLowerCase())
            );
        }

        setFilteredCountries(data);
    };

    useEffect(() => {
        if (!countries.length) {
            getCountries()
                .then(({ data }) => setCountries(data))
                .catch(function (error) {
                    console.error(error);
                });
        }
    }, []);

    useEffect(() => {
        handleSearch("", "");
        // eslint-disable-next-line
    }, [countries]);

    return (
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {filteredCountries.map((country) => (
                    <Card
                        key={country.name}
                        name={country.name}
                        capital={country.capital}
                        flags={country.flags}
                        population={country.population}
                        region={country.region}
                        navigate={navigate}
                    />
                ))}
            </List>
        </>
    );
};
