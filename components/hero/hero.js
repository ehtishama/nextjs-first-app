import React from "react";
import styles from "./hero.module.css";
export default function Hero() {
    return (
        <div className={styles.hero_container}>
            <h2 className={styles.hero_heading}>
                Next.js - Crypto Tracker
            </h2>
            <p className={styles.hero_text}>
                A simple Next.Js app that consumes `coingecko` public api,
                and performs server side rendering.
            </p>
        </div>
    );
}
