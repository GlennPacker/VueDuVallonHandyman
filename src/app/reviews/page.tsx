import Reviews from "@/components/reviews/Reviews";
import styles from "./review.module.css";

export default function ReviewsPage() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>
        <h1>
          Reviews
        </h1>

        <div className={styles.layout}>
          <div className={styles.form}>
            <Reviews show={20} showStats={true} />
          </div>
        </div>
      </div>
    </main >
  );
}