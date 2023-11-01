import styles from "./style.module.scss"

export const Footer = () => {
    return (
        <>
            <hr className={styles.hr} />
            <footer className={styles.footer}>
                <h3 className="title1-mobileB center">Todos os direitos reservados - Kenzie Academy Brasil</h3>
            </footer>
        </>
    )
}