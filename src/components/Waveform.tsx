"use client";

import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
  position: absolute;
  top: -40px;
  left: -40px;
  width: 400px;
  height: 400px;
  z-index: 0;

  @media (max-width: 480px) {
    display: none; /* Hide waveform on smaller screens */
  }
`;

const useSimulatedOutwardWaveform = (canvasRef: React.RefObject<HTMLCanvasElement | null>) => {
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const resizeCanvas = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = canvasRef.current.offsetWidth;
      canvasRef.current.height = canvasRef.current.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const POLAROID_SIZE = 320;
    const CORNER_SAFE_ZONE = 50;

    const drawOutwardWaveform = () => {
      if (!canvasRef.current) return;
      context.clearRect(0, 0, WIDTH, HEIGHT);
      context.strokeStyle = "#000000";
      context.lineWidth = 3;

      const step = 10;

      for (let i = 0; i < WIDTH / step; i++) {
        const barHeight = Math.random() * 20 + 5;
        if (i * step < CORNER_SAFE_ZONE || i * step > WIDTH - CORNER_SAFE_ZONE) continue;

        context.beginPath();
        context.moveTo(i * step, HEIGHT / 2 - POLAROID_SIZE / 2);
        context.lineTo(i * step, HEIGHT / 2 - POLAROID_SIZE / 2 - barHeight);
        context.stroke();

        context.beginPath();
        context.moveTo(i * step, HEIGHT / 2 + POLAROID_SIZE / 2);
        context.lineTo(i * step, HEIGHT / 2 + POLAROID_SIZE / 2 + barHeight);
        context.stroke();
      }

      for (let j = 0; j < HEIGHT / step; j++) {
        const barWidth = Math.random() * 20 + 5;
        if (j * step < CORNER_SAFE_ZONE || j * step > HEIGHT - CORNER_SAFE_ZONE) continue;

        context.beginPath();
        context.moveTo(WIDTH / 2 - POLAROID_SIZE / 2, j * step);
        context.lineTo(WIDTH / 2 - POLAROID_SIZE / 2 - barWidth, j * step);
        context.stroke();

        context.beginPath();
        context.moveTo(WIDTH / 2 + POLAROID_SIZE / 2, j * step);
        context.lineTo(WIDTH / 2 + POLAROID_SIZE / 2 + barWidth, j * step);
        context.stroke();
      }
    };

    const animate = () => {
      setTimeout(() => {
        drawOutwardWaveform();
        requestAnimationFrame(animate);
      }, 300);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [canvasRef]);
};

const Waveform: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useSimulatedOutwardWaveform(canvasRef);

  return <Canvas ref={canvasRef} />;
};

export default Waveform;