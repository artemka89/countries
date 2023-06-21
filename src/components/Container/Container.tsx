import styles from './Container.module.scss'

type ContainerPropsType = {
    children: React.ReactNode
}

export const Container = ({children}: ContainerPropsType) => {
    return (
        <div className={styles.container}>{children}</div>
    )
}