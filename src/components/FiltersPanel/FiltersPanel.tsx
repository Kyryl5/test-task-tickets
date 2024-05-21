import React, { useState, useEffect } from 'react';
import './FiltersPanel.scss';
import { useDispatch } from 'react-redux';
import {FilterState, CheckboxChange} from '../../types/index';
import { updateFilters } from '../../store/actions';
import { AppDispatch } from '../../store/index';


function FiltersPanel() {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    allTransfers: true,
    noTransfers: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  });

  useEffect(()=>{
    return dispatch(updateFilters(selectedFilters)); 
  }, [dispatch, selectedFilters])


  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked }: CheckboxChange = event.target;

    setSelectedFilters((prevFilters) => {
      const updatedFilters: FilterState = {
        ...prevFilters,
        [id as keyof FilterState]: checked,
      };
  
      if (checked && id === 'allTransfers' ) {
        Object.keys(updatedFilters).forEach((key) => {
          if (key !== 'allTransfers') {
            updatedFilters[key as keyof FilterState] = false;
          }
        });
      } else if (checked && id === 'noTransfers' ) {
        Object.keys(updatedFilters).forEach((key) => {
          if (key !== 'noTransfers') {
            updatedFilters[key as keyof FilterState] = false;
          }
        });
      } else if (checked && (id === 'oneTransfer' || id === 'twoTransfers' || 'threeTransfers')) {
        Object.keys(updatedFilters).forEach((key) => {
          if (key === 'allTransfers' || key === 'noTransfers') {
            updatedFilters[key as keyof FilterState] = false;
          }
        });

      }
      return updatedFilters;
    });
  };
  
  return (
    <div className="filters-box">
      <p className='filters-title'>{'кількість пересадок'}</p>
      <div className='filters'>
        <label className="filters__label">
          <input type="checkbox" id="allTransfers" className="filters__checkbox" checked={selectedFilters.allTransfers}
            onChange={handleCheckboxChange}/>
          <span className="filters__checkbox-indicator">
          </span>
          <span className="filters__label-text">Всі</span>
        </label>
        <label className="filters__label">
          <input type="checkbox" id="noTransfers" className="filters__checkbox" checked={selectedFilters.noTransfers}
            onChange={handleCheckboxChange}/>
          <span className="filters__checkbox-indicator"></span>
          <span className="filters__label-text">Без пересадок</span>
        </label>
        <label className="filters__label">
          <input type="checkbox" id="oneTransfer" className="filters__checkbox" checked={selectedFilters.oneTransfer}
            onChange={handleCheckboxChange}/>
          <span className="filters__checkbox-indicator"></span>
          <span className="filters__label-text">1 пересадка</span>
        </label>
        <label className="filters__label">
          <input type="checkbox" id="twoTransfers" className="filters__checkbox" checked={selectedFilters.twoTransfers}
            onChange={handleCheckboxChange}/>
          <span className="filters__checkbox-indicator"></span>
          <span className="filters__label-text">2 пересадки</span>
        </label>
        <label className="filters__label">
          <input type="checkbox" id="threeTransfers" className="filters__checkbox" checked={selectedFilters.threeTransfers}
            onChange={handleCheckboxChange}/>
          <span className="filters__checkbox-indicator"></span>
          <span className="filters__label-text">3 пересадки</span>
        </label>
      </div>
    </div>
  );
};

export default FiltersPanel;