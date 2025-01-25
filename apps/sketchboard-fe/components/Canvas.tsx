import { initDraw } from "@/draw";
import { useEffect, useRef } from "react";


export function Canvas({roomId, socket}: {
    roomId: string,
    socket: WebSocket
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if(canvasRef.current){
            const canvas = canvasRef.current;

            initDraw(canvas, roomId, socket);
        }
        

    }, [canvasRef]);

    return <div>
        <canvas ref={canvasRef} width={3000} height={2000}></canvas>
        <div className="absolute bottom-0 right-0">
            <button className="bg-white m-2 text-black rounded-full p-4">Circle</button>
            <button className="bg-white text-black p-4">Rectangle</button>
        </div>
    </div>
}