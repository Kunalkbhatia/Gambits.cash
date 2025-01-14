"use client";
import { ImageBaseURL, Pieces } from "@/utils";
import React, { useMemo } from "react";
import { Chessboard } from "react-chessboard";
import { CustomPieces } from "react-chessboard/dist/chessboard/types";

const ChessBoard = () => {
  const customPieces = useMemo(() => {
    const pieceComponents: CustomPieces = {};
    Pieces.forEach((piece) => {
      pieceComponents[piece] = ({ squareWidth }) => (
        <div
          style={{
            width: squareWidth,
            height: squareWidth,
            backgroundImage: `url(${ImageBaseURL}/${piece.toLowerCase()}.png)`,
            backgroundSize: "100%",
            opacity: "1",
          }}
        />
      );
    });
    return pieceComponents;
  }, []);
  return (
    <Chessboard
      id="BasicBoard"
      customBoardStyle={{
        opacity: "0.95",
      }}
      customDarkSquareStyle={{
        backgroundColor: "#282f3f",
      }}
      customLightSquareStyle={{
        backgroundColor: "#667188",
      }}
      customPieces={customPieces}
      arePiecesDraggable={false}
    />
  );
};

export default ChessBoard;
