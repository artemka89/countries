import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Controls } from "./components/Controls/Controls";
import axios from "axios";
import { useEffect, useState } from "react";
import { ALL_COUNTRIES } from "./config";
import { List } from "./components/List/List";
import { Card } from "./components/Card/Card";
import { ICountry } from "./types/CountryType";

function App() {
    const [countries, setCountries] = useState<ICountry[]>([]);

    useEffect(() => {
        axios
            .get<ICountry[]>(ALL_COUNTRIES)
            .then(({ data }) => setCountries(data));
    }, []);

    console.log(countries[0]);

    return (
        <div className="App">
            <Header />
            <Main>
                <Controls />
                <List>
                    {countries.map((country) => (
                        <Card
                            key={country.name.common}
                            name={country.name}
                            capital={country.capital}
                            flags={country.flags}
                            population={country.population}
                            region={country.region}
                        />
                    ))}
                </List>
            </Main>
        </div>
    );
}

export default App;
