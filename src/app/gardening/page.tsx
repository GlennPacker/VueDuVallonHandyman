import VideoComponent from "@/components/videoComponent/VideoComponent";
import styles from "./gardening.module.css";

export default function Gardening() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>
        <div className={styles.layout}>
          <div>
            <h1>
              Gardening
            </h1>

            <h3>A Personalized Approach to Service</h3>
            <p>
              Whether it's routine upkeep for second home owner, transforming a neglected backyard into a vibrant sanctuary or breathing new life into a tired landscape, Vue Du Vallon Handyman takes pride in delivering personalized solutions that exceed expectations. With a commitment to open communication, transparent pricing, and unmatched craftsmanship, the company ensures that each client's experience is as enjoyable and stress-free as possible.
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

            <h3>Vue Du Vallon Handyman Redefining Outdoor Spaces</h3>
            <p>
              In the realm of gardening and landscaping, one name reigns supreme for its dedication to excellence, creativity, and personalized service: Vue Du Vallon Handyman. Born from a passion for nature and a commitment to craftsmanship, this distinguished company has been reshaping outdoor environments with unparalleled artistry and expertise.
            </p>

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

            <h3>Innovative Solutions for Outdoor Living</h3>
            <p>
              In today's fast-paced world, Vue Du Vallon Handyman understands the importance of creating outdoor spaces that not only inspire awe but also enhance the quality of life. With a keen eye for innovation and a commitment to staying ahead of the curve, the company offers a wide range of services designed to transform ordinary landscapes into extraordinary retreats.
            </p>

            <p>
              From custom-built pergolas and gates to sustainable garden designs and water features, Vue Du Vallon Handyman combines creativity with functionality to craft outdoor environments that are as beautiful as they are practical. By seamlessly blending natural elements with modern amenities, the company creates spaces that invite relaxation, foster connection, and promote well-being.
            </p>

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
      </div>
    </main >
  );
}
