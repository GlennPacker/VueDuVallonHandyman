import styles from './reviewSummaryArticle.module.css';

type ReviewSummaryArticleProps = {
    service: string;
    title: string;
    description: string;
    author: string;
};

export default function ReviewSummaryArticle({
    service,
    title,
    description,
    author,
}: ReviewSummaryArticleProps) {
    return (
        <article className={styles.reviewCard}>
            <div className={styles.reviewStars} aria-label="5 out of 5 stars">
                ★★★★★
            </div>
            <span className={styles.reviewService}>{service}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className={styles.reviewAuthor}>{author}</span>
        </article>
    );
}