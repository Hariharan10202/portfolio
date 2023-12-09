import { useEffect, useRef, useState } from "react";
import "./hero.scss";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const images = [
  {
    id: 1,
    src: "react.svg",
    alt: "react",
    bounce: {
      y: [5, -5, 5, -5, 5, -5, 5, -5, 5],
      rotate: [0, 40, 70, 100, 130, 360],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },
  {
    id: 2,
    src: "nextjs.svg",
    alt: "nextjs",
    bounce: {
      y: [30, -30, 30, -30, 30, -30, 30, -30, 30],
      rotate: [0, 15, -15, 15, 0],

      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },
  {
    id: 3,
    src: "tailwind.svg",
    alt: "tailwind",
    bounce: {
      y: [5, -5, 5, -5, 5, -5, 5, -5, 5],
      rotate: [0, 110, 130, 150, 170, 180],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },
  {
    id: 4,
    src: "typescript.svg",
    alt: "typescript",
    bounce: {
      y: [-5, 5, -5, 5, -5, 5, -5, 5, -5],
      rotate: [0, -20, 10, -20, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },
  {
    id: 5,
    src: "mongodb.svg",
    alt: "mongodb",
    bounce: {
      y: [-5, 5, -5, 5, -5, 5, -5, 5, -5],
      rotate: [0, 90, 180, 270, 360],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },
  {
    id: 6,
    src: "firebase.svg",
    alt: "firebase",
    bounce: {
      y: [-5, 5, -5, 5, -5, 5, -5, 5, -5],
      rotate: [10, -10, 10, -10, 10],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },
  {
    id: 7,
    src: "nextauth.svg",
    alt: "nextauth",
    bounce: {
      y: [-5, 5, -5, 5, -5, 5, -5, 5, -5],
      rotate: [0, 360],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },
  {
    id: 8,
    src: "stycom.svg",
    alt: "stycom",
    bounce: {
      y: [-5, 5, -5, 5, -5, 5, -5, 5, -5],
      rotate: [-20, -10, 20, -10, -20],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },
  {
    id: 9,
    src: "nodejs.svg",
    alt: "nodejs",
    bounce: {
      y: [-2, 2, -2, 2, -2, 2, -2, 2, -2],
      rotate: [-100, -10, 20, -10, 100, -10, -20, 10, -100],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },
];

const Hero = () => {
  // const iconVariants = {
  //   initial: {
  //     y: 0,
  //   },
  //   bounce: {
  //     y: [-20, 20, -20, 20, -20, 20, -20, 20, -20],
  //     rotate: [0, -10, 10, -5, 5, 0],
  //     transition: {
  //       duration: 4,
  //       ease: "easeInOut",
  //       repeat: Infinity,
  //     },
  //   },
  // };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>HARIHARAN</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button type="button" style={{ cursor: "pointer" }}>
              <a href="#Portfolio"> See the Latest Works</a>
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Mongo React Next Node Firebase Tailwind NextAuth Prisma Typescript
      </motion.div>

      <motion.div className="imageContainer">
        {images.map((image) => (
          <motion.div
            key={image.id}
            initial={{ y: 0, rotate: 0 }}
            animate={image.bounce}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            style={{ marginRight: "10px" }}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: "100px", height: "100px" }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
