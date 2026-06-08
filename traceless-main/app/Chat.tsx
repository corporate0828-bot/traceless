import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";
import { useSocket } from "./SP";

const Chat = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState<any>("");
  const inputRef = useRef<any>();
  const btnRef = useRef<any>();
  const messagesEndRef = useRef<any>(null);
  const Socket = useSocket();

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMessages = [...messages, { text: newMessage, sender: "me" }];
      setMessages(newMessages);
      setNewMessage("");
      if (inputRef.current) {
        inputRef.current.style.height = "auto";
      }

      const peer = Socket.peerState;
      if (peer) {
        const messageData = {
          type: "messages",
          text: newMessage,
          sender: "other",
        };
        peer.send(JSON.stringify(messageData));
      }
    }
  };

  const handleInputChange = (e: any) => {
    setNewMessage(e.target.value);
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = Math.min(inputRef.current.scrollHeight, 120) + "px";
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const peer = Socket.peerState;

    if (peer) {
      peer.on("data", (data: any) => {
        const receivedMessage = JSON.parse(data);
        if (receivedMessage.text) {
          setMessages((prevMessages) => [...prevMessages, receivedMessage]);
        }
      });
    }
  }, [Socket.peerState]);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        inputRef.current.focus();
      } else if (e.key === "Enter") {
        btnRef.current.click();
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {Socket.peerState ? (
        <div className="w-full sm:max-w-[420px] z-10 px-3 sm:px-0 mx-auto">
          <div className="flex flex-col border rounded-lg sm:min-w-[420px] min-w-full min-h-[450px] max-h-[85vh] bg-background shadow-lg overflow-hidden mx-auto">
            <div className="flex-1 overflow-y-auto w-full p-3 space-y-2">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`break-words sm:max-w-xs max-w-[200px] text-sm rounded-2xl px-4 py-2 ${
                      message.sender === "me"
                        ? "bg-blue-500 text-white rounded-br-none"
                        : "bg-zinc-700 text-white rounded-bl-none"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t bg-background p-3 flex gap-2">
              <textarea
                value={newMessage}
                onChange={handleInputChange}
                ref={inputRef}
                placeholder="Type a message..."
                className="flex-1 resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-h-[120px] min-h-[44px]"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    btnRef.current?.click();
                  }
                }}
              />
              <Button
                onClick={handleSendMessage}
                ref={btnRef}
                className="h-auto px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all hover:scale-105 active:scale-95"
                disabled={!newMessage.trim()}
              >
                <SendHorizonal size={18} className="sm:mr-1" />
                <span className="hidden sm:inline text-xs">Send</span>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Chat;
