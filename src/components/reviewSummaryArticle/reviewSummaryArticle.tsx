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
    const splitDescription = description.split(' ').length
    if (splitDescription > 45) {
        description = description.split(' ').slice(0, 45).join(' ') + '... '
    }

    return (
        <article className={styles.reviewCard}>
            <div className={styles.reviewStars} aria-label="5 out of 5 stars">
                ★★★★★
            </div>
            <span className={styles.reviewService}>{service}</span>
            <h3>{title}</h3>
            <p>{description}
                {splitDescription > 50 && <a href="/reviews">Read more</a>}
            </p>
            <span className={styles.reviewAuthor}>{author}</span>
        </article>
    );
}