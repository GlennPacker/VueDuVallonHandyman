import styles from './reviewSummary.module.css';
import ReviewSummaryArticle from "../reviewSummaryArticle/reviewSummaryArticle";
import Link from 'next/link';
import reviewData from '../reviews/ReviewData.json';


const reviews = [
  {
    service: "STONEWORK & REPOINTING",
    title: "Quality workmanship",
    description: 'Lorraine praised the speed and high standard of the work carried out on the stone walls of her property.',
    author: "Lorraine G",
  },
  {
    service: "GARDEN CLEARANCE",
    title: "Reliable and hardworking",
    description:
      "Chris was pleased with the substantial hedge clearance work and booked further work afterwards.",
    author: "Chris",
  },
  {
    service: "PROPERTY MAINTENANCE",
    title: "Help from overseas",
    description:
      "Danielle appreciated the communication and practical help getting her French property and garden in order while living in the United States.",
    author: "Danielle D",
  },
  {
    service: "REGULAR GARDENING",
    title: "Ongoing property care",
    description:
      "Douglas highlighted the value of regular visits covering pruning, weeding, log stacking and pressure washing.",
    author: "Douglas S",
  },
];

export default function ReviewSummary() {

  const wouldUseAgainData = reviewData.reduce((a, r) => a = {
    wouldUse: a.wouldUse + (r.wouldYouUseThemAgain === 'Yes' ? 1 : 0),
    total: a.total + (r.wouldYouUseThemAgain ? 1 : 0)
  }, { wouldUse: 0, total: 0 });
  const wouldUse = wouldUseAgainData.wouldUse / wouldUseAgainData.total;
  const score = reviewData.reduce((a, r) => a += r.rating || 0, 0);

  const avgScore = (score / (reviewData.length)).toFixed(2)

  return (
    <>
      <section className={styles.customerReviews}>
        <div className={styles.reviewsContainer}>
          <div className={styles.reviewsHeader}>
            <span className={styles.reviewsEyebrow}>CUSTOMER FEEDBACK</span>
            <h2>Trusted by homeowners across the region</h2>
            <p>
              I'm proud of the relationships I build with my customers
              and the standard of work I provide. Here's what some of
              them have to say.
            </p>
          </div>

          <div className={styles.reviewStats}>
            <div className={styles.reviewStat}>
              <strong>{avgScore}/5</strong>
              <span>Overall customer rating</span>
            </div>

            <div className={styles.reviewStat}>
              <strong>{reviewData.length}</strong>
              <span>
                Customer reviews
              </span>
              <div>
                <span>
                  <a
                    href='/reviews'
                  >
                    see reviews
                  </a>
                </span>
              </div>
            </div>

            <div className={styles.reviewStat}>
              <strong>{+wouldUse.toFixed(2) * 100}%</strong>
              <span>Would use again</span>
            </div>
          </div>
        </div>
        <div className={styles.reviewCards}>
          {reviews.map((review) => (
            <ReviewSummaryArticle key={review.author} {...review} />
          ))}

        </div>

        <div className={styles.reviewsFooter}>
          <a href="/reviews" className={styles.reviewsButton}>
            Read all customer reviews
          </a>
        </div>
      </section>
    </>
  );
}