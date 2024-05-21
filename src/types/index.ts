import {GET_TICKETS, UPDATE_FILTER, UPDATE_SORT_PARAM} from '../store/actions'

export interface Ticket {
  id: number;
  thatWay: {
    from: string;
    to: string;
    departureTime: string;
    arrivalTime: string;
    travelTime: string;
  };
  return: {
    from: string;
    to: string;
    departureTime: string;
    arrivalTime: string;
    travelTime: string;
  };
  price: number;
  stops: number;
  connections: string[];
  connectionsDescribe?: string; 
}
export interface RootState {
  tickets: Ticket[];
  filters: FilterState;
  sortParam: SortState;
}

export interface FilterState {
  allTransfers: boolean;
  noTransfers: boolean;
  oneTransfer: boolean;
  twoTransfers: boolean;
  threeTransfers: boolean;
}
export interface SortState {
  cheapest: boolean;
  fastest: boolean;
  optimal: boolean;
}

export interface CheckboxChange {
  id: string;
  checked: boolean;
}

export type GetTicketsPayload = Ticket[]; 

export interface GetInitialTicketsAction {
  type: typeof GET_TICKETS;
  payload: GetTicketsPayload;
}

export interface OtherAction {
  type: string;
  payload?: any;
}

export interface UpdateFilterAction {
  type: typeof UPDATE_FILTER;
  payload: FilterState;
}

export interface UpdateSortParamAction {
  type: typeof UPDATE_SORT_PARAM;
  payload: SortState;
}

export type TicketsActionTypes = GetInitialTicketsAction | UpdateFilterAction | UpdateSortParamAction | OtherAction;


