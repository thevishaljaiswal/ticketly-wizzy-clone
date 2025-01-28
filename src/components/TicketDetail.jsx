import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  IconButton,
} from "@mui/material";
import { AttachFile } from "@mui/icons-material";

export const TicketDetail = ({ ticket }) => {
  const [reply, setReply] = useState("");
  const [attachments, setAttachments] = useState([]);

  if (!ticket) {
    return (
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography color="textSecondary">
          Select a ticket to view details
        </Typography>
      </Box>
    );
  }

  const handleAttachmentChange = (e) => {
    if (e.target.files) {
      setAttachments(Array.from(e.target.files));
    }
  };

  const handleSubmitReply = () => {
    console.log("Submitting reply:", reply);
    console.log("Attachments:", attachments);
    setReply("");
    setAttachments([]);
  };

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h6">{ticket.subject}</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Category</InputLabel>
              <Select defaultValue={ticket.category} label="Category">
                <MenuItem value="support">Support</MenuItem>
                <MenuItem value="billing">Billing</MenuItem>
                <MenuItem value="feature">Feature Request</MenuItem>
                <MenuItem value="bug">Bug Report</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Status</InputLabel>
              <Select defaultValue={ticket.status} label="Status">
                <MenuItem value="open">Open</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="resolved">Resolved</MenuItem>
                <MenuItem value="closed">Closed</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src={ticket.customer.avatar}
            alt={ticket.customer.name}
            sx={{ mr: 1 }}
          />
          <Box>
            <Typography variant="subtitle2">{ticket.customer.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {ticket.customer.email}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
        <Typography variant="subtitle2" gutterBottom>
          Description
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          value={ticket.description || "No description provided"}
          InputProps={{ readOnly: true }}
        />
      </Box>

      <Box sx={{ flex: 1, overflow: "auto", p: 2 }}>
        <Typography variant="subtitle2" gutterBottom>
          Comments
        </Typography>
        {ticket.messages.map((message) => (
          <Box
            key={message.id}
            sx={{
              display: "flex",
              justifyContent: message.isCustomer ? "flex-start" : "flex-end",
              mb: 2,
            }}
          >
            <Paper
              sx={{
                maxWidth: "80%",
                p: 2,
                bgcolor: message.isCustomer ? "grey.100" : "primary.main",
                color: message.isCustomer ? "text.primary" : "white",
              }}
            >
              <Typography variant="subtitle2" gutterBottom>
                {message.from}
              </Typography>
              <Typography variant="body2">{message.content}</Typography>
              {message.attachments?.length > 0 && (
                <Box sx={{ mt: 1 }}>
                  {message.attachments.map((attachment) => (
                    <Typography
                      key={attachment.name}
                      variant="body2"
                      component="a"
                      href={attachment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ display: "block", textDecoration: "underline" }}
                    >
                      {attachment.name}
                    </Typography>
                  ))}
                </Box>
              )}
              <Typography variant="caption" sx={{ display: "block", mt: 1, opacity: 0.7 }}>
                {new Date(message.timestamp).toLocaleString()}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>

      <Box sx={{ p: 2, borderTop: 1, borderColor: "divider" }}>
        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder="Type your reply..."
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <input
              type="file"
              multiple
              onChange={handleAttachmentChange}
              style={{ display: "none" }}
              id="file-upload"
            />
            <label htmlFor="file-upload">
              <IconButton component="span" size="small">
                <AttachFile />
              </IconButton>
            </label>
            {attachments.length > 0 && (
              <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
                {attachments.length} file(s) selected
              </Typography>
            )}
          </Box>
          <Button variant="contained" onClick={handleSubmitReply}>
            Send Reply
          </Button>
        </Box>
      </Box>
    </Box>
  );
};