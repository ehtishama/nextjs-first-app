import Head from "next/head";
import { useState } from "react";
import CoinsList from "../components/coins-list/coins-list";
import Layout from "../components/layouts/main";
import SearchBar from "../components/search-bar/search-bar";
import styles from "../styles/Home.module.css";
import Hero from "../components/hero/hero";

export default function Home({ coins }) {
    const [query, setQuery] = useState("");
    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(query)
    );

    const handleQueryChange = (e) => setQuery(e.target.value);

    return (
        <Layout title="Homepage - Crypto Tracker">
            <Hero />
            <SearchBar
                type="text"
                placeholder="Search"
                value={query}
                onChange={handleQueryChange}
            />
            <CoinsList coins={filteredCoins} />
        </Layout>
    );
}

export async function getServerSideProps() {
    const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

    const resp = await fetch(url);
    const coins = await resp.json();

    return {
        props: {
            coins,
        },
    };
}
