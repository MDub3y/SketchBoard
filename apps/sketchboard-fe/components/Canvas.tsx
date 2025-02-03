/* import { initDraw } from "@/draw"; */
import { useEffect, useRef, useState } from "react";
import { IconButton } from "./IconButton";
import { Circle, Pencil, RectangleHorizontalIcon } from 'lucide-react';
import { Game } from "@/draw/Game";

export type Tool = "circle" | "rect" | "pencil";


export function Canvas({roomId, socket}: {
    roomId: string,
    socket: WebSocket
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [game, setGame] = useState<Game>();
    const [selectedTool, setSelectedTool] = useState<Tool>("circle");

    useEffect(() => {
        game?.setTool(selectedTool);
    }, [selectedTool, game]);

    useEffect(() => {
        if(canvasRef.current){
            const g = new Game(canvasRef.current, roomId, socket);
            setGame(g);

            return () => {
                g.destroy();
            }
        }
        

    }, [canvasRef]);

    return <div style={{
        height: "100vh",
        overflow: "hidden"
    }}>
        <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}></canvas>
        <Topbar selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
    </div>
}

function Topbar({
    selectedTool, setSelectedTool
}: {
    selectedTool: Tool,
    setSelectedTool: (s: Tool) => void
}) {
    return <div style={{
        position: "fixed",
        top: 10,
        left: 10
    }}>
        <div className="m-2 flex gap-2">
            <IconButton 
                activated={selectedTool === "pencil"} 
                icon={<Pencil />} 
                onClick={() => {setSelectedTool("pencil")}} />
            <IconButton 
                activated={selectedTool === "rect"} 
                icon={<RectangleHorizontalIcon />} 
                onClick={() => {setSelectedTool("rect")}} />
            <IconButton 
                activated={selectedTool === "circle"} 
                icon={<Circle />} 
                onClick={() => {setSelectedTool("circle")}} />
        </div>
    </div>
}