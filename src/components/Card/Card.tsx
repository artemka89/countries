import { ICountry } from '../../types/CountryType'
import { useNavigate } from "react-router-dom";
import styles from './Card.module.scss'

type CardPropstype = {
    navigate: (nav: string) => void;    
}

export const Card = ({name, capital, flags, population, region, navigate}: ICountry & CardPropstype) => {
    
    return (
        <div onClick={() => navigate(`/country/${name.common}`)} className={styles.wrapper}>
            <img className={styles.cardImage} src={flags.png} alt="Country" />
            <div className={styles.cardBody}>
                <div className={styles.title}>{name.common}</div>
                <ul className={styles.cardList}>
                    <li className={styles.cardListItem}><b>Population:</b> {population}</li>
                    <li className={styles.cardListItem}><b>Region:</b> {region}</li>
                    <li className={styles.cardListItem}><b>Capital:</b> {capital}</li>
                </ul>
            </div>
        </div>
    )
}