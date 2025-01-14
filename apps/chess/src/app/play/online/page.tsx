"use client";

import { AssetsURL } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { Piece, Square } from "react-chessboard/dist/chessboard/types";

export default function Online() {
  const [game] = useState(new Chess());

  const onDrop = (sourceSquare: Square, targetSquare: Square, piece: Piece) => {
    console.log("sourceSqurae", sourceSquare);
    console.log("targetSqure", targetSquare);
    console.log("piece", piece);

    return true;
  };
  return (
    <div className="grid h-screen grid-cols-2 p-5">
      <div className="space-y-2">
        <div className="flex gap-2">
          <Image
            src={AssetsURL.social}
            alt="opponent"
            width={50}
            height={50}
            className="rounded-md bg-neutral-400"
          />
          <div>Opponent</div>
        </div>
        <div className="max-w-xl">
          <Chessboard position={game.fen()} onPieceDrop={onDrop} />
        </div>
        <div className="flex gap-2">
          <Image
            src={AssetsURL.social}
            alt="opponent"
            width={50}
            height={50}
            className="rounded-md bg-neutral-400"
          />
          <div>Kunalkbhatia</div>
        </div>
      </div>
      <div className="max-w-sm bg-black bg-opacity-50"></div>
    </div>
  );
}
