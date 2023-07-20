import { ICountryDitails } from "../../types/CountryType";
import { List } from "../List/List";
import { ListItem } from "../ListItem/ListItem";
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
    neigbors,
    navigate,
}: ICountryDitails & InfoPropstype) => {
    const language = languages.map((lang, index) => {
        const comma = index < languages.length - 1 && ", ";
        return lang.name + comma;
    });

    const borders = neigbors.map((neigbor) => (
        <span
            onClick={() => {
                navigate(`/country/${neigbor}`);
            }}
            className={styles.tag}
            key={neigbor}
        >
            {neigbor}
        </span>
    ));

    return (
        <div className={styles.wrapper}>
            <img src={flags.png} alt="Flag" className={styles.image} />
            <div className={styles.infoBlock}>
                <h1 className={styles.infoTitle}>
                    <b>{name}</b>
                </h1>
                <div className={styles.listGroup}>
                    <ul className={styles.list}>
                        <ListItem title="Native Name" infoName={nativeName} />
                        <ListItem title="Population" infoName={population} />
                        <ListItem title="Capital" infoName={capital} />
                        <ListItem title="Region" infoName={region} />
                        <ListItem title="Sub Region" infoName={subregion} />
                        <ListItem title="Languages" infoName={language} />

                        {neigbors.length > 1 && (
                            <ListItem title="Borders" infoName={borders} />
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};
