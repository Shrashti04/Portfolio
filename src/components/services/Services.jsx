// import { useRef } from "react";
// import "./services.scss";
// import { motion, useInView } from "framer-motion";

// const variants = {
//   initial: {
//     x: -500,
//     y: 100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const Services = () => {
//   const ref = useRef();

//   const isInView = useInView(ref, { margin: "-100px" });

//   return (
//     <motion.div
//       className="services"
//       variants={variants}
//       initial="initial"
//       // animate="animate"
//       // whileInView="animate"
//       ref={ref}
//       animate={"animate"}
//     >
//       <motion.div className="textContainer" variants={variants}>
//         <p>
//           I focus on developing and learning
//           <br /> new skills to grow
//         </p>
//         <hr />
//       </motion.div>
//       <motion.div className="titleContainer" variants={variants}>
//         <div className="title">
//           <img src="/pic2.png" alt="" />
//           <h1>
//             <motion.b whileHover={{color:"orange"}}>Skills</motion.b> learned
//           </h1>
//         </div>
//         <div className="title">
//           <h1>
//             For <motion.b whileHover={{color:"orange"}}>Growing</motion.b> 
//           </h1>
//           <button>MY SKILLSET</button>
//         </div>
//       </motion.div>
//       <motion.div className="listContainer" variants={variants}>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Web Development</h2>
//           <p>
//             React Js
//             Next Js
//             Node Js
//             HTML
//             CSS
//             Bootstrap
//             MySQL
//             TailwindCSS
//           </p>
//           <button>Go</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Programming Languages</h2>
//           <p>
//             C++
//             Python
//             C
//             Latex
//             JavaScript
//           </p>
//           <button>Go</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Machine Learning</h2>
//           <p>
//             OpenCV
//             Pandas
//             Scikit Learn
//             TensorFlow
//             PyTorch
//             Numpy
//             CNN
//           </p>
//           <button>Go</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Tools/Softwares</h2>
//           <p>
//             Git
//             Github
//             Figma
//             Wireshark
//             Vivado
//           </p>
//           <button>Go</button>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Services;
// import { useRef } from "react";
// import "./services.scss";
// import { motion, useInView } from "framer-motion";
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const variants = {
//   initial: {
//     x: -500,
//     y: 100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const Services = () => {
//   const ref = useRef();

//   const isInView = useInView(ref, { margin: "-100px" });

//   return (
//     <motion.div
//       className="services"
//       variants={variants}
//       initial="initial"
//       ref={ref}
//       animate={"animate"}
//     >
//       <motion.div className="textContainer" variants={variants}>
//         <p>
//           I focus on developing and learning
//           <br /> new skills to grow
//         </p>
//         <hr />
//       </motion.div>
//       <motion.div className="titleContainer" variants={variants}>
//         <div className="title">
//           <img src="/pic2.png" alt="" />
//           <h1>
//             <motion.b whileHover={{ color: "orange" }}>Skills</motion.b> learned
//           </h1>
//         </div>
//         <div className="title">
//           <h1>
//             For <motion.b whileHover={{ color: "orange" }}>Growing</motion.b>
//           </h1>
//           <button>MY SKILLSET</button>
//         </div>
//       </motion.div>
//       <motion.div className="listContainer" variants={variants}>
//         <SkillBox title="Web Development" skills={[
//           { name: "React Js", icon: "fa-brands fa-react", color: "react" },
//           { name: "Next Js", icon: "fa-brands fa-js", color: "nextjs" },
//           { name: "Node Js", icon: "fa-brands fa-node", color: "nodejs" },
//           { name: "HTML", icon: "fa-brands fa-html5", color: "html" },
//           { name: "CSS", icon: "fa-brands fa-css3", color: "css" },
//           { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "bootstrap" },
//           { name: "MySQL", icon: "fa-solid fa-database", color: "mysql" },
//           { name: "TailwindCSS", icon: "fa-solid fa-wind", color: "tailwind" },
//         ]} />
//         <SkillBox title="Programming Languages" skills={[
//           { name: "C++", icon: "fa-solid fa-code", color: "cpp" },
//           { name: "Python", icon: "fa-brands fa-python", color: "python" },
//           { name: "C", icon: "fa-solid fa-c", color: "c" },
//           { name: "Latex", icon: "fa-solid fa-file-alt", color: "latex" },
//           { name: "JavaScript", icon: "fa-brands fa-js", color: "javascript" },
//         ]} />
//         <SkillBox title="Machine Learning" skills={[
//           { name: "OpenCV", icon: "fa-solid fa-eye", color: "opencv" },
//           { name: "Pandas", icon: "fa-solid fa-database", color: "pandas" },
//           { name: "Scikit Learn", icon: "fa-solid fa-brain", color: "scikit" },
//           { name: "TensorFlow", icon: "fa-solid fa-brain", color: "tensorflow" },
//           { name: "PyTorch", icon: "fa-solid fa-brain", color: "pytorch" },
//           { name: "Numpy", icon: "fa-solid fa-calculator", color: "cnn" },
//         ]} />
//         <SkillBox title="Tools/Softwares" skills={[
//           { name: "Git", icon: "fa-brands fa-git-alt", color: "git" },
//           { name: "GitHub", icon: "fa-brands fa-github", color: "github" },
//           { name: "Figma", icon: "fa-brands fa-figma", color: "figma" },
//           { name: "Wireshark", icon: "fa-solid fa-network-wired", color: "wireshark" },
//           { name: "Vivado", icon: "fa-solid fa-microchip", color: "vivado" },
//         ]} />
//       </motion.div>
//     </motion.div>
//   );
// };

// const SkillBox = ({ title, skills }) => {
//   return (
//     <motion.div className="box" variants={variants} whileHover={{ background: "lightgray", color: "black" }}>
//       <h2>{title}</h2>
//       <div className="skills">
//         {skills.map(skill => (
//           <div className={`skill ${skill.color}`} key={skill.name}>
//             <i className={skill.icon}></i>
//             <p>{skill.name}</p>
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default Services;
import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';

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
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on developing and learning
          <br /> new skills to grow
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/pic2.png" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Skills</motion.b> learned
          </h1>
        </div>
        <div className="title">
          <h1>
            For <motion.b whileHover={{ color: "orange" }}>Growing</motion.b>
          </h1>
          <button>MY SKILLSET</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <SkillBox title="Web Development" skills={[
          { name: "React Js", icon: "fa-brands fa-react", color: "react" },
          { name: "Next Js", icon: "fa-brands fa-js", color: "nextjs" },
          { name: "Node Js", icon: "fa-brands fa-node", color: "nodejs" },
          { name: "HTML", icon: "fa-brands fa-html5", color: "html" },
          { name: "CSS", icon: "fa-brands fa-css3", color: "css" },
          { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "bootstrap" },
          { name: "MySQL", icon: "fa-solid fa-database", color: "mysql" },
          { name: "TailwindCSS", icon: "fa-solid fa-wind", color: "tailwind" },
        ]} />
        <SkillBox title="Programming Languages" skills={[
          { name: "C++", icon: "fa-solid fa-code", color: "cpp" },
          { name: "Python", icon: "fa-brands fa-python", color: "python" },
          { name: "C", icon: "fa-solid fa-c", color: "c" },
          { name: "Latex", icon: "fa-solid fa-file-alt", color: "latex" },
          { name: "JavaScript", icon: "fa-brands fa-js", color: "javascript" },
        ]} />
        <SkillBox title="Machine Learning" skills={[
          { name: "OpenCV", icon: "fa-solid fa-eye", color: "opencv" },
          { name: "Pandas", icon: "fa-solid fa-database", color: "pandas" },
          { name: "Scikit Learn", icon: "fa-solid fa-brain", color: "scikit" },
          { name: "TensorFlow", icon: "fa-solid fa-brain", color: "tensorflow" },
          { name: "PyTorch", icon: "fa-solid fa-brain", color: "pytorch" },
          { name: "Numpy", icon: "fa-solid fa-calculator", color: "cnn" },
          { name: "Seaborn", icon: "fa-solid fa-chart-line", color: "seaborn" },
          { name: "Matplotlib", icon: "fa-solid fa-chart-pie", color: "matplotlib" },
        ]} />
        <SkillBox title="Tools/Softwares" skills={[
          { name: "Git", icon: "fa-brands fa-git-alt", color: "git" },
          { name: "GitHub", icon: "fa-brands fa-github", color: "github" },
          { name: "Figma", icon: "fa-brands fa-figma", color: "figma" },
          { name: "Wireshark", icon: "fa-solid fa-network-wired", color: "wireshark" },
          { name: "Vivado", icon: "fa-solid fa-microchip", color: "vivado" },
        ]} />
      </motion.div>
    </motion.div>
  );
};

const SkillBox = ({ title, skills }) => {
  return (
    <motion.div className="box" variants={variants} whileHover={{ background: "lightgray", color: "black" }}>
      <h2>{title}</h2>
      <div className="skills">
        {skills.map(skill => (
          <div className={`skill ${skill.color}`} key={skill.name}>
            <i className={skill.icon}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
