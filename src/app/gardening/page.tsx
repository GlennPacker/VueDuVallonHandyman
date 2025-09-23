import VideoComponent from "@/components/videoComponent/VideoComponent";
import styles from "./gardening.module.css";
import Reviews from "@/components/reviews/Reviews";

export default function Gardening() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>
        <div className={styles.layout}>
          <div>
            <h1>
              Gardening
            </h1>

            <h3>Transform Your Garden with Our Care</h3>
            <p>
              Welcome to Vue Du Vallon Handyman Gardening Services! We understand that every outdoor space is unique and requires personalized attention. We are dedicated to providing top-notch gardening services tailored to your specific needs. From regular maintenance to complete garden makeovers, we're here to help you achieve the garden of your dreams.
            </p>

            <div className={`${styles.gardenImageContainer} ${styles.extraRow2}`}>
              <img
                src={`/gardening/garden 3.jpg`}
                alt={`Vue Du Vallon Handyman - gardening`}
                className={styles.gardeningImage}
                width="230px;"
              />
              <img
                src={`/gardening/garden 6.jpg`}
                alt={`Vue Du Vallon Handyman - gardening`}
                className={styles.gardeningImage}
                width="230px;"
              />
            </div>

            <h3>Our Services</h3>
            <h5>Garden Maintenance</h5>
            <ul>
              <li>
                <strong>Strimming: </strong>
                Strimming is perfect for taming and reclaiming overgrown garden spaces, making even the wildest areas manageable and beautiful again.<br /><br />
                Precise strimming around edges, borders, and obstacles for a clean and polished look.
              </li>
              <li>
                <strong>Lawn Mowing: </strong>
                Regular mowing to keep your lawn healthy, neat, and visually appealing.
              </li>
              <li>
                <strong>Weeding: </strong>
                Efficient removal of weeds to maintain the beauty and health of your garden, ensuring a neat and tidy appearance.
              </li>
              <li>
                <strong>Pruning & Trimming </strong>
                Pruning of shrubs, hedges, and trees to promote growth and maintain shape, enhancing curb appeal.
              </li>
            </ul>

            <div className={`${styles.gardenImageContainer} ${styles.extraRow}`}>
              {[...Array(3)].map((x, i) =>
                <img
                  key={`${i}`}
                  src={`/gardening/garden ${i + 4}.jpg`}
                  alt="Vue Du Vallon Handyman - gardening"
                  className={styles.gardeningImage}
                  width="230px;"
                />
              )}
            </div>

            <h5>Landscaping</h5>
            <ul>
              <li>
                <strong>Mulching & Soil Improvement: </strong>
                Enhancing soil quality and appearance with high-quality mulch and soil amendments, promoting healthy plant growth.
              </li>
              <li>
                <strong>Pathways & Patios: </strong>
                Installation of attractive and durable garden pathways and patios to enhance your outdoor living space, perfect for relaxation and entertainment.
              </li>

              <li>
                <strong>New Garden Gates: </strong>
                Design and installation of stylish and functional garden gates to provide security and aesthetic appeal to your garden.
              </li>
            </ul>

            <h5>Plant Care</h5>
            <ul>
              <li>
                <strong>Planting & Transplanting: </strong>
                Planting flowers, shrubs, and trees, ensuring they thrive in their environment and complement your landscape.
              </li>
              <li>
                <strong>Watering Systems: </strong>
                Installation and maintenance of efficient irrigation systems to keep your garden hydrated and healthy, saving you time and water.
              </li>
            </ul>

            <h5>Seasonal Services</h5>
            <ul>
              <li>
                <strong>Spring & Autumn Cleanup: </strong>
                Comprehensive clean-up services to prepare your garden for the new season and maintain its beauty throughout the year.
              </li>
              <li>
                <strong>Seasonal Planting: </strong>
                Planting seasonal flowers and vegetables to add color and interest to your garden year-round, keeping your outdoor space vibrant and appealing.
              </li>
            </ul>

          </div>
          <div className={styles.videoDiv}>
            <VideoComponent
              width="450px"
              height="800px"
              video="DgqMrdJkj9s"
            />
          </div>
        </div>
        <div className={styles.gardenImageContainer}>
          {[...Array(6)].map((x, i) =>
            <img
              key={`${i}(2)`}
              src={`/gardening/garden ${i + 1}.jpg`}
              alt={`Vue Du Vallon Handyman - gardening`}
              className={styles.gardeningImage}
              width="230px;"
            />
          )}
        </div>

        <Reviews filter="gardening" />
      </div>
    </main >
  );
}
