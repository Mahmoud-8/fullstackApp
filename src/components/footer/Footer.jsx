import styles from './footer.module.css';


const Footer = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.logo}>Deutch</div>
            <div className={styles.text}>
            Deutsch agency © All rights reserved.
            </div>
        </div>
     );
}
 
export default Footer;