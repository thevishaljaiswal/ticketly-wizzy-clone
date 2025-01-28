import { Ticket } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Upload } from "lucide-react";

interface TicketDetailProps {
  ticket: Ticket | null;
}

export const TicketDetail = ({ ticket }: TicketDetailProps) => {
  const [reply, setReply] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);

  if (!ticket) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Select a ticket to view details
      </div>
    );
  }

  const handleAttachmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(Array.from(e.target.files));
    }
  };

  const handleSubmitReply = () => {
    // In a real app, this would make an API call
    console.log("Submitting reply:", reply);
    console.log("Attachments:", attachments);
    setReply("");
    setAttachments([]);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">{ticket.subject}</h2>
          <div className="flex gap-2">
            <Select defaultValue={ticket.category}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="support">Support</SelectItem>
                <SelectItem value="billing">Billing</SelectItem>
                <SelectItem value="feature">Feature Request</SelectItem>
                <SelectItem value="bug">Bug Report</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue={ticket.status}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
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

      <div className="p-4 border-b border-gray-200">
        <h3 className="text-sm font-medium text-gray-900 mb-2">Description</h3>
        <Textarea
          value={ticket.description || "No description provided"}
          readOnly
          className="min-h-[100px] bg-gray-50"
        />
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-900">Comments</h3>
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
                {message.attachments && message.attachments.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {message.attachments.map((attachment) => (
                      <a
                        key={attachment.name}
                        href={attachment.url}
                        className="block text-sm underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {attachment.name}
                      </a>
                    ))}
                  </div>
                )}
                <div className="text-xs mt-2 opacity-70">
                  {new Date(message.timestamp).toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 p-4 space-y-4">
        <Textarea
          placeholder="Type your reply..."
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          className="min-h-[100px]"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Input
              type="file"
              multiple
              onChange={handleAttachmentChange}
              className="hidden"
              id="file-upload"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              <Upload className="w-4 h-4 mr-2" />
              Attach Files
            </Button>
            {attachments.length > 0 && (
              <span className="text-sm text-gray-500">
                {attachments.length} file(s) selected
              </span>
            )}
          </div>
          <Button onClick={handleSubmitReply}>Send Reply</Button>
        </div>
      </div>
    </div>
  );
};