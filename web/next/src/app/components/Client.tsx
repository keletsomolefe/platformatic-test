'use client';

import { useEffect } from "react";

export function Client() {
    useEffect(() => {
        async function getNode() {
            const { content } = await (await fetch("http://localhost:3042/node", { cache: 'no-store' })).json();
            console.log(content);
        }
        getNode();

    }, []);

    return (
        <div>
            <h1>Client</h1>
        </div>
    );
}