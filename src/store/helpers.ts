import {Ticket, SortState, FilterState } from '../types/index'

export function calculateTravelTime(thatWayTravelTime: string, returnTravelTime: string): number {
  const timeRegex = /(\d+)г\s*(\d+)хв/;

  const thatWayMatch = timeRegex.exec(thatWayTravelTime);
  const returnMatch = timeRegex.exec(returnTravelTime);

  if (!thatWayMatch || !returnMatch) {
    console.warn('Invalid travel time format. Returning 0.');
    return 0;
  }

  const [thatWayHours, thatWayMinutes] = thatWayMatch.slice(1).map(Number);
  const [returnHours, returnMinutes] = returnMatch.slice(1).map(Number);

  const totalMinutes = thatWayHours * 60 + thatWayMinutes + returnHours * 60 + returnMinutes;

  return totalMinutes;
}

export function sortByPrice (tickets: Ticket[]): Ticket[] {
  return tickets.sort((ticketA, ticketB) => ticketA.price - ticketB.price);
};

export function sortByOptimal(tickets: Ticket[]): Ticket[] {
  return tickets.sort((a, b) => {
    const aTravelTime = calculateTravelTime(a.thatWay.travelTime, a.return.travelTime);
    const bTravelTime = calculateTravelTime(b.thatWay.travelTime, b.return.travelTime);

    if (aTravelTime !== bTravelTime) {
      return aTravelTime - bTravelTime;
    }
    if (a.stops !== b.stops) {
      return a.stops - b.stops;
    }
    return a.price - b.price;
  });
}

export function checkParamTickets (tickets: Ticket[], sortParam: SortState): Ticket[] {
    if (sortParam.optimal) {
      return sortByOptimal(tickets);
    } else if (sortParam.fastest) {
      return tickets.sort((a, b) => {
        const travelTimeTo = calculateTravelTime(a.thatWay.travelTime, a.return.travelTime);
        const travelTimeBack = calculateTravelTime(b.thatWay.travelTime, b.return.travelTime);
        return travelTimeTo - travelTimeBack;
      });
    } else {
      return sortByPrice(tickets); 
    }
}

export function filterTickets (tickets: Ticket[], filters: FilterState): Ticket[] {
  const filteredTickets = tickets.filter((ticket) => {
    if (filters.allTransfers) {
      return true;
    } else {
      const selectedTransferCounts = [
        filters.oneTransfer ? 1 : null,
        filters.twoTransfers ? 2 : null,
        filters.threeTransfers ? 3 : null,
      ].filter(Boolean); 

      let keepTicket = true;
      if (selectedTransferCounts.length) {
        keepTicket = selectedTransferCounts.some((count) => ticket.stops === count);
      }
      keepTicket = keepTicket && (!filters.noTransfers || ticket.stops === 0);
      return keepTicket;
    }
  });
  
  return filteredTickets;
};