import { Container } from '../Container/Container'
import styles from './Main.module.scss'

type MainPropsType = {
    children: React.ReactNode
}

export const Main = ({children}: MainPropsType) => {
    return (
        <main className={styles.main}>
            <Container>
                {children}
            </Container>
        </main>
    )
}