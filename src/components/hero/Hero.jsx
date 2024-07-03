import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -600,
    opacity: 0,
  },
  animate: {
    x: 10,   // initial was 0 , through this we can shift the all text while animating
    opacity: 1,
    transition: {
      duration: 0.9,
      staggerChildren: 0.2,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = { // for rotating text row wise in the bottom
  initial: {
    x: 0,
  },
  animate: {
    x: "-650%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Hii! I'm Shrashti Saraswat</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and Data Analyst
          </motion.h1>
          {/* <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See my Work
            </motion.button>
            <motion.button variants={textVariants}>Let's Connect</motion.button>
          </motion.div> */}
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
        Web Developer Data Analyst UX Designer
      </motion.div>
      <div className="imageContainer">
        <img src="/picture.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
