import React from "react";
import Coin from "./coin-item";
import styles from "./coin.module.css"

export default function CoinsList({ coins }) {
    return (
        <div className={styles.coins_list}>
            {coins.map((coin) => (
                <Coin {...coin} key={coin.id} />
            ))}
        </div>
    );
}
