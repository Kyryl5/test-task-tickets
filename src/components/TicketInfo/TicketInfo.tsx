import React from 'react';
import './TicketInfo.scss';
import {Ticket} from '../../types/index';



function TicketInfo(props: { ticket: Ticket }) {
  const { ticket } = props;
  
  function getConnectionsString(connections: string[]): string {
    return connections.join(' ');
  }

  return (
    <div className="ticket-info"> 
        <div className="ticket-info-that-way">
          <div className="ticket-info-direction">
            <p className="ticket-info-title">{`${ticket.thatWay.from} - ${ticket.thatWay.to}`}</p>
            <p className="ticket-info-value">{`${ticket.thatWay.departureTime} - ${ticket.thatWay.arrivalTime}`}</p>
          </div>

          <div className="ticket-info-time">
            <p className="ticket-info-title">{'в дорозі'}</p>
            <p className="ticket-info-value ticket-info-value__lover-case">{ticket.thatWay.travelTime}</p>
          </div>

          <div className="ticket-info-connections">
              <p className="ticket-info-title">{ticket.connectionsDescribe}</p>
              <p className="ticket-info-value">{getConnectionsString(ticket.connections)}</p>
          </div>     
      </div>

        <div className="ticket-info-return">
          <div className="ticket-info-direction">
            <p className="ticket-info-title">{`${ticket.return.from} - ${ticket.return.to}`}</p>
            <p className="ticket-info-value">{`${ticket.return.departureTime} - ${ticket.return.arrivalTime}`}</p>
          </div>
          <div className="ticket-info-time">
            <p className="ticket-info-title">{'в дорозі'}</p>
            <p className="ticket-info-value ticket-info-value__lover-case">{ticket.return.travelTime}</p>
          </div> 
          <div className="ticket-info-connections">
              <p className="ticket-info-title">{ticket.connectionsDescribe}</p>
              <p className="ticket-info-value">{getConnectionsString(ticket.connections)}</p>
          </div> 
        </div>

    </div>
  );
};

export default TicketInfo;

