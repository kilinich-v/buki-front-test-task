import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.section}>
      <ul className={styles.list}>
        <li className={styles.item}>Home</li>
        <li className={styles.item}>Contact us</li>
        <li className={styles.item}>About</li>
      </ul>
      <div className={styles.copyright}>@ Copyright 2019</div>
    </div>
  );
};

export default Footer;
