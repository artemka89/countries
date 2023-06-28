import { useEffect, useState } from "react";
import { Search } from "../Search/Search";
import styles from "./Controls.module.scss";
import Select, { SingleValue } from "react-select";
interface IOption {
    value: string;
    label: string;
}

const options: IOption[] = [
    { value: "Africa", label: "Africa" },
    { value: "America", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" }

];

type Controls ={
    onSearch: (search: string, region: string) => void
}


export const Controls = ({onSearch}: Controls) => {

const [search, setSearch] = useState('')
const [region, setRegion] = useState<SingleValue<string | IOption>>('')

useEffect(() => {
    // @ts-ignore
    const regionValue = region?.value || ''
    onSearch(search, regionValue)
}, [search, region])

    return (
        <div className={styles.container}>
            <Search search={search} setSearch={setSearch}/>
            <Select
            className={styles.customSelect}
            classNamePrefix="customSelect"
            value={region}
            onChange={setRegion}
            options={options}
            isSearchable={false}
            placeholder="Chose Country"
            isClearable={true}           
            // menuIsOpen={true}
        />           
        </div>
    );
};
