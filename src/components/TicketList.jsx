import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Chip, Box, Typography } from "@mui/material";

export const TicketList = ({ tickets, selectedTicketId, onSelectTicket }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <List sx={{ height: "100%", overflow: "auto" }}>
      {tickets.map((ticket) => (
        <ListItem
          key={ticket.id}
          button
          selected={selectedTicketId === ticket.id}
          onClick={() => onSelectTicket(ticket)}
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            flexDirection: "column",
            alignItems: "flex-start",
            py: 2,
          }}
        >
          <Box sx={{ display: "flex", width: "100%", mb: 1 }}>
            <ListItemAvatar>
              <Avatar src={ticket.customer.avatar} alt={ticket.customer.name} />
            </ListItemAvatar>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" noWrap>
                {ticket.subject}
              </Typography>
              <Typography variant="body2" color="text.secondary" noWrap>
                {ticket.projectName}
              </Typography>
            </Box>
            <Chip
              label={ticket.status}
              color={ticket.status === "open" ? "primary" : "default"}
              size="small"
              sx={{ ml: 1 }}
            />
          </Box>
          
          <Box sx={{ pl: 7, width: "100%" }}>
            <Typography variant="caption" display="block" color="text.secondary">
              Created: {formatDate(ticket.createdOn)}
            </Typography>
            <Typography variant="caption" display="block" color="text.secondary">
              Due: {formatDate(ticket.dueOn)}
            </Typography>
            <Typography variant="caption" display="block" color="text.secondary">
              Last updated: {formatDate(ticket.lastUpdate)}
            </Typography>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};