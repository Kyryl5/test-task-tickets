import React from 'react'
import './Ticket.scss'
import TicketInfo from '../TicketInfo/TicketInfo';
import { Ticket as TicketType } from '../../types';

interface TicketProps {
  ticket: TicketType;
}

export const Ticket: React.FC<TicketProps> = ({ ticket }) => {

  const formatPrice = (price: number): string => {
    const addedSpacePrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return `${addedSpacePrice} $`;
  };


  return (
    <div className="ticket">
      <div className="ticket-header">
        <p className="ticket-header-price">{formatPrice(ticket.price)}</p>
        <img src='afe-logo.png' alt="A4E-letters-logo" width="119" height="41"/>
      </div>
      <TicketInfo ticket={ticket}/>
    </div>
  );
}