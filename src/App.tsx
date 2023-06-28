import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { HomePage } from "./pages/HomePage";
import { Ditails } from "./pages/Ditails";
import { NotFound } from "./pages/NotFound";
import { useState } from "react";
import { ICountry } from "./types/CountryType";

function App() {    
    const [countries, setCountries] = useState<ICountry[]>([]);
    return (
        <div className="App">
            <Header />
            <Main>
                <Routes>
                    <Route path="/" element={<HomePage countries={countries} setCountries={setCountries}/>}/>
                    <Route path="/country/:name" element={<Ditails/>}/>
                    <Route path="*"element={<NotFound/>}/>
                </Routes>
            </Main>
        </div>
    );
}

export default App;
