"use client";

import React, { ReactNode } from "react";
import { cn } from "../utils/cn";

interface FullWidthSectionProps {
  backgroundImage: string;
  children: ReactNode;
  className?: string;
}

export const FullWidthSection: React.FC<FullWidthSectionProps> = ({
  backgroundImage,
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={cn(
        "relative w-full min-h-[1000px] flex items-center justify-center overflow-hidden", // Ajuste a altura aqui
        className
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      {...props}
    >
      <div className="relative z-10 text-white p-8">{children}</div>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay */}
    </section>
  );
};
