import styles from "./ListItem.module.scss";

type ListItemPropsType = {
    title: string;
    infoName: any;
};

export const ListItem = ({ title, infoName }: ListItemPropsType) => {
    return (
        <li className={styles.listItem}>
            <b>{title}: </b> {infoName}
        </li>
    );
};
