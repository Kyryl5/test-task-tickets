import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './TicketsList.scss';
import Tabs from '../Tabs/Tabs'; 
import {Ticket} from '../Ticket/Ticket';
import Button from '../Button/Button';
import { getTickets } from '../../store/actions';
import {RootState, AppDispatch } from '../../store/index';

function TicketsList() {
  const dispatch = useDispatch<AppDispatch>();

  const tickets = useSelector((state: RootState) => state.tickets.tickets);
  const filters = useSelector((state: RootState) => state.tickets.filters);
  const sortParam = useSelector((state: RootState) => state.tickets.sortParam);
  
  useEffect(() => {
    dispatch(getTickets(5));
  }, [dispatch, filters, sortParam]);
  
  return (
    <div className="content-tickets-list">
      <Tabs />
      {tickets.map(ticket => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
      <Button />
    </div>
  );
}

export default TicketsList;