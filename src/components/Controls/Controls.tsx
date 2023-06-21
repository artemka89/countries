import { useState } from "react";
import { Search } from "../Search/Search";
import styles from "./Controls.module.scss";
import { CustomSelect } from "../CustomSelect/CustomSelect";

export const Controls = () => {

const [search, setSearch] = useState('')

    return (
        <div className={styles.container}>
            <Search search={search} setSearch={setSearch}/>
            <CustomSelect />
        </div>
    );
};
