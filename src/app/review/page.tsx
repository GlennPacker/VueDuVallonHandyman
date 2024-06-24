import ReviewForm from "@/components/reviewForm/ReviewForm";
import styles from "./review.module.css";

export default function Review() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>
        <h1>
          Review
        </h1>

        <div className={styles.layout}>
          <div className={styles.form}>
            <ReviewForm />
          </div>
        </div>

        <img
          src="/property services/3.jpg"
          alt="Vue Du Vallon Handyman"
          className={styles.searchImage}
        />
      </div>
    </main >
  );
}
