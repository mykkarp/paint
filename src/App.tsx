import { useEffect, useRef } from 'react';
import styles from './App.module.css';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  const startDrawLine = (context: CanvasRenderingContext2D, startX: number, startY: number, color: string = 'black') => {
    context.beginPath();
    context.strokeStyle = color;
    context.moveTo(startX, startY);
    return {
      nextDrawLine: function (nextX: number, nextY: number) {
        context.lineTo(nextX, nextY);
        return this;
      },
      endDrawLine: function (endX: number, endY: number) {
        context.lineTo(endX, endY);
        context.closePath();
        context.stroke();
      }
    }
  }
  const drawRectangle = () => {

  }
  const drawBezierCurve = () => {

  }
  const drawFilledRectangle = () => {

  }

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const canvasContainer = canvasContainerRef.current as HTMLDivElement;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;

    canvas.width = canvasContainer.clientWidth;
    canvas.height = canvasContainer.clientHeight;
    canvas.style.width = canvasContainer.clientWidth + 'px';
    canvas.style.height = canvasContainer.clientHeight + 'px';

    // context.fillStyle = 'tomato';
    // context.lineWidth = 5;
    // context.fillRect(200, 50, 200, 50);
    // context.strokeStyle = 'black';
    // context.rect(300, 300, 50, 50);
    // context.stroke();

    startDrawLine(context, 0, 0)
      .nextDrawLine(50, 100)
      .nextDrawLine(100, 100)
      .nextDrawLine(50, 150)
      .endDrawLine(0, 200);

    startDrawLine(context, 200, 500)
      .endDrawLine(500, 500);
  }, []);

  return (
    <div className={styles.wrapper}>
      <header>header</header>
      <main>
        <div
          ref={canvasContainerRef}
          className={styles.canvasContainer}
        >
          <canvas
            ref={canvasRef}
          />
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;