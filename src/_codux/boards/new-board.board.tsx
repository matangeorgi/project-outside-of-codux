import "./new-board.board.css";
import React from "react";
import { createBoard } from "@wixc3/react-board";

export default createBoard({
  name: "New Board",
  Board: () => <div className="kjh"></div>,
  isSnippet: true,
});
