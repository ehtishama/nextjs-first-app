import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./coin.module.css";

export default function Coin({
    id,
    name,
    image,
    current_price,
    symbol,
    total_volume,
    market_cap,
    priceChange
}) {
    return (
        <Link href={`/coins/${id}`}>
            <a>
                <div className={styles.row}>
                    <Image src={image} alt={name} width={32} height={32} />
                    <p>{name}</p>
                    <p>{symbol.toUpperCase()}</p>
                    <p>${current_price.toLocaleString()}</p>
                    <p>${total_volume.toLocaleString()}</p>
                    <p>MktCap ${market_cap.toLocaleString()}</p>
                </div>
            </a>
        </Link>
    );
}
