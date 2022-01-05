import { useEffect, useRef } from 'react';
import styles from './App.module.css';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const canvasContainer = canvasContainerRef.current as HTMLDivElement;
    canvas.width = canvasContainer.clientWidth;
    canvas.height = canvasContainer.clientHeight;
    canvas.style.width = canvasContainer.clientWidth + 'px';
    canvas.style.height = canvasContainer.clientHeight + 'px';

    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    context.fillRect(200, 50, 200, 50);

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