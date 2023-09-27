import { SocketProvider } from "../../../Contexts/SocketProvider";

import QuestionsArea from "./QuestionsArea";

function Questions() {
  return (
    <SocketProvider>
      <QuestionsArea />
    </SocketProvider>
  );
}

export default Questions;
