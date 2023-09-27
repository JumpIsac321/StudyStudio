import { useEffect } from "react";

import { useSocket } from "../../../Contexts/SocketProvider";

function QuestionsArea() {
  //   const [isWinner, setIsWinner] = useState(false);

  const socket = useSocket();

  console.log(socket);

  useEffect(() => {
    console.log(`effect ${socket}`);
  }, [socket]);

  //   socket.on("someone-won", () => {
  //     setIsWinner(true);
  //   });

  //   if (isWinner) {
  //     return <div>you lost</div>;
  //   }

  return (
    <main className="area">
      <div className="inputbox">
        <p>Whats the answer</p>
        <button type="submit" onClick={() => socket.emit("win")}>
          answer
        </button>
        <button>this is a test</button>
      </div>
    </main>
  );
}

export default QuestionsArea;
