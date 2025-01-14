import ChessBoard from "@/components/board";
import CustomLinkPlay, {
  CustomLinkPlayProps,
} from "@/components/customLinkPlay";
import { AssetsURL } from "@/utils";
import Image from "next/image";

const CustomLinkPlayData: CustomLinkPlayProps[] = [
  {
    title: "Play Online",
    description: "Play vs a person of similar skill",
    image: AssetsURL.biltz,
    to: "/play/online",
  },
  {
    title: "Play Bots",
    description: "Challenge a bot for practice",
    image: AssetsURL.bot,
    to: "/play/bots",
  },
  {
    title: "Play a Friend",
    description: "Invite a friend to a game",
    image: AssetsURL.handshake,
    to: "/play/friend",
  },
  {
    title: "Tournaments",
    description: "Join an arena where anyone can win",
    image: AssetsURL.tournament,
    to: "/play/tournament",
  },
];

export default function Play() {
  return (
    <div className="relative mx-auto grid h-screen grid-cols-2 gap-16 p-10">
      {/* Board */}
      <div>
        <ChessBoard />
      </div>
      {/* About */}
      <div className="flex flex-col items-center gap-10 rounded-md bg-black bg-opacity-20 p-5">
        <div className="flex items-center gap-2">
          <Image src={AssetsURL.play} alt="play" width={50} height={50} />
          <div className="font-lilita text-5xl">Play Chess</div>
        </div>
        <div className="flex flex-col gap-5">
          {CustomLinkPlayData.map((link) => {
            return (
              <CustomLinkPlay
                key={link.title}
                title={link.title}
                description={link.description}
                to={link.to}
                image={link.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
