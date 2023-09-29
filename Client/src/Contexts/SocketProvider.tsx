import React, { useContext, useEffect, useState } from "react";

import { io } from "socket.io-client";
import { Socket } from "socket.io-client";

const SocketContext = React.createContext<Socket | undefined>(undefined);

export function useSocket() {
  const currentSocket = useContext(SocketContext);
  if (!currentSocket) {
    throw new Error("no current socket");
  }
  return currentSocket;
}

export function SocketProvider({ children }: any) {
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const newSocket: Socket = io();

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
