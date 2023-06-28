import styles from "./Button.module.scss";

type ButtonPropsType = {
    children: React.ReactNode;
    goToBack: (num: number) => void;
};

export const Button = ({ children, goToBack }: ButtonPropsType) => {
    const onCLickButton = () => {
        goToBack(-1);
    };

    return (
        <button onClick={onCLickButton} className={styles.btn}>
            {children}
        </button>
    );
};
