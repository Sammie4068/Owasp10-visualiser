import Image from "next/image";
import Link from "next/link";

export default function Logo() {
 return (
  <>
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/icon.png"
            width={150}
            height={150}
            alt="logo"
            priority={true}
          />
        </Link>
      </>
 )   
};