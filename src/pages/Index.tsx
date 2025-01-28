import { useState } from "react";
import { mockTickets, Ticket } from "@/lib/mock-data";
import { TicketList } from "@/components/TicketList";
import { TicketDetail } from "@/components/TicketDetail";

const Index = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

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
    <div className="h-screen flex flex-col bg-white">
      <div className="border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex space-x-4">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedFilter === "all"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              All Tickets ({ticketCounts.all})
            </button>
            <button
              onClick={() => setSelectedFilter("open")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedFilter === "open"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Open ({ticketCounts.open})
            </button>
            <button
              onClick={() => setSelectedFilter("closed")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedFilter === "closed"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Closed ({ticketCounts.closed})
            </button>
          </div>
        </div>
      </div>
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