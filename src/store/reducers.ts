import {GET_TICKETS, UPDATE_FILTER, UPDATE_SORT_PARAM } from '../store/actions';
import { TicketsActionTypes } from '../types/index';
import {Ticket, FilterState, SortState } from '../types/index'

interface TicketsState {
  tickets: Ticket[];
  filters: FilterState,
  sortParam: SortState,
}

const initialState : TicketsState = {
  tickets: [],
  filters: {
    allTransfers: true,
    noTransfers: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  },
  sortParam: {
    cheapest: true,
    fastest: false,
    optimal: false,
  },
};

const ticketsReducer = (state = initialState, action: TicketsActionTypes): TicketsState => {
  switch (action.type) {
    case GET_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      };
    case UPDATE_FILTER:
      return {
        ...state,
        filters: action.payload,
      };
    case UPDATE_SORT_PARAM:
      return {
        ...state,
        sortParam: action.payload,
      };  
    default:
      return state;
  }
};

export { ticketsReducer };