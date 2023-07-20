import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Button } from "../components/Button/Button";
import { Info } from "../components/Info/Info";
import { ICountryDitails } from "../types/CountryType";
import { getCountry, getCountryByCode } from "../api/api_countries";

export const Ditails = () => {
    const { name } = useParams();
    const navigate = useNavigate();

    const [country, setCountry] = useState<ICountryDitails | null>(null);
    const [neigbors, setNaigbors] = useState<string[]>([]);

    useEffect(() => {
        getCountry(name)
            .then(({ data }) => setCountry(data[0]))
            .catch(function (error) {
                console.error(error);
            });
    }, [name]);

    useEffect(() => {
        if (country?.borders) {
            getCountryByCode(country.borders)
                .then(({ data }) => setNaigbors(data.map((c) => c.name)))
                .catch(function (error) {
                    console.error(error);
                });
        }
    }, [country?.borders]);

    if (!country) {
        return <>Loading...</>;
    }
    return (
        <div>
            <Button onClickBtn={() => navigate(-1)}>
                <IoArrowBack />
                Back
            </Button>
            <Info navigate={navigate} neigbors={neigbors} {...country} />
        </div>
    );
};
