import { Ticket } from "@/lib/mock-data";

interface TicketDetailProps {
  ticket: Ticket | null;
}

export const TicketDetail = ({ ticket }: TicketDetailProps) => {
  if (!ticket) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Select a ticket to view details
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold text-gray-900">{ticket.subject}</h2>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              ticket.status === "open"
                ? "bg-ticket-open/10 text-ticket-open"
                : "bg-ticket-closed/10 text-ticket-closed"
            }`}
          >
            {ticket.status}
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <img
            src={ticket.customer.avatar}
            alt={ticket.customer.name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <div className="font-medium text-gray-900">{ticket.customer.name}</div>
            <div>{ticket.customer.email}</div>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {ticket.messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isCustomer ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                message.isCustomer
                  ? "bg-gray-100 text-gray-900"
                  : "bg-primary text-white"
              }`}
            >
              <div className="font-medium mb-1">{message.from}</div>
              <div>{message.content}</div>
              <div className="text-xs mt-2 opacity-70">
                {new Date(message.timestamp).toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};