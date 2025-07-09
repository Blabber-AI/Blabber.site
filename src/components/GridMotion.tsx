import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './GridMotion.css';

interface GridMotionProps {
  items?: (string | React.ReactNode)[];
  gradientColor?: string;
  rowCount?: number;
}

const GridMotion: React.FC<GridMotionProps> = ({ items = [], gradientColor = 'white', rowCount = 4 }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const totalItems = 28;
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    rowRefs.current.forEach((row, index) => {
      if (row) {
        const direction = index % 2 === 0 ? 1 : -1;
        const duration = 20 + Math.random() * 10; // 20-30 seconds duration

        gsap.set(row, { x: direction * -500 }); // Start off-screen

        gsap.to(row, {
          x: direction * 500,
          duration: duration,
          ease: 'none',
          repeat: -1,
        });
      }
    });

  }, []);

  return (
    <div className="noscroll loading" ref={gridRef}>
      <section
        className="intro"
      >
        <div className="gridMotion-container">
          {[...Array(rowCount)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="row"
              ref={(el: HTMLDivElement | null) => {
                if (el) {
                  rowRefs.current[rowIndex] = el;
                }
              }}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                const isImagePath = typeof content === 'string' && (content.startsWith('http') || content.startsWith('/') || content.startsWith('src/'));
                
                let itemContent;
                if (isImagePath) {
                  itemContent = (
                    <div
                      className="row__item-img"
                      style={{
                        backgroundImage: `url(${content})`,
                      }}
                    ></div>
                  );
                } else {
                  itemContent = <div className="row__item-content">{content}</div>;
                }

                return (
                  <div key={itemIndex} className="row__item">
                    <div className="row__item-inner">
                      {itemContent}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div 
            className="absolute inset-0 z-10"
            style={{
                background: `radial-gradient(circle, transparent 40%, ${gradientColor} 100%)`,
            }}
        ></div>
        <div className="fullview"></div>
      </section>
    </div>
  );
};

export default GridMotion; 
