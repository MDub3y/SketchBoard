"use client";

import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4ZmE2MTg1NC1iMzg3LTRkOGQtYjA1Ni1lZDg5ZmZlNjA2ZGEiLCJpYXQiOjE3Mzg1ODM2NzV9.RcqkZtGw536EgkLKnzgrubDVWxlBnfbb8p9qgkzaH6U`);
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