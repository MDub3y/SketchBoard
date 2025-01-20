"use client";

import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMzRiMzY4NC03YWQ2LTRjNTktYWZjZC00MmUwMjY5ZTZjNTkiLCJpYXQiOjE3MzcxMjMyNjh9.NQsqEdXaCeFokbymffTSNYUh5J_rKtfXbSU_f8MsihA`);
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
        }
    }, [])

    return {
        socket,
        loading
    }
}