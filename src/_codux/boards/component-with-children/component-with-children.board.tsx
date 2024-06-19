import { createBoard } from "@wixc3/react-board";
import { ComponentWithChildren } from "../../../components/component-with-children/component-with-children";

export default createBoard({
  name: "ComponentWithChildren",
  Board: () => <ComponentWithChildren />,
  isSnippet: true,
  environmentProps: {
    canvasWidth: 401,
  },
});
