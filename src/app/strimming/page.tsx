import VideoComponent from "@/components/videoComponent/VideoComponent";
import styles from "./page.module.css";
import { BeforeAndAfter } from "@/components/beforeAndAfter/BeforeAndAfter";
import Reviews from "@/components/reviews/Reviews";

const beforeAndAfters = [1, 2, 3, 4, 5, 6, 7, 8].map(i => (
  [
    {
      src: `/strimming/${i} before.jpg`,
      alt: 'before strimming'
    },
    {
      src: `/strimming/${i} after.jpg`,
      alt: 'after strimming'
    }
  ]
))

export default function PropertyServices() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>
        <div className={`${styles.contentLayout} mx-auto`}>
          <div className={styles.layout}>
            <div className={styles.videoParaLayout}>
              <div>
                <h1>Rough Strimming and Garden Reclamation</h1>
                <p>
                  At Vue Du Vallon Handyman, we recognize that reclaiming overgrown and neglected gardens requires more than just routine maintenance. Our rough strimming and garden reclamation services are designed to tackle the toughest and most overgrown areas, transforming them into usable and aesthetically pleasing spaces.
                </p>

                <h3>
                  What is Rough Strimming?
                </h3>

                <p>
                  Rough strimming involves using a heavy-duty strimmer to cut through thick, overgrown grass, weeds, and other vegetation. This process is essential for clearing areas that have been left unmanaged for an extended period. Rough strimming is particularly effective in large gardens, fields, or any outdoor space that has become wild and unkempt.
                </p>

              </div>
              <div className={styles.videoContainer}>
                <VideoComponent
                  width="400px"
                  height="400px"
                  video="BCo7dPPF51Q"
                />
              </div>
            </div>
            <div>
              <h3>
                Why Choose Vue Du Vallon Handyman?
              </h3>
              <ul>
                <li>
                  <strong>Personal Expertise and Experience </strong>
                  with extensive experience in garden reclamation, I ensure that even the most neglected spaces are efficiently cleared and prepared for future use. I bring a personal touch and dedication to every job.
                </li>
                <li>
                  <strong>High-Quality Equipment </strong>
                  I utilize powerful, professional-grade strimmers and other equipment capable of cutting through dense vegetation. My tools are regularly maintained to ensure they operate at peak performance, allowing me to tackle even the toughest jobs.
                </li>
                <li>
                  <strong>Comprehensive Service </strong>
                  my rough strimming and garden reclamation services are thorough. I not only clear overgrown vegetation but also address underlying issues such as removing debris, trimming trees and bushes.
                </li>
                <li>
                  <strong>Safety First </strong>
                  handling overgrown areas can be hazardous. I follow strict safety protocols and am equipped with the necessary protective gear to ensure the job is done safely and efficiently.
                </li>
              </ul>
              <h3>My Garden Reclamation Process</h3>
              <ol>
                <li>
                  <strong>Initial Assessment </strong>
                  I begin with a detailed assessment of your garden to understand the extent of overgrowth and the specific requirements for reclamation. This helps me develop a tailored plan to effectively clear and reclaim your space.
                </li>
                <li>
                  <strong>Preparation </strong>
                  before starting the rough strimming, I clear any large debris and ensure the area is safe for work. This includes identifying and removing any obstacles that could interfere with the strimming process.
                </li>
                <li>
                  <strong>Rough Strimming </strong>
                  Using my heavy-duty strimmers, I cut through thick grass, weeds, and other vegetation. I ensure that all overgrown areas are thoroughly cleared, making way for further reclamation efforts.
                </li>
                <li>
                  <strong>Mowing </strong>
                  after the initial rough strimming, I follow up with mowing to achieve a more even and tidy appearance
                </li>
                <li>
                  <strong>Final Inspection </strong>
                  I conduct a final inspection to ensure that the area has been thoroughly cleared and that all reclamation goals have been met. I ensure that you are satisfied with the results before considering the job complete.
                </li>
              </ol>

              <h3>
                Coverage Areas
              </h3>
              <p>
                Vue Du Vallon Handyman proudly serves the regions of Haute Vienne, Creuse, and Indre. Whether you have a property in the rolling hills of Haute Vienne, the picturesque landscapes of Creuse, or the charming countryside of Indre, I am here to help transform your overgrown spaces into beautifully reclaimed gardens.
              </p>

              <h3>
                Customer Satisfaction
              </h3>
              <p>
                At Vue Du Vallon Handyman, I am dedicated to transforming neglected and overgrown spaces into beautiful, usable areas. My rough strimming and garden reclamation services are tailored to meet your specific needs, ensuring high-quality results that exceed your expectations. I am always ready to provide advice and assistance on maintaining your reclaimed garden.
              </p>
              <p>
                Let Vue Du Vallon Handyman handle your rough strimming and garden reclamation needs, and watch as I bring your outdoor space back to life. Contact me today to schedule a service or to learn more about my wide range of handyman services.
              </p>
            </div>
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

        <Reviews filter="strimming" />
      </div>
    </main >
  );
}
