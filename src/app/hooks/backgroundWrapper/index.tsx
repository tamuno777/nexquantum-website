"use client";

import { usePathname } from "next/navigation";
import bg from "../../../../public/images/bg.png";

const backgroundImages: Record<string, string> = {
  "/": bg.src,
  "/aboutUs": bg.src,
  "/contact": bg.src,
  "/services": bg.src,
};

const backgroundHeights: Record<string, string> = {
  "/": "100vh", // Full-screen height
  "/aboutUs": "70vh", // 75% of the screen height
  "/contact": "70vh", // 50% of the screen height
  "/services": "70vh", // Full-screen height
};

export function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentBackground = backgroundImages[pathname] || null;
  const currentHeight = backgroundHeights[pathname] || "100vh"; // Default height

  return (
    <div
      className={`relative bg-cover bg-center ${
        currentBackground ? "" : "bg-customblue"
      }`}
      style={{
        backgroundImage: currentBackground
          ? `url(${currentBackground})`
          : undefined,
        minHeight: currentHeight, // Dynamic height
      }}
    >
      {children}
    </div>
  );
}
