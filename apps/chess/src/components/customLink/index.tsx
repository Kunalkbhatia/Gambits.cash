import Image from "next/image";
import Link from "next/link";

export interface CustomLinkProps {
  text: string;
  url: string;
  switch?: boolean;
  to: string;
}

export default function CustomLink({
  text,
  url,
  to,
  switch: isSwitch = false,
}: CustomLinkProps) {
  return (
    <Link
      href={to}
      className={`flex w-full items-center justify-center gap-4 rounded-md p-5 font-lilita text-5xl ${
        isSwitch ? "bg-blue-400" : "bg-white text-blue-400"
      }`}
    >
      <Image src={url} alt={text} width={50} height={50} />
      <div>{text}</div>
    </Link>
  );
}
