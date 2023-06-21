import { ICountry } from '../../types/CountryType'
import styles from './Card.module.scss'

export const Card = ({name, capital, flags, population, region}: ICountry) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.cardImage} src={flags.png} alt="Country" />
            <div className={styles.cardBody}>
                <div className={styles.title}>{name.official}</div>
                <ul className={styles.cardList}>
                    <li className={styles.cardListItem}></li>
                </ul>
            </div>
        </div>
    )
}