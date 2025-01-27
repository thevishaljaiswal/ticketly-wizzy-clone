export interface Ticket {
  id: string;
  subject: string;
  customer: {
    name: string;
    email: string;
    avatar: string;
  };
  status: 'open' | 'closed';
  priority: 'low' | 'medium' | 'high';
  lastUpdate: string;
  messages: {
    id: string;
    from: string;
    content: string;
    timestamp: string;
    isCustomer: boolean;
  }[];
}

export const mockTickets: Ticket[] = [
  {
    id: "1",
    subject: "Unable to access my account",
    customer: {
      name: "John Smith",
      email: "john.smith@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    status: "open",
    priority: "high",
    lastUpdate: "2024-02-10T10:30:00Z",
    messages: [
      {
        id: "m1",
        from: "John Smith",
        content: "Hi, I've been trying to log in to my account but keep getting an error message. Can you help?",
        timestamp: "2024-02-10T10:30:00Z",
        isCustomer: true,
      },
      {
        id: "m2",
        from: "Support Team",
        content: "Hello John, I'm sorry to hear you're having trouble. Could you please tell me what error message you're seeing?",
        timestamp: "2024-02-10T10:35:00Z",
        isCustomer: false,
      },
    ],
  },
  {
    id: "2",
    subject: "Billing inquiry about recent charge",
    customer: {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    status: "closed",
    priority: "medium",
    lastUpdate: "2024-02-09T15:20:00Z",
    messages: [
      {
        id: "m3",
        from: "Sarah Johnson",
        content: "I noticed an unexpected charge on my last bill. Could you explain what this is for?",
        timestamp: "2024-02-09T15:20:00Z",
        isCustomer: true,
      },
    ],
  },
  {
    id: "3",
    subject: "Feature request: Dark mode",
    customer: {
      name: "Mike Wilson",
      email: "mike.w@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
    status: "open",
    priority: "low",
    lastUpdate: "2024-02-08T09:15:00Z",
    messages: [
      {
        id: "m4",
        from: "Mike Wilson",
        content: "Would love to see a dark mode option in the app. Any plans to add this?",
        timestamp: "2024-02-08T09:15:00Z",
        isCustomer: true,
      },
    ],
  },
];