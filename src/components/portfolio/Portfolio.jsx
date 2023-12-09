import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { experience, items } from "../../projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Single = ({ item, type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className={`${type ? "container" : "container Ex-Container"}`}>
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div
            className={`${
              type ? "textContainer" : "textContainer Ex-textContainer"
            }`}
            style={{ y }}
          >
            <h2 style={{ padding: "15px" }}>{item.title}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: item?.desc,
              }}
            />
            {type && (
              <div className="linkContainer">
                <button className="secondary">
                  <a href={item.git} target="_blank">
                    Github <FaGithub />
                  </a>
                </button>
                <button>
                  <a href={item.demo} target="_blank">
                    View <FaExternalLinkAlt />
                  </a>
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1 className="header">
          {type ? "Featured Works" : "Work Experience"}
        </h1>

        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {type ? (
        <>
          {items.map((item) => (
            <Single type={type} item={item} key={item.id} />
          ))}
        </>
      ) : (
        <>
          {experience.map((item) => (
            <Single item={item} key={item.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default Portfolio;
