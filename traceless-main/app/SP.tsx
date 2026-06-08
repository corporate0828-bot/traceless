"use client";
import { nanoid } from "nanoid";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { io } from "socket.io-client";
import type { Socket } from "socket.io-client";

const SocketContext = createContext<any>({});

export const useSocket = () => {
  const socket: {
    socket: Socket;
    userId: any;
    SocketId: any;
    setSocketId: any;
    peerState: any;
    setpeerState: any;
  } = useContext(SocketContext);
  return socket;
};

export const SP = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [peerState, setpeerState] = useState<any>();
  const [SocketId, setSocketId] = useState<any>(null);
  const userId = useMemo(() => {
    return nanoid(10);
  }, []);

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SOCKET_SERVER_URL || "http://localhost:8000";
    const s = io(String(url), {
      transports: ["websocket", "polling"],
      reconnectionAttempts: 5,
    });

    s.on("connect_error", (err: any) => {
      console.error("Socket connect_error:", err);
    });

    setSocket(s);
    setSocketId(s);

    return () => {
      s.off("connect_error");
      s.disconnect();
      setSocket(null);
      setSocketId(null);
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{ socket, userId, SocketId, setSocketId, peerState, setpeerState }}
    >
      {children}
    </SocketContext.Provider>
  );
};
