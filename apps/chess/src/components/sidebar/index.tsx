import Image from "next/image";
import kingLogo from "../../../public/chess-svgrepo-com.svg";
import Link from "next/link";
import { AssetsURL } from "@/utils";
export const Navlinks = [
  {
    link: "Play",
    to: "/play",
    url: AssetsURL.play,
  },
  {
    link: "Watch",
    to: "/watch",
    url: AssetsURL.watch,
  },
  {
    link: "News",
    to: "/news",
    url: AssetsURL.news,
  },
  {
    link: "Social",
    to: "/social",
    url: AssetsURL.social,
  },
];

export default function SideBar() {
  return (
    <div className="h-screen w-[180px] bg-black bg-opacity-20">
      <div className="flex flex-col gap-8">
        {/* logo */}
        <div className="mt-2 flex items-baseline">
          <Image src={kingLogo} alt="logo" width={40} height={40} />
          <div className="font-lilita text-5xl font-bold">
            King<span className="text-xl">.bet</span>
          </div>
        </div>
        {/* navlinks */}
        <div className="flex flex-col gap-5 p-2">
          {Navlinks.map((link) => {
            return (
              <div key={link.link} className="flex items-center gap-2">
                <Image src={link.url} alt={link.link} width={30} height={30} />
                <Link href={link.to} className="font-lilita text-xl">
                  {link.link}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-2 p-2 font-lilita text-xl">
          <Link
            href="/signup"
            className="rounded-md bg-blue-400 p-2 text-center"
          >
            Sign Up
          </Link>
          <Link
            href="/signin"
            className="rounded-md bg-white p-2 text-center text-blue-400"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
