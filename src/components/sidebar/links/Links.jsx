import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.2,  //transition in which how the texts are showing after delay
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,   //items opacity
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Skills", "Projects", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }} //sidebar items pr hover krne pr kitna size bada hoga
          whileTap={{ scale: 0.95 }} //sidebar item pr tap krne pr kitne size se wapas aayega
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
