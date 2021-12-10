import React from "react";
import Head from "next/head";

export default function Layout({ title = "Next JS - Crypto Tracker", children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <div className="container">
                {children}
            </div>
        </>
    );
}
