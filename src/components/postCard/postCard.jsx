import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill className={styles.img} />
                </div>
                <span className={styles.date}>01.01.2023</span>
                </div>

                <div className={styles.bottom}>
                    <h1 className={styles.title}>Title</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sed, molestias molestiae deleniti incidunt, laborum, in tempore distinctio commodi esse aliquid neque obcaecati corporis minus nostrum labore sint accusantium nihil.</p>
                    <Link className={styles.link} href="/blog/post"> Read More </Link>
                </div>
         </div>
     );
}
 
export default PostCard;