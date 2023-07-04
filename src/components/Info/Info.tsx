import { ICountryDitails } from "../../types/CountryType";
import styles from "./Info.module.scss";

type InfoPropstype = {
    navigate: (nav: string) => void;
    neigbors: string[];
};

export const Info = ({
    name,
    nativeName,
    flags,
    population,
    capital,
    languages,
    region,
    subregion,
    topLevelDomain,
    neigbors,
    navigate,
}: ICountryDitails & InfoPropstype) => {
    const infoArray = [
        { info: nativeName, title: "Native Name:" },
        { info: population, title: "Population:" },
        { info: capital, title: "Capital:" },
        { info: region, title: "Region:" },
        { info: subregion, title: "Sub Region:" },
    ];

    return (
        <div className={styles.wrapper}>
            <img src={flags.png} alt="Flag" className={styles.image} />
            <div className={styles.infoBlock}>
                <h1 className={styles.infoTitle}>
                    <b>{name}</b>
                </h1>
                <div className={styles.listGroup}>
                    <ul className={styles.list}>
                        {infoArray.map((info) => (
                            <li className={styles.listItem}>
                                <b>{info.title} </b> {info.info}
                            </li>
                        ))}
                        <li className={styles.listItem}>
                            <b>Languages:</b>{" "}
                            {languages.map((lang, index) => (
                                <span key={lang.name}>
                                    {lang.name}
                                    {index < languages.length - 1 && ","}
                                </span>
                            ))}
                        </li>
                        <li className={styles.listItem}>
                            <b>Top Level Domain: </b>
                            {topLevelDomain?.map((domain) => (
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
