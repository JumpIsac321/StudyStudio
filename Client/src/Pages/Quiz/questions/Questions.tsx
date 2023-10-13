// import { useEffect, useState } from "react";
import { SocketProvider, useSocket } from "../../../Contexts/SocketProvider";

function Questions() {
  // const socket = useSocket();

  // const [isWinner, setIsWinner] = useState(false);

  // if (isWinner) {
  //   return <div>you lost</div>;
  // }


  // socket.on("someone-won", () => {
  //   setIsWinner(true);
  // });

  return (
    <SocketProvider>
      <main className="area">
        <div className="inputbox">
          <p>Whats the answer</p>
          <button type="submit" /*onClick={() => socket.emit("win")}*/>
            answer
          </button>
          <button>this is a test</button>
        </div>
      </main>
    </SocketProvider>
  );
}

export default Questions;
