import { useParams, useNavigate } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import { searchByCountry } from "../config";
import { IoArrowBack } from "react-icons/io5";
import { Button } from "../components/Button/Button";
import { Info } from "../components/Info/Info";
import { ICountryDitails } from "../types/CountryType";

export const Ditails = () => {
    const {name} = useParams()
    const navigate = useNavigate()    

    const [country, setCountry] = useState<ICountryDitails | null>(null)

    useEffect(() => {
        axios.get(searchByCountry(name)).then(({data}) => setCountry(data[0]))
    }, [name])
    
    return (
        <div>
           <Button goToBack={navigate}><IoArrowBack />Back</Button>
           <Info navigate={navigate} {...country}/>
        </div>
    )
}