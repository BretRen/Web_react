import React, { useState, useEffect, useRef } from "react";
import { Box, Paper, Typography } from "@mui/material";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import UsernameDialog from "./UsernameDialog";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [usernameDialogOpen, setUsernameDialogOpen] = useState(true);
  const ws = useRef(null);

  useEffect(() => {
    // 动态构造 WebSocket URL
    const wsProtocol = window.location.protocol === "https:" ? "wss" : "ws";
    const wsHost = window.location.hostname;
    const wsPort = "3000"; // WebSocket 服务运行的端口
    const wsUrl = `${wsProtocol}://${wsHost}:${wsPort}`;

    ws.current = new WebSocket(wsUrl);

    ws.current.onopen = () => {
      console.log("已连接到 WebSocket 服务端");
    };

    ws.current.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    ws.current.onclose = () => {
      console.log("WebSocket 已断开");
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const sendMessage = (message) => {
    if (message.trim() && ws.current.readyState === WebSocket.OPEN) {
      const formattedMessage = `${message}:[${username}]`;
      ws.current.send(formattedMessage);
      setMessages((prev) => [...prev, formattedMessage]);
    }
  };

  const handleSetUsername = (name) => {
    setUsername(name);
    setUsernameDialogOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <UsernameDialog
        open={usernameDialogOpen}
        onConfirm={handleSetUsername}
      />

      <Paper
        elevation={3}
        sx={{
          width: "400px",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          p: 2,
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
          聊天室
        </Typography>
        <MessageList messages={messages} username={username} />
        <MessageInput onSend={sendMessage} />
      </Paper>
    </Box>
  );
};

export default ChatApp;
