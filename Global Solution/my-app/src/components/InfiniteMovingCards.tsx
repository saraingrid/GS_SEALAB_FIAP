"use client";

import { cn } from "../utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: {
    imagem: string | JSX.Element;
    name: string;
    product: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "15s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "30s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "70s");
      }
    }
  };

  return (

    <div
    ref={containerRef}
    className={cn(
      "scroller relative z-20 w-full overflow-hidden",
      className
    )}
  >
    <ul
      ref={scrollerRef}
      className={cn(
        "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
        start && "animate-scroll",
        pauseOnHover && "hover:[animation-play-state:paused]"
      )}
    >
      {items.map((item, idx) => (
        <li
          className="w-[350px] max-w-full relative rounded-2xl border flex-shrink-0 border-slate-300 px-8 py-6 md:w-[450px]"
          style={{
            background:
              "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
          }}
          key={`${item.name}-${idx}`}
        >
          <div className="flex flex-col gap-20 justify-start items-center">
            <div className="max-h-[40px] pb-20 object-cover">
              {item.imagem}
            </div>
            <div className="h-[40px] w-full">{item.name}</div>
            <div className="h-[40px] w-full">{item.product}</div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
};
