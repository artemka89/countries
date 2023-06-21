import { IoSearch } from "react-icons/io5";

import styles from './Search.module.scss'


type SearchPropsType = {
    search: string;
    setSearch: (value: string) => void
}

export const Search = ({search, setSearch}:SearchPropsType) => {
    return (
        <div className={styles.inputContainer}>
            <IoSearch className={styles.icon}/>
            <input value={search} onChange={(event) => setSearch(event.target.value)} className={styles.input} type="search" placeholder="Search..." />
        </div>
    )
}
