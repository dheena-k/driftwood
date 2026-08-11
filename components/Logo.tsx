
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
    <Image
      src="/images/logo.png"
      alt="Driftwood Beach Resort"
      width={210}
      height={90}
      priority
      sizes="(max-width: 640px) 90px, (max-width: 768px) 105px, (max-width: 1024px) 120px, 135px"
      className={`h-auto max-h-12 w-auto object-contain sm:max-h-14 ${className}`}
    />
  );
}

