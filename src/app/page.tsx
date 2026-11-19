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
            At Glenn The Handyman, I understand the importance of maintaining your property to keep it looking its best. My comprehensive property services are designed to address all your maintenance and repair needs, ensuring that your home remains in top condition year-round. Not all services are available in France due to the French rules. Whether you need help with small repairs, seasonal maintenance, or larger renovation projects, I'm here to help.
          </div>

          <div className={`${styles.images} pt-4`}>
            {[...Array(5)].map((x, i) =>
              <img
                key={`${i}`}
                src={`/property services/${5 - i}.jpg`}
                alt={`Glenn The Handyman - property services`}
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
              Transform your outdoor space into a lush and vibrant oasis with my professional gardening services.
            </li>

            <li>
              <strong>Pressure Washing </strong>
              Restore the beauty of your home's exterior with my professional pressure washing services. I'll blast away dirt, grime, and mildew to leave your surfaces looking clean and refreshed.
            </li>
            {/* <li>
              <strong>Repointing </strong>
              Preserve the integrity of your stone or brickwork with my repointing services. My handyman will remove deteriorating mortar and replace it with fresh mortar to strengthen and protect your masonry.
            </li> */}
            <li>
              <strong>Gate Building </strong>
              Enhance the security and aesthetics of your property with my custom gate building services. Whether you need a simple garden gate or a grand entrance gate, my handyman will design and construct a gate that meets your specifications.
            </li>
            <li>
              <strong>Home Repairs </strong>
              From small fixes to larger projects, my home repair services cover a wide range of needs, including door, kitchen, bathroom fixes, and more to keep your home in excellent condition.
            </li>
            <li>
              <strong>Gutter Cleaning </strong>
              Keep your gutters clear and flowing smoothly with my gutter cleaning services. I'll remove leaves, debris, and other obstructions to prevent water damage and keep your home protected.
            </li>
            <li>
              <strong>Picture Hanging </strong>
              Let me take the hassle out of hanging your artwork, mirrors, and other decorative items. My handyman will ensure that your pieces are securely and professionally installed, adding the perfect finishing touch to your home.
            </li>
            <li>
              <strong>Gite Change Overs </strong>
              Make hosting guests a breeze with my gite change over services. From cleaning and laundry to restocking essentials, my handyman will ensure that your gite is always ready to welcome new arrivals.
            </li>
            {/* <li>
              <strong>Plasterboarding </strong>
              Transform your interior spaces with my professional plasterboarding services. Whether you're renovating a room or building an extension, my handyman will install plasterboard quickly and efficiently, creating a smooth and durable surface for painting or wallpapering.
            </li> */}
          </ul>

          <h3 className="pt-3">Why Choose Me</h3>
          <ul>
            <li>
              <strong>Experience: </strong>
              With years of experience in the industry, my handyman has the skills and expertise to handle any project, big or small.
            </li>

            <li>
              <strong>Attention to Detail: </strong>
              I take pride in my meticulous attention to detail and commitment to quality craftsmanship, ensuring that every job is done right the first time.
            </li>

            <li>
              <strong>Personalized Service: </strong>
              As a one-man operation, I provide personalized service tailored to your specific needs and preferences.
            </li>

            <li>
              <strong>Reliability: </strong>
              You can count on me to show up on time, work efficiently, and complete your project to your satisfaction.
            </li>

            <li>
              <strong>Affordability: </strong>
              I offer competitive pricing and transparent quotes, so you know exactly what to expect before I begin work.
            </li>
          </ul>
        </div>

        <ReviewSummary />
      </div>
    </main>
  );
}
