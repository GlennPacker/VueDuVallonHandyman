import styles from "./contact.module.css";
import Button from 'react-bootstrap/Button';

export default function Contact() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>
        <h1>
          Contact
        </h1>
        <div>
          <strong>Phone:</strong>
          <div className="ps-5">
            +33 7 70 26 20 89 <br />
            <Button
              href="https://calendly.com/vue-du-vallon"
              target="_blank"
              color="primary">
              Schedule a call
            </Button>
          </div>
        </div>
        <div>
          <strong>Email:</strong>
          <div className="ps-5">
            Glenn@VueDuVallon.fr
          </div>
        </div>
        <div>
          <strong>Social:</strong>
          <div className="ps-5">
            <a
              href="https://www.facebook.com/profile.php?id=61557315565267"
              target="_blank"
            >
              <img
                height="25px"
                src="/facebook.png"
              />
            </a>
          </div>
        </div>
      </div>
    </main >
  );
}
