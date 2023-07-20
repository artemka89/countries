import styles from "./Button.module.scss";

type ButtonPropsType = {
    children: React.ReactNode;
    onClickBtn: () => void;
};

export const Button = ({ children, onClickBtn}: ButtonPropsType) => {
   
    return (
        <button onClick={onClickBtn} className={styles.btn}>
            {children}
        </button>
    );
};
