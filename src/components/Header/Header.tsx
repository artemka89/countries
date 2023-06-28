import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { useTheme } from "../../hooks/useTheme";

import { Container } from "../Container/Container";

import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
    const { theme, handleTheme } = useTheme();

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.wrapper}>
                    <Link to="/" className={styles.title}>Where is the world?</Link>
                    <div className={styles.modeSwitcher} onClick={handleTheme}>
                        {theme === "light" ? (
                            <IoMoon className={styles.icon} />
                        ) : (
                            <IoMoonOutline className={styles.icon} />
                        )}
                        {theme} Theme
                    </div>
                </div>
            </Container>
        </header>
    );
};
