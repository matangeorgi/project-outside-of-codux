import { createBoard } from "@wixc3/react-board";
import { MediaQueries } from "../../../components/media-queries/media-queries";

export default createBoard({
  name: "MediaQueries",
  Board: () => <MediaQueries />,
  isSnippet: true,
  environmentProps: {
    windowWidth: 601,
    windowHeight: 601,
    canvasWidth: 651,
  },
});
