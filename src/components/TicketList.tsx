import { Ticket } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface TicketListProps {
  tickets: Ticket[];
  selectedTicketId: string | null;
  onSelectTicket: (ticket: Ticket) => void;
}

export const TicketList = ({ tickets, selectedTicketId, onSelectTicket }: TicketListProps) => {
  return (
    <div className="border-r border-gray-200 overflow-y-auto h-full">
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className={cn(
            "p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors",
            selectedTicketId === ticket.id && "bg-primary-light"
          )}
          onClick={() => onSelectTicket(ticket)}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-gray-900 truncate">{ticket.subject}</h3>
            <span
              className={cn(
                "px-2 py-1 text-xs rounded-full",
                ticket.status === "open"
                  ? "bg-ticket-open/10 text-ticket-open"
                  : "bg-ticket-closed/10 text-ticket-closed"
              )}
            >
              {ticket.status}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <img
              src={ticket.customer.avatar}
              alt={ticket.customer.name}
              className="w-6 h-6 rounded-full mr-2"
            />
            <span>{ticket.customer.name}</span>
          </div>
          <div className="text-xs text-gray-400 mt-1">
            Last updated: {new Date(ticket.lastUpdate).toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  );
};