import Image from "next/image";
import Link from "next/link";

export interface CustomLinkPlayProps {
  title: string;
  image: string;
  description: string;
  to: string;
}
export default function CustomLinkPlay({
  title,
  image,
  description,
  to,
}: CustomLinkPlayProps) {
  return (
    <Link
      href={to}
      className="flex w-full gap-5 rounded-lg bg-black bg-opacity-40 p-5"
    >
      <Image src={image} alt={title} width={60} height={60} />
      <div>
        <div className="text-3xl font-bold">{title}</div>
        <div className="text-neutral-400">{description}</div>
      </div>
    </Link>
  );
}
