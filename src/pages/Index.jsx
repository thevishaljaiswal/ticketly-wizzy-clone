import { useState } from "react";
import { mockTickets } from "@/lib/mock-data";
import { TicketList } from "@/components/TicketList";
import { TicketDetail } from "@/components/TicketDetail";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";

const Index = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedTicket, setSelectedTicket] = useState(null);

  const filteredTickets = mockTickets.filter((ticket) => {
    if (selectedFilter === "all") return true;
    return ticket.status === selectedFilter;
  });

  const ticketCounts = {
    all: mockTickets.length,
    open: mockTickets.filter(t => t.status === "open").length,
    closed: mockTickets.filter(t => t.status === "closed").length
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar position="static">
        <Toolbar>
          <Button 
            color="inherit"
            onClick={() => setSelectedFilter("all")}
            sx={{ mr: 2 }}
          >
            All Tickets ({ticketCounts.all})
          </Button>
          <Button 
            color="inherit"
            onClick={() => setSelectedFilter("open")}
            sx={{ mr: 2 }}
          >
            Open ({ticketCounts.open})
          </Button>
          <Button 
            color="inherit"
            onClick={() => setSelectedFilter("closed")}
          >
            Closed ({ticketCounts.closed})
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <Box sx={{ width: 320, borderRight: 1, borderColor: "divider" }}>
          <TicketList
            tickets={filteredTickets}
            selectedTicketId={selectedTicket?.id || null}
            onSelectTicket={setSelectedTicket}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <TicketDetail ticket={selectedTicket} />
        </Box>
      </Box>
    </Box>
  );
};

export default Index;