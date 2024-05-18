import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <>
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={window.innerWidth<=738 ? "animate" : isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src={require("../img/people.webp")} alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Progressive Web Apps (PWAs)</h2>
          <p>
          PWAs combine the best of web and mobile apps, providing a fast, reliable, and engaging user experience.
They offer offline capabilities, push notifications, and faster load times, enhancing user engagement and retention.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2> Interactive User Interfaces</h2>
          <p>
          This involves using advanced CSS animations, JavaScript, and interactive elements to create a dynamic user interface.
Interactive interfaces can captivate users, making the website more enjoyable to use. This increases the time users spend on the site, reduces bounce rates, and can improve conversion rates.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>SEO & SEM Services</h2>
          <p>
          Offering services that improve a website's visibility on search engines through optimization (SEO) and paid advertising (SEM).
Improved visibility on search engines can drive more traffic to a website, leading to higher engagement and conversions. This is crucial for business growth and online presence.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Accessibility Features</h2>
          <p>
          Ensuring websites are accessible to users with disabilities by following guidelines such as the Web Content Accessibility Guidelines (WCAG).
Accessibility enhancements expand the potential user base, improve user experience for all visitors, and ensure compliance with legal standards, which can protect clients from potential lawsuits.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
    </>
  );
};

export default Services;


