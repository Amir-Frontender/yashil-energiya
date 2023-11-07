import Image from "next/image";
import "../../scss/globals.scss";
import styles from "./page.module.scss";
import Link from "next/link";
import TheProjectsList from "../ProjectsListComponent/TheProjectsList";

export const TheProjects = () => {
  return (
    <div className="container">
      <div className={styles.header}>
        <h3 className="title">Bizning loyihalar</h3>
        <Link href="/projects" className={styles.link}>
          Barcha loyihalar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
          >
            <path
              d="M1 13L7.0251 7L1 1"
              stroke="#12903E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
      <TheProjectsList begin={0} end={4} />
    </div>
  );
};
