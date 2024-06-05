import ReviewForm from "@/components/reviewForm/ReviewForm";
import styles from "./review.module.css";

export default function Contact() {
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
      </div>
    </main >
  );
}
