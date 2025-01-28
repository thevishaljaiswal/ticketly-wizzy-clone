import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Chip, Box, Typography } from "@mui/material";

export const TicketList = ({ tickets, selectedTicketId, onSelectTicket }) => {
  return (
    <List sx={{ height: "100%", overflow: "auto" }}>
      {tickets.map((ticket) => (
        <ListItem
          key={ticket.id}
          button
          selected={selectedTicketId === ticket.id}
          onClick={() => onSelectTicket(ticket)}
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <ListItemAvatar>
            <Avatar src={ticket.customer.avatar} alt={ticket.customer.name} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography noWrap variant="subtitle1">
                {ticket.subject}
              </Typography>
            }
            secondary={
              <Box>
                <Typography variant="body2" noWrap>
                  {ticket.customer.name}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Last updated: {new Date(ticket.lastUpdate).toLocaleDateString()}
                </Typography>
              </Box>
            }
          />
          <Chip
            label={ticket.status}
            color={ticket.status === "open" ? "primary" : "default"}
            size="small"
          />
        </ListItem>
      ))}
    </List>
  );
};