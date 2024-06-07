import { ReviewFormModel } from '@/types/reviewFormModel';
import Review from '../review/Review'
import styles from './reviews.module.css';
import reviews from './ReviewData.json';

type props = {
  filter?: string;
}

export default function Reviews({ filter }: props) {
  const data = reviews.filter(r => !filter || r[filter as keyof (ReviewFormModel)])
  return (
    <div className={styles.reviewsContainer}>
      {
        data.map((review: ReviewFormModel, index) =>
          <Review review={review} key={`${index}`} />
        )
      }
    </div>
  )
}
