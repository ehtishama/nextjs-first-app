import React from "react";
import CoinCard from "../../components/coin-card/coin-card";
import Layout from "../../components/layouts/main";

export default function Coin({ coin }) {
    return (
        <Layout title={`${coin.name} - Crypto Tracker`}>
            <div className="center">
                <CoinCard {...coin} />
            </div>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.query;
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;

    const resp = await fetch(url);
    const coin = await resp.json();

    return {
        props: {
            coin,
        },
    };
}
