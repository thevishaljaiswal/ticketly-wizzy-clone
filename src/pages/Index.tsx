import { useState } from "react";
import { mockTickets, Ticket } from "@/lib/mock-data";
import { Sidebar } from "@/components/Sidebar";
import { TicketList } from "@/components/TicketList";
import { TicketDetail } from "@/components/TicketDetail";

const Index = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  const filteredTickets = mockTickets.filter((ticket) => {
    if (selectedFilter === "all") return true;
    return ticket.status === selectedFilter;
  });

  return (
    <div className="h-screen flex bg-white">
      <Sidebar selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
      <div className="flex-1 flex">
        <div className="w-80">
          <TicketList
            tickets={filteredTickets}
            selectedTicketId={selectedTicket?.id || null}
            onSelectTicket={setSelectedTicket}
          />
        </div>
        <div className="flex-1">
          <TicketDetail ticket={selectedTicket} />
        </div>
      </div>
    </div>
  );
};

export default Index;