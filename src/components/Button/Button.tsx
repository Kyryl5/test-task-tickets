import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getTickets} from '../../store/actions'
import { AppDispatch } from '../../store/index'
import './Button.scss'

function Button() {
  const dispatch = useDispatch<AppDispatch>();
  const [ticketCounter, setTicketCounter] = useState(5);

  
  const loadMoreTickets = () => {
    setTicketCounter(ticketCounter + 5);
  };
  
  useEffect(() => {
    dispatch(getTickets(ticketCounter));
  }, [dispatch, ticketCounter]);

  return (
    <button onClick={loadMoreTickets} className="button">{'показати ще 5 квитків'}</button>
  )
}

export default Button