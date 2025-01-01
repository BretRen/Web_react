import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from "@mui/material";

const UsernameDialog = ({ open, onConfirm }) => {
  const [name, setName] = useState("");

  const handleConfirm = () => {
    if (name.trim()) {
      onConfirm(name);
    }
  };

  return (
    <Dialog open={open}>
      <DialogTitle>设置用户名</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          variant="outlined"
          placeholder="请输入用户名"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirm} variant="contained" color="primary">
          确认
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UsernameDialog;
