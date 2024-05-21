import React, { useState, useEffect } from 'react';
import './Tabs.scss'; 
import { tabs } from '../../data';
import { SortState } from '../../types/index';
import { AppDispatch } from '../../store/index';
import { useDispatch } from 'react-redux';
import { updateSortParam } from '../../store/actions';


function Tabs() {
  const [sortState, setSortState] = useState<SortState>({
    cheapest: true,
    fastest: false,
    optimal: false,
  });
  const dispatch = useDispatch<AppDispatch>();

  useEffect(()=>{
    return dispatch(updateSortParam(sortState)); 
  }, [dispatch, sortState])

  function handleClick(tabName: string) {
    setSortState({
      cheapest: tabName === 'cheapest',
      fastest: tabName === 'fastest',
      optimal: tabName === 'optimal',
    });
  }
  
  return (
    <div className="Tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`Tabs__nav-button ${sortState[tab.name as keyof SortState] ? 'Tabs__nav-button--active' : ''}`}
          onClick={() => handleClick(tab.name)}
          name={tab.name}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
