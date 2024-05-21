import {tickets} from '../data/index'




const TicketsService = {
  getTickets: (ticketCounter: number) => {
    const newTickets = tickets.slice(0, ticketCounter);
    return newTickets;
  },
};

export { TicketsService };