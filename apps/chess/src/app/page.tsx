import ChessBoard from "@/components/board";
import CustomLink from "@/components/customLink";
import { AssetsURL } from "@/utils";

export default function Home() {
  return (
    <div>
      <div className="text-wrap p-1 text-3xl"></div>
      <div className="relative mx-auto grid h-screen grid-cols-2 p-10">
        {/* Board */}
        <div>
          <ChessBoard />
        </div>
        {/* About */}
        <div className="flex flex-col items-center justify-around p-5">
          <div className="text-center font-lilita text-4xl">
            Bet and play chess online on the ultimate platform for strategy and
            stakes!
          </div>
          <div className="flex flex-col gap-5">
            <CustomLink
              to="/play"
              text="Play Online"
              url={AssetsURL.play}
              switch={true}
            />
            <CustomLink to="/play" text="Play Bots" url={AssetsURL.bot} />
          </div>
        </div>
      </div>
    </div>
  );
}
