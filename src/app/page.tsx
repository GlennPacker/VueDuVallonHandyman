import Reviews from "@/components/reviews/Reviews";
import styles from "./page.module.css";
import ReviewSummary from "@/components/reviewSummary/reviewSummary";

export default function Home() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>
        <div>
          <h1>
            Welcome To Glenn The Handyman
          </h1>
          <div>
            At Glenn The Handyman, I understand the importance of maintaining your property to keep it looking its best. My comprehensive property service is designed to address all your maintenance and repair needs, ensuring that your home remains in top condition year-round. Not all services are available in France due to the French rules. Whether you need help with small repairs, seasonal maintenance, or larger renovation projects, I'm here to help.
          </div>

          <div className={`${styles.images} pt-4`}>
            {[...Array(5)].map((x, i) =>
              <img
                key={`${i}`}
                src={`/property services/${5 - i}.jpg`}
                alt={`Glenn The Handyman - property services ${5 - i}`}
                className={styles.propertyServicesImage}
                width="230px;"
              />
            )}
          </div>

          <h3 className="pt-4">
            My Services
          </h3>
          <div>
            I offer a wide range of property services to meet your needs, including:
          </div>
          <ul>
            <li>
              <strong>Gardening </strong>
              Help keep your garden tidy and manageable with mowing, hedge cutting, strimming, pruning and general garden maintenance.
            </li>
            <li>
              <strong>Repointing </strong>
              Preserve the integrity of your stone or brickwork with my repointing services. I will remove deteriorating mortar and replace it with fresh mortar to strengthen and protect your masonry.
            </li>
            <li>
              <strong>Pressure Washing </strong>
              Pressure washing patios, paths, driveways and other suitable outdoor surfaces to remove accumulated dirt, moss and grime.
            </li>
            <li>
              <strong>Gates and property improvements </strong>
              I can build, repair and maintain gates and other features around your property, helping keep everything secure and in good working order.
            </li>
            <li>
              <strong>General home improvements </strong>
              From small repairs and maintenance jobs to larger home improvements, I can help you get those unfinished jobs around your property sorted.
            </li>
            <li>
              <strong>Gutters </strong>
              Keep your gutters clear and flowing smoothly with my gutter cleaning services. I'll remove leaves, debris, and other obstructions to prevent water damage and keep your home protected.
            </li>
            <li>
              <strong>Land clearance </strong>
              I can help bring overgrown gardens back under control, clearing unwanted vegetation, tackling heavy undergrowth and making outdoor spaces manageable again.
            </li>
            <li>
              <strong>Hedge cutting </strong>
              Hedge cutting and trimming, from routine maintenance to bringing overgrown hedges back into shape.
            </li>
            <li>
              <strong>Kit installations </strong>
              I can assemble and install a range of garden and outdoor kits, including sheds, summerhouses, gazebos, pergolas and swimming pools.
            </li>
            <li>
              <strong>Gite Change Overs </strong>
              Make hosting guests a breeze with my gite change over services. From cleaning and laundry to restocking essentials, I will ensure that your gite is always ready to welcome new arrivals.
            </li>
            {/* <li>
              <strong>Plasterboarding </strong>
              Transform your interior spaces with my professional plasterboarding services. Whether you're renovating a room or building an extension, I will install plasterboard quickly and efficiently, creating a smooth and durable surface for painting or wallpapering.
            </li> */}
          </ul>
          <p>
            Glenn The Handyman provides reliable property maintenance, gardening, clearance, and home installation services
            across Haute-Vienne (87), Creuse (23), and Indre (36).
          </p>
          <p>
            I regularly assist homeowners and second-home owners in surrounding towns and villages including
            Le Dorat, Lussac-les-Églises, Bussière-Poitevine, Bellac, La Souterraine, and Guéret.
            Whether you need ongoing garden upkeep or a one-off handyman job, I offer dependable local support
            across the Limousin border area.
          </p>

          <h3 className="pt-3">Why Choose Me</h3>
          <ul>
            <li>
              <strong>Practical Help: </strong>
              From small repairs and maintenance to larger projects around the property, I offer practical help to get the work done.
            </li>

            <li>
              <strong>Attention to Detail: </strong>
              I work carefully and take the time to get the job done properly, paying attention to the details along the way.
            </li>

            <li>
              <strong>Personalized Service: </strong>
              You deal directly with me from the initial enquiry through to completion of the work.
            </li>

            <li>
              <strong>Reliability: </strong>
              I keep in touch about arrangements, let you know if anything changes and aim to make the whole process as straightforward as possible.
            </li>

            <li>
              <strong>Affordability: </strong>
              I provide a clear quote before starting work, so you know what is included and what it will cost.
            </li>
          </ul>


        </div>

        <ReviewSummary />
      </div>
    </main >
  );
}
