
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({
  variant = "light",
  className = "",
}: LogoProps) {
  return (
    <div
      className={`flex h-[70px] w-[150px] items-center sm:h-[80px] sm:w-[170px] md:h-[90px] md:w-[190px] lg:h-[100px] lg:w-[210px] ${className}`}
    >
      <Image
        src="/images/logo.png"
        alt="Driftwood Beach Resort"
        width={210}
        height={100}
        priority
        sizes="(max-width: 640px) 150px, (max-width: 768px) 170px, (max-width: 1024px) 190px, 210px"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

