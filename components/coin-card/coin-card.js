import Image from "next/image";
import React from "react";
import styles from "./coin-card.module.css";

export default function CoinCard({
    image: { small },
    name,
    market_data: {
        current_price: { usd },
    },
}) {
    return (
        <div className={styles.coin_card}>
            <div className={styles.coin_image}>
                <img src={small} alt={name} />
            </div>

            <div className="row">
                <div className={styles.coin_name}>{name}</div>
                <div className={styles.coin_price}>${usd}</div>
            </div>
        </div>
    );
}
