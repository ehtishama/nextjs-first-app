import React from "react";
import styles from "./search-bar.module.css";

export default function SearchBar({ ...rest }) {
    return (
        <div className={styles.coin_search_container}>
            <div className={styles.coin_search}>
                <input className={styles.coin_input} {...rest} />
            </div>
        </div>
    );
}
