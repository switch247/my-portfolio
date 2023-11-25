// "use client";
// import styles from "../../styles/project.module.css";
// import { useRouter } from "next/navigation";
// import { AiFillGithub } from "react-icons/ai";
// import { CgWebsite } from "react-icons/cg";
// import { BiDetail } from "react-icons/bi";
// import {FiArrowUpRight} from "react-icons/fi"
// import Link from "next/link";
// const Project = ({ name, description, ImageSrc, id, githubLink, demoLink }) => {
//   const router = useRouter();

//   const openInNewTab = (url) => {
//     window.open(url, "_blank", "noreferrer");
//   };


//   return (
//     <Link href={`/project/${id}`} className={styles.projectContainer}>
//     <div
//       className={styles.project}
//     >

//       <div className={styles.imgContainer}>
//         <img
//           src={ImageSrc}
//           alt={`Image of ${name} app`}
//           className={styles.img}
//         />
//       </div>

//       <div className={styles.projectInfo}>
//         <h3>{name}</h3>
//         <p>{description}</p>
//         <div className={styles.btns}>
//           <button onClick={() => router.push(`/project/${id}`)}>
//             <BiDetail />
//             Details
//           </button>

//           <button onClick={(e) =>{
//             e.stopPropagation()
//             openInNewTab(githubLink)
//           }}>
//             <AiFillGithub />
//             GitHub
//           </button>

//           <button onClick={(e)=>{ 
//             e.stopPropagation()
//             openInNewTab(demoLink)
//           }}>
//             <CgWebsite />
//             Live
//           </button>
//         </div>
//       </div>
//     </div>
//     </Link>
//   );
// };

// export default Project;


"use client";
import styles from "@/styles/project.module.css";
import { useRouter } from "next/navigation";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

import { BiDetail } from "react-icons/bi";
import Link from "next/link";

const Project = ({ name, description, ImageSrc, id, githubLink, demoLink, technologies }) => {
  const router = useRouter();

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <Link href={`/project/${id}`} className={styles.projectContainer}>
      <div className={styles.project}>
        <div className={styles.imgContainer}>
          <img
            src={ImageSrc}
            alt={`Image of ${name} app`}
            className={styles.img}
          />
        </div>

        <div className={styles.projectInfo}>
          <h3>{name}</h3>
          <p>{description}</p>

          {/* Technology chips */}
          <div className={styles.techChips}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.techChip}>{tech}</span>
            ))}
          </div>

          <div className={styles.btns}>
            <button onClick={() => router.push(`/project/${id}`)}>
              <BiDetail />
              Details
            </button>
            <button onClick={(e) => {
              e.stopPropagation();
              openInNewTab(githubLink);

            }}
              style={
                { background: "yellow", color:"black" }
              }>
              <AiFillGithub />
              GitHub
            </button>
            <button onClick={(e) => {
              e.stopPropagation();
              openInNewTab(demoLink);
            }}
              style={
                { background: "red" }
              }
            >
              <CgWebsite />
              Live
            </button>
          </div>
        </div>

      </div>
    </Link>
  );
};

export default Project;