export const mockTickets = [
  {
    id: "1",
    subject: "Unable to access my account",
    projectName: "Customer Portal",
    createdOn: "2024-02-10T09:30:00Z",
    dueOn: "2024-02-11T09:30:00Z",
    escalationStatus: {
      rmDueDate: "2024-02-10T11:30:00Z",
      tlEscalationDate: "2024-02-10T13:30:00Z",
      gmEscalationDate: "2024-02-10T15:30:00Z",
      hodEscalationDate: "2024-02-10T17:30:00Z",
      cmoEscalationDate: "2024-02-11T09:30:00Z",
      ceoEscalationDate: "2024-02-11T11:30:00Z",
      currentLevel: "gm" // Indicates current escalation level
    },
    customer: {
      name: "John Smith",
      email: "john.smith@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    status: "open",
    category: "support",
    priority: "high",
    description: "I've been trying to log in but keep getting errors",
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
    projectName: "Billing System",
    createdOn: "2024-02-09T14:20:00Z",
    dueOn: "2024-02-10T14:20:00Z",
    escalationStatus: {
      rmDueDate: "2024-02-09T16:20:00Z",
      tlEscalationDate: "2024-02-09T18:20:00Z",
      gmEscalationDate: "2024-02-10T10:20:00Z",
      hodEscalationDate: "2024-02-10T12:20:00Z",
      cmoEscalationDate: "2024-02-10T14:20:00Z",
      ceoEscalationDate: "2024-02-10T16:20:00Z",
      currentLevel: "tl"
    },
    customer: {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    status: "closed",
    category: "billing",
    priority: "medium",
    description: "Question about my recent bill",
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
];