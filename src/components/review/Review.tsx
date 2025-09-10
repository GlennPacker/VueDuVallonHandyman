import { ReviewFormModel } from "@/types/reviewFormModel";
import styles from "./review.module.css";

type props = {
  review: ReviewFormModel,
  summary: boolean
}

export default function Review({ review, summary }: props) {
  const { rating, name, message, title, valueForMoney, wouldYouUseThemAgain, department, town } = review;

  const nameParts = name.trim().split(' ')
  const displayName = nameParts.length === 1 ? name : `${nameParts[0]} ${nameParts[1][0]}`

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.header} >
        <div className={styles.stars}>
          {[...Array(5)].map((_, i) => i < (rating || 0) ? '★' : '☆')}
        </div>
        <strong className={styles.title}>{title}</strong>
      </div>

      <div>
        <span className={styles.name}>
          {displayName}:
        </span>
        &nbsp; {message}
      </div>
      <div className={styles.extraData}>
        {!summary && <>
          <div>
            {
              valueForMoney &&
              <>
                Value for money: <span className={styles.valueStars}>
                  {[...Array(5)].map((_, i) => i < (valueForMoney || 0) ? '★' : '☆')}
                </span>
              </>
            }
          </div>
          <div>
            {
              wouldYouUseThemAgain &&
              <>Would use again: {wouldYouUseThemAgain}</>
            }
          </div>
          

        </>
        }
        { town && department && 
          <div>
            {town}, {department}
          </div>
      }
      </div>
    </div >
  )
}
