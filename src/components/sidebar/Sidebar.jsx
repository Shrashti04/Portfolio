import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

// here i am creating a circle with the secenario
// of open and closed, when the circle will be open then
// it will fill up the area

const variants = {
  open: {
    clipPath: "circle(1100px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,  //open up the circle 
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.4,  //kitni delay se circle close ho rha h
      type: "spring",
      stiffness: 450,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
