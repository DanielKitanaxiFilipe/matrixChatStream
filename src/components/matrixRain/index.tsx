import React, { useEffect } from "react";

interface MatrixRainProps {
  text: string;
}

const MatrixRain: React.FC<MatrixRainProps> = ({ text }) => {
  useEffect(() => {
    const canvas = document.getElementById("Matrix") as HTMLCanvasElement;
    const context = canvas.getContext("2d");

    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const rainDrops: number[] = [];

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      context.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = "#0F0";
      context.font = fontSize + "px monospace";

      for (let i = 0; i < rainDrops.length; i++) {
        const charIndex = Math.floor(Math.random() * text.length);
        const rainChar = text.charAt(charIndex);
        context.fillText(rainChar, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const intervalId = setInterval(draw, 40);

    return () => {
      clearInterval(intervalId);
    };
  }, [text]);

  return <canvas id="Matrix"></canvas>;
};

export default MatrixRain;
