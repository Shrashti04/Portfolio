import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        {/* name will be written on the top near menu bar with 
        animation and transition and can change opacity, duration  */}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75 }}
        >
          Shrashti Saraswat
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/shrashtisaraswat/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/Shrashti04">
            <img src="/github.png" alt="" />
          </a>
          {/* <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
