import styles from './footer.module.css';


const Footer = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.logo}>Test</div>
            <div className={styles.text}>
           Test agency © All rights reserved.
            </div>
        </div>
     );
}
 
export default Footer;