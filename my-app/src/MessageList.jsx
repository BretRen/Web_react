import React from "react";
import { Box, List, ListItem } from "@mui/material";

const MessageList = ({ messages, username }) => {
  return (
    <Box
      sx={{
        flex: 1,
        overflowY: "auto",
        border: "1px solid #ccc",
        borderRadius: "4px",
        p: 1,
        mb: 2,
      }}
    >
      <List>
        {messages.map((msg, index) => {
          const isOwnMessage = msg.endsWith(`[${username}]`);
          return (
            <ListItem
              key={index}
              sx={{
                justifyContent: isOwnMessage ? "flex-end" : "flex-start",
              }}
            >
              <Box
                sx={{
                  maxWidth: "70%",
                  padding: "8px",
                  borderRadius: "8px",
                  backgroundColor: isOwnMessage ? "#d1e7ff" : "#e0e0e0",
                  textAlign: isOwnMessage ? "right" : "left",
                }}
              >
                {msg}
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default MessageList;
