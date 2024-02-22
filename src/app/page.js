import styles from './home.module.css';
import Image from 'next/image';

const Home = () => {
  return ( 
    <div className={styles.container}>
      <div className={styles.textContainer}>


        <h1 className={styles.title}> Creative  Web Developer </h1>
        <p className={styles.desc}>Im a web developer specialized in creating responsive and interactive websites. Im passionate about creating beautiful and functional websites that help businesses grow. </p>


        <div className={styles.buttons}>
        <button className={styles.button}>See my work</button>
          <button className={styles.button}>Contact Me</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt= "" fill className={styles.brandImg} />

        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt= "" fill className={styles.heroImg} />
       </div>

    </div>
   );
}
 
export default Home;