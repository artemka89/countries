import Select, { OnChangeValue, SingleValue } from "react-select";
import styles from "./CustomSelect.module.scss";
import { useState } from "react";

interface IOption {
    value: string;
    label: string;
}

const options: IOption[] = [{ value: "russia", label: "Russia" },
{ value: "moldova", label: "Moldova" }];

export const CustomSelect = () => {

    const [currentCountry, setCurrentCountry] = useState('')

    const getValue = () => currentCountry ? options.find(country => country.value === currentCountry) : ''

    const onChange = (newValue: SingleValue<string | IOption>) =>  setCurrentCountry((newValue as IOption).value)

    return (
        <Select
        className={styles.customSelect}
            classNamePrefix='customSelect'
            value={getValue()}
            onChange={onChange}
            options={options}
            isSearchable={false}
            placeholder='Chose Country'
            // menuIsOpen={true}
        />
    );
};
