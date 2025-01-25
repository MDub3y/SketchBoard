"use client";

import { WS_URL } from "@/config";
import { useEffect, useState } from "react";
import { Canvas } from "./Canvas";

export function RoomCanvas({roomId}: {roomId: string}){
    
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMmFlMmIzMi00MDBlLTRkNTEtYjU2MC00MTdlMDE3NmI1NGYiLCJpYXQiOjE3Mzc4MTAxOTh9.gMjgo1vXojqyxQnFJEMlCdO9mOEHwNQQrcbRxUaqmvI
`);

        ws.onopen = () => {
            setSocket(ws);
            ws.send(JSON.stringify({
                type: "join_room",
                roomId
            }))
        }
    }, []);

    
    if(!socket){
        return <div>
            Connecting to socket...
        </div>
    }


    return <div>
        <Canvas roomId={roomId} socket={socket} />
    </div>
}