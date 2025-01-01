import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const MessageInput = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="输入消息"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSend}
        sx={{ flexShrink: 0 }}
      >
        发送
      </Button>
    </Box>
  );
};

export default MessageInput;
