import React, { useContext, useEffect, useState } from "react";

import { io } from "socket.io-client";
import { Socket } from "socket.io-client";

const SocketContext = React.createContext<number | undefined>(undefined);

export function useSocket() {
  const currentSocket = useContext(SocketContext);
  if (!currentSocket) {
    throw new Error("no socket");
  }
  return currentSocket;
}

export function SocketProvider({ children }: any) {
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const s = io("localhost:3000");
    setSocket(s)

    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    console.log(socket) 
  },[socket])

  return (
    // <SocketContenlt.Provider value={socket}>{children}</SocketContext.Provider>
    <div>hi</div>
  );
}
