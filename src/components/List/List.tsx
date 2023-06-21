import styles from './List.module.scss'

type ListPropsType = {
    children: React.ReactNode
}

export const List = ({children}:ListPropsType) => {
    return (
        <section className={styles.wrapper}>{children}</section>
    )
}