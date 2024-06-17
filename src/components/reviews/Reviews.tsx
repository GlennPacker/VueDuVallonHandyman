import { ReviewFormModel } from '@/types/reviewFormModel';
import Review from '../review/Review'
import styles from './reviews.module.css';
import reviews from './ReviewData.json';
import Link from 'next/link';

type props = {
  showStats?: boolean;
  filter?: string;
  show?: number;
}

export default function Reviews({ filter, show = 4, showStats = false }: props) {
  const orderedData = reviews.sort((a, b) => (a.id > b.id ? -1 : 0))
  const filteredData = orderedData.filter(r =>
  (
    !filter ||
    r[filter as keyof (ReviewFormModel)]
  )
  );

  const data = filteredData.filter((_, i) => i < show);
  const showMore = filteredData.length !== data.length;
  const score = filteredData.reduce((a, r) => a += r.rating, 0);
  const totalReviews = filteredData.length;
  const avgScore = (score / (totalReviews)).toFixed(2)

  const valueScore = filteredData.reduce((a, r) => a += r.valueForMoney || 0, 0);
  const avgValueScore = (valueScore / filteredData.filter(r => r.valueForMoney).length).toFixed(2);

  const wouldUseAgainData = filteredData.reduce((a, r) => a = {
    wouldUse: a.wouldUse + (r.wouldYouUseThemAgain === 'Yes' ? 1 : 0),
    total: a.total + (r.wouldYouUseThemAgain ? 1 : 0)
  }, { wouldUse: 0, total: 0 });
  const wouldUse = wouldUseAgainData.wouldUse / wouldUseAgainData.total;

  return (
    <>
      {
        showStats &&
        <div className={styles.header}>
          <div><strong>{avgScore}</strong> of 5 ({totalReviews} Reviews)</div>
          <div>Value for money: <strong>{avgValueScore}</strong> of 5</div>
          <div>Would use again: <strong>{wouldUse * 100}%</strong> </div>
        </div>
      }
      <div className={styles.reviewsContainer}>
        {
          data.map((review: ReviewFormModel, index: number) =>
            <Review
              review={review} key={`${index}`}
              summary={!showStats}
            />
          )
        }

      </div>
      {
        showMore && <Link
          href='/reviews'
          className='a'
        >
          See more reviews
        </Link>
      }
    </>
  )
}
