import { ICountryDitails } from "../../types/CountryType";
import styles from "./Info.module.scss";

type InfoPropstype = {
    navigate: (nav: string) => void;
    neigbors: string[]    
};

export const Info = ({
    name,
    flags,
    population,
    capital,
    region,
    subregion,
    tld = [],    
    neigbors,
    navigate,
}: ICountryDitails & InfoPropstype) => {
    
    return (
        <div className={styles.wrapper}>
            <img src={flags?.png} alt="Flag" className={styles.image} />
            <div className={styles.infoBlock}>
                <h1 className={styles.infoTitle}>
                    <b>{name?.official}</b>
                </h1>
                <div className={styles.listGroup}>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <b>Native Name:</b> {name?.official}
                        </li>
                        <li className={styles.listItem}>
                            <b>Population:</b> {population}
                        </li>
                        <li className={styles.listItem}>
                            <b>Region:</b> {region}
                        </li>
                        <li className={styles.listItem}>
                            <b>Sub Region:</b> {subregion}
                        </li>
                        <li className={styles.listItem}>
                            <b>Capital:</b> {capital}
                        </li>
                    </ul>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <b>Top Level Domain: </b>
                            {tld?.map((domain) => (
                                <span key={domain}>{domain}</span>
                            ))}
                        </li>
                        {neigbors && (
                            <li className={styles.listItem}>
                                <b>Borders: </b>
                                {neigbors.map((neigbor) => (
                                    <span
                                        onClick={() => {
                                            navigate(`/country/${neigbor}`);
                                        }}
                                        className={styles.tag}
                                        key={neigbor}
                                    >
                                        {neigbor}
                                    </span>
                                ))}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};
