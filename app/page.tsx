"use client"
import Image from "next/image";
import { useState } from "react";
import Project from "./components/Project";
import Modal from "./components/Modal";
import { useSpring } from "framer-motion";

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [cursorPosition, setCursorPosition]=useState({x:0, y:0})
  const mouse={
      x:useSpring(cursorPosition.x),
      y:useSpring(cursorPosition.y)

  }

  const projects = [
    {
      title: "C2 Montreal",
      src: "/c2montreal.png",
      color: "#000000",
    },
    {
      title: "Office Studio",
      src: "/officestudio.png",
      color: "#8C8C8C",
    },
    {
      title: "Locomotive",
      src: "/locomotive.png",
      color: "#EFE8D3",
    },
    {
      title: "Silencio",
      src: "/silencio.png",
      color: "#706D63",
    },
  ];
  const handleMousemove=(e:React.MouseEvent<HTMLDivElement>)=>{
      setCursorPosition({x:e.clientX, y:e.clientY})
      console.log(e.clientX, e.clientY);
}

  return (
    <div className="main">
      <div className="body" onMouseMove={handleMousemove}>
        {projects.map((project, index) => (
          <Project
            key={index}
            index={index}
            title={project.title}
            src={project.src}
            color={project.color}
            setModal={setModal}
          />
        ))}
      </div>
      <Modal modal={modal} projects={projects} setModal={setModal} cursorPosition={cursorPosition} mouse={mouse} />
    </div>
  );
}
