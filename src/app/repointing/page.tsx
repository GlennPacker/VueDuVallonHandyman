import styles from "./page.module.css";
import { BeforeAndAfter } from "@/components/beforeAndAfter/BeforeAndAfter";
import Reviews from "@/components/reviews/Reviews";

const beforeAndAfters = [1, 2, 3, 4, 5, 6, 7].map(i => (
  [
    {
      src: `/repointing/${i} before.jpg`,
      alt: 'before repointing'
    },
    {
      src: `/repointing/${i} after.jpg`,
      alt: 'after repointing'
    }
  ]
))

export default function Repointing() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>
        <div className={styles.contentLayout}>
          <div className={styles.layout}>
            <h1>
              Repointing
            </h1>
            <h3>
              Revitalize Your Stonework with Our Repointing
            </h3>
            <p>
              At Vue Du Vallon Handyman, I provide top-notch stone and lime repointing services. As your go-to local professional, I am dedicated to ensuring your stonework is both beautiful and durable with a commitment to quality craftsmanship.
            </p>

            <h3>What is Repointing?</h3>
            <p>
              Repointing is the process of renewing the external part of lime mortar joints in stone masonry construction. Over time, weather conditions, age, and environmental factors can cause the lime mortar between stones to deteriorate. Repointing helps restore the integrity and appearance of your stonework, preventing further damage and enhancing the overall look of your property.
            </p>

            <h3>What is Patching?</h3>
            <p>
              Patching involves repairing specific areas of damaged stone or lime mortar within a wall. This process addresses localized damage such as cracks, holes, or missing pieces of stone, ensuring that the wall maintains its structural integrity and aesthetic appeal.
            </p>

            <h3>My Stone and Lime Repointing Services</h3>
            <p>
              At Vue Du Vallon Handyman, I offer comprehensive stone and lime repointing services tailored to meet your specific needs:
            </p>
            <ul>
              <li>
                <strong>Stonework Inspection: </strong>
                I thoroughly inspect your stonework to assess the extent of the damage and identify areas that need repointing or patching.
              </li>
              <li>
                <strong>Precision Repointing: </strong>
                Using specialised tools and techniques, I remove the old, damaged lime mortar and replace it with fresh, durable lime mortar.
              </li>
              <li>
                <strong>Wall Repair and Patching: </strong>
                I repair and patch damaged stone walls to restore their structural integrity and aesthetic appeal, addressing cracks, holes, or missing pieces of stone.
              </li>
              <li>
                <strong>Clean-Up and Finish</strong>
                I clean the stone surfaces and ensure all joints are neatly finished, leaving your property looking pristine.
              </li>
            </ul>

            <h3>
              Why Choose Vue Du Vallon Handyman?
            </h3>

            <ul>
              <li>
                <strong>Experienced Craftsman: </strong>
                As a skilled professional in stone masonry, repointing, and wall repair, I bring a personal touch to every project.
              </li>
              <li>
                <strong>Quality Materials: </strong>
                I use only the highest quality lime mortar to ensure long-lasting results.
              </li>
              <li>
                <strong>Customer Satisfaction: </strong>
                Your satisfaction is my priority. I work closely with you to meet your expectations and deliver exceptional results.
              </li>
            </ul>
          </div>

          <div className={styles.beforeAndAfterGrid}>
            {
              beforeAndAfters.map(([before, after], index) =>
                <div
                  key={`before-and-after-${index}`}
                  className={styles.beforeAndAfter} >
                  <BeforeAndAfter
                    before={before}
                    after={after}
                    size={{
                      width: 200,
                      height: 200
                    }}
                  />
                </div>
              )
            }
          </div>
        </div>

        <Reviews filter="repointing" />
      </div>
    </main >
  );
}
