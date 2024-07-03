// import { useRef } from "react";
// import "./portfolio.scss";
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// const items = [
//   {
//     id: 1,
//     title: "Object Detection using SIFT",
//     img: "/proj1.webp",
//     desc: "Implemented SIFT from scratch and use it between images for object finding/identification. Apart from object identification, we’ve applied the algorithm for similarity detection as well on live images taken from camera.",
//   },
//   {
//     id: 2,
//     title: "Voice based OS",
//     img: "https://assets-global.website-files.com/64a91aff0460ecc653fe8cb9/65cba619b7973d8900c6eca1_text-to-speech-for-linux-p-1080.webp",
//     desc: "A voice-controlled assistant for linux which has features such as giving commands for creating, searching, deleting, and location of a directory. Even features like opening any website, youtube, taking screenshots, opening camera, telling news reports, etc.",
//   },
//   {
//     id: 3,
//     title: "Campus Event Management",
//     img: "/proj3.jpg",
//     desc: "A frontend design which helps to promote events and remind attendees of the schedule, which can lead to better attendance. It also shows a list of upcoming programs, clubs, boards, and fests with the required information.",
//   },
//   {
//     id: 4,
//     title: "Youtube comment Spam Detection",
//     img: "/proj4.webp",
//     desc: "Implemented clustering algorithms to group similar type of comments. Performed manual labeling of the groups and used KNN. Also used other supervised learning methods to create a pipeline that tells us whether a comment is a spam or not.",
//   },
//   {
//     id: 5,
//     title: "Histopathologic Cancer Detection",
//     img: "/proj5.png",
//     desc: "Implemented clustering algorithms to group similar type of comments. Performed manual labeling of the groups and used KNN. Also used other supervised learning methods to create a pipeline that tells us whether a comment is a spam or not.",
//   },
// ];

// const Single = ({ item }) => {
//   const ref = useRef();

//   const { scrollYProgress } = useScroll({
//     target: ref,
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

//   return (
//     <section >
//       <div className="container">
//         <div className="wrapper">
//           <div className="imageContainer" ref={ref}>
//             <img src={item.img} alt="" />
//           </div>
//           <motion.div className="textContainer" style={{y}}>
//             <h2>{item.title}</h2>
//             <p>{item.desc}</p>
//             <button>See Demo</button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Portfolio = () => {
//   const ref = useRef();

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["end end", "start start"],
//   });

//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//   });

//   return (
//     <div className="portfolio" ref={ref}>
//       <div className="progress">
//         <h1>Projects</h1>
//         <motion.div style={{ scaleX }} className="progressBar"></motion.div>
//       </div>
//       {items.map((item) => (
//         <Single item={item} key={item.id} />
//       ))}
//     </div>
//   );
// };

// export default Portfolio;
import { useRef, useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const items = [
  {
    id: 1,
    title: "Object Detection using SIFT",
    img: "/proj1.webp",
    desc: "Implemented SIFT from scratch and use it between images for object finding/identification. Apart from object identification, we’ve applied the algorithm for similarity detection as well on live images taken from camera.",
    repo: "https://github.com/Shrashti04/Object-Detection-using-SIFT"
  },
  {
    id: 2,
    title: "Voice based OS",
    img: "https://assets-global.website-files.com/64a91aff0460ecc653fe8cb9/65cba619b7973d8900c6eca1_text-to-speech-for-linux-p-1080.webp",
    desc: "A voice-controlled assistant for linux which has features such as giving commands for creating, searching, deleting, and location of a directory. Even features like opening any website, youtube, taking screenshots, opening camera, telling news reports, etc.",
    repo: "https://github.com/Shrashti04/Voice-Based-OS"
  },
  {
    id: 3,
    title: "Campus Event Management",
    img: "/proj3.jpg",
    desc: "A frontend design which helps to promote events and remind attendees of the schedule, which can lead to better attendance. It also shows a list of upcoming programs, clubs, boards, and fests with the required information.",
    repo: "https://github.com/Shrashti04/Campus_Event_Management"
  },
  {
    id: 4,
    title: "Youtube comment Spam Detection",
    img: "/proj4.webp",
    desc: "Implemented clustering algorithms to group similar type of comments. Performed manual labeling of the groups and used KNN. Also used other supervised learning methods to create a pipeline that tells us whether a comment is a spam or not.",
    repo: "https://github.com/Shrashti04/Youtube-comment-spam-detection"
  },
  {
    id: 5,
    title: "Histopathologic Cancer Detection",
    img: "/proj5.png",
    desc: "Implemented clustering algorithms to group similar type of comments. Performed manual labeling of the groups and used KNN. Also used other supervised learning methods to create a pipeline that tells us whether a comment is a spam or not.",
    repo: "https://github.com/Shrashti04/Histopathologic-Cancer-Detection"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.repo} target="_blank" rel="noopener noreferrer">
              <button>
              GitHub <FontAwesomeIcon icon={faGithub} />
                
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
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
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
