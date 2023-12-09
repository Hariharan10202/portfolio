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
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p style={{ paddingTop: "20px" }}>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1 style={{ margin: "10px 0" }}>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1 style={{ margin: "10px 0" }}>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>User Interface (UI) Development</h2>
          <p>
            Front-end engineers are responsible for implementing the visual
            design of a website or web application. They translate design
            mockups into responsive and interactive user interfaces using HTML,
            CSS, and JavaScript. This involves creating layouts, styling
            elements, and ensuring a seamless user experience across different
            devices and screen sizes.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Performance Optimization</h2>
          <p>
            Front-end engineers focus on optimizing the performance of web pages
            to ensure fast loading times and a smooth user experience. They use
            various techniques such as code minification, image compression,
            lazy loading, and asynchronous loading of scripts to reduce page
            load times. Performance optimization is crucial for user
            satisfaction and search engine rankings.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Front-End Frameworks and Libraries</h2>
          <p>
            Front-end engineers often work with popular frameworks and libraries
            to streamline development and enhance functionality. Examples
            include React.js, Angular, Vue.js, and jQuery. They leverage these
            tools to build modular and maintainable code, implement complex user
            interfaces, and efficiently manage state and data flow within
            applications
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Cross-Browser Compatibility</h2>
          <p>
            Ensuring that a website or web application works consistently across
            different web browsers is a key responsibility of front-end
            engineers. They identify and fix compatibility issues, addressing
            variations in rendering and functionality between browsers. This
            includes testing and debugging on popular browsers like Chrome,
            Firefox, Safari, and Edge.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
