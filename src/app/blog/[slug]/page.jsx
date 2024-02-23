import Image from 'next/image';
import styles from './singlePost.module.css';


const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='' fill />

            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>

                <div className={styles.detail}>
                    <Image className={styles.avatar} src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='' width={50} height={50} />

                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>course</span>
                        <span className={styles.detailValue}>level</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Start at</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis fugit expedita quas recusandae magnam alias! Sed, incidunt odio. Nulla iusto ea quasi quam voluptas. Provident dolorem maiores quis rerum corporis?
                </div>
            </div>
        </div>
    );
}

export default SinglePostPage;