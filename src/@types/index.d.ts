interface Tickets {
    tickets: TicketInfo[];
}

interface TicketInfo {
    id: number;
    requester_id: number;
    subject: string;
    description: string;
}