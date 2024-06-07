import { ReviewFormModel } from "@/types/reviewFormModel";
import styles from "./review.module.css";

type props = {
  review: ReviewFormModel,
}

export default function Review({ review }: props) {
  const { rating, name, message, title } = review;

  const nameParts = name.trim().split(' ')
  const displayName = nameParts.length === 1 ? name : `${nameParts[0]} ${nameParts[1][0]}`

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.header} >
        <div className={styles.stars}>
          {[...Array(5)].map((_, i) => i < (rating || 0) ? '★' : '☆')}
        </div>
        <strong className={styles.title}> {title}</strong>
      </div>

      <div>
        <span className={styles.name}>
          {displayName}:
        </span>
        &nbsp; {message}
      </div>

    </div >
  )
}
