import {motion} from 'framer-motion';
import "./hero.scss";

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
        repeatType:"mirror",
        duration: 20,
      },
    },
  };

  const btnLink = () => {window.location.href = "http://localhost:5173/#Portfolio";};
  const btnContact = () =>{window.location.href = "http://localhost:5173/#Contact";console.log("contact")};

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
                <motion.h2 drag variants={textVariants}>Franklin</motion.h2>
                <motion.h1 drag variants={textVariants}>Web Developer</motion.h1>
                <motion.div variants={textVariants}  className="buttons">
                    <motion.button onClick={btnLink} drag variants={textVariants} whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        See the Latest Work
                        </motion.button>
                    <motion.button onClick={btnContact} drag variants={textVariants} whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="scroll" />
            </motion.div>
            </div>
            <motion.div className="slidingTextContainer"
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            >
            </motion.div>
        </div>
    );
};

export default Hero;