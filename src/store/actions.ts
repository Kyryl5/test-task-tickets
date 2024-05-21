import {TicketsService} from '../api/index'
import { Dispatch } from 'redux';
import { FilterState, SortState } from '../types';
import  store  from '../store/index';
import {filterTickets, checkParamTickets} from '../store/helpers';
import { TicketsActionTypes } from '../types/index'
 

export const GET_TICKETS = 'GET_TICKETS';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_SORT_PARAM = 'UPDATE_SORT_PARAM';


export const getTickets = (ticketCounter: number) => {
  
  return (dispatch: Dispatch<TicketsActionTypes>) => {
    try {
      const data = TicketsService.getTickets(ticketCounter);
      const {filters, sortParam} = store.getState().tickets;
      const filteredTickets = filterTickets(data, filters);
      const checkedParamTickets = checkParamTickets(filteredTickets, sortParam)
            
      dispatch({ type: GET_TICKETS, payload: checkedParamTickets });
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };
};
export const updateFilters = (filters: FilterState ) => {
  return (dispatch: Dispatch<TicketsActionTypes>) => {
    dispatch({ type: UPDATE_FILTER, payload: filters });
  }
}
export const updateSortParam = (sortParam: SortState ) => {
  return (dispatch: Dispatch<TicketsActionTypes>) => {
    dispatch({ type: UPDATE_SORT_PARAM, payload: sortParam });
  }
}


