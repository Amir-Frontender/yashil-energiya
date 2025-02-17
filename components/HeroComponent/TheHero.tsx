"use client";
import { HeroProps } from "@/interface/props";
import "../../scss/globals.scss";
import styles from "./page.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const TheHero = ({ title1, title2, url1, url2 }: HeroProps) => {
  const pathname = usePathname()?.replace("/", "");

  return (
    <div className={styles.hero}>
      <div className={styles.bgBlock}>
        <Image
          width={1920}
          height={300}
          src="/hero1.png"
          alt="hero-1"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          priority
        />
      </div>
      <div className="container">
        <div className={styles.info}>
          {pathname === url1 ? (
            <h1 className={styles.title}>{title1}</h1>
          ) : (
            <h1 className={styles.title}>{title2}</h1>
          )}
          <div className={styles.descr}>
            <Link href="/">Bosh sahifa</Link>
            <span> | </span>
            <Link href={`/${url1}`}>{title1}</Link>
            {title2 ? (
              <>
                <span> | </span> <Link href={`/${url2}`}>{title2}</Link>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
