import { useEffect, useState } from "react";


export default function TypeWriterLoop(){
    const [lineIndex,setLineIndex] = useState(0);
    const lines = ['Welcome to my portfolio!','Check out my work'];
    useEffect(() =>{
        const interval =  setInterval(() => {
            setLineIndex((prev) => (prev + 1) % lines.length);
        }, 4000);
        return () => clearInterval(interval);
    },[]);
    
    return (
        <div className="typewriter-container mt-3">
            <div className="typewriter">
                <p key={lineIndex}>{lines[lineIndex]}</p>
                
            </div>
           

        </div>
    );
}