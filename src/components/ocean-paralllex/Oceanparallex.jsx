import { useRef } from "react";
import styles from "./Oceanparallax.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Oceanparallex = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(
    scrollYProgress,
    [0, 1, 3],
    ["0%", "200%", "400%"]
  );
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div className={styles.parallax} ref={ref}>
      <motion.h1 style={{ y: yText }}>Experience</motion.h1>
      <motion.div className={styles.mountains}></motion.div>
      <motion.div
        className={styles.planets}
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planes.png" : "/un.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className={styles.stars}></motion.div>
    </div>
  );
};

export default Oceanparallex;
