import styles from './Footer.module.sass';

export const Footer = () => {
  return(
    <footer className={styles.Footer}>
      <p>Dizzo© {new Date().getFullYear()}</p>
    </footer>
  )
};
