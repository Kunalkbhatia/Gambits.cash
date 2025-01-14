import { Piece } from "react-chessboard/dist/chessboard/types";

export const Pieces: Piece[] = [
  "wP",
  "wN",
  "wB",
  "wR",
  "wQ",
  "wK",
  "bP",
  "bN",
  "bB",
  "bR",
  "bQ",
  "bK",
];
export const ImageBaseURL =
  "https://images.chesscomfiles.com/chess-themes/pieces/glass/150";

export const AssetsURL = {
  play: "https://www.chess.com/bundles/web/images/color-icons/playwhite.cea685ba.svg",
  watch:
    "https://www.chess.com/bundles/web/images/color-icons/watch.d42fed26.svg",
  news: "https://www.chess.com/bundles/web/images/color-icons/newspaper.6e020a3f.svg",
  social:
    "https://www.chess.com/bundles/web/images/color-icons/friends.d2e3c382.svg",
  bot: "https://www.chess.com/bundles/web/images/color-icons/cute-bot.32735490.svg",
  biltz: "https://www.chess.com/bundles/web/images/color-icons/blitz.svg",
  handshake:
    "https://www.chess.com/bundles/web/images/color-icons/handshake.svg",
  tournament:
    "https://www.chess.com/bundles/web/images/color-icons/tournaments.svg",
} as const;
