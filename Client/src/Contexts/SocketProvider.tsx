import React, { useContext, useEffect, useState } from "react";

import { io } from "socket.io-client";
import { Socket } from "socket.io-client/debug";

const SocketContext = React.createContext<Socket | null>(null);

export function useSocket() {
  const currentSocket = useContext(SocketContext);
  if (!currentSocket) {
    throw new Error("sus");
  }
  return currentSocket;
}

export function SocketProvider({ children }: any) {
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const newSocket = io("http://localhost:4000");

    // console.log("a");

    setSocket(newSocket);

    // return () => newSocket.close();
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
