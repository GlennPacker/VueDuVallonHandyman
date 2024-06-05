import styles from "./review.module.css";
import ReviewRequestForm from "@/components/reviewRequestForm/ReviewRequestForm";

export default function ReviewRequest() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>
        <h1>
          Review Request
        </h1>

        <div className={styles.layout}>
          <div className={styles.form}>
            <ReviewRequestForm />
          </div>
        </div>
      </div>
    </main >
  );
}
