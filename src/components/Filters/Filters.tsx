import React from 'react';
import { useDispatch } from 'react-redux';
import {
  reverseSort,
  sortAlphabetically,
  sortByEmoji,
  sortByKcal,
  sortByWater,
} from '../../data/sort';
import { sort } from '../../reducer/listReducer';

const Filters = () => {
  const dispatch = useDispatch();

  const handleSortAlphabetically = () => {
    dispatch(sort(sortAlphabetically));
  };

  const handleSortByKcal = () => {
    dispatch(sort(sortByKcal));
  };

  const handleSortByWater = () => {
    dispatch(sort(sortByWater));
  };

  const handleSortByEmoji = () => {
    dispatch(sort(sortByEmoji));
  };

  const handleSortReverse = () => {
    dispatch(sort(reverseSort));
  };

  return (
    <>
      <form>
        <h3>Filters:</h3>
        <div className='formGroup'>
          <label htmlFor='isTrueFruit'>È un vero frutto?</label>
          <span>
            <input type='checkbox' name='isTrueFruit' value={0} /> No
          </span>
          <span>
            <input type='checkbox' name='isTrueFruit' value={1} /> Sì
          </span>
        </div>
      </form>

      <h3>Sort</h3>
      <button onClick={handleSortAlphabetically}>Alphabetically</button>
      <button onClick={handleSortByKcal}>By kcal</button>
      <button onClick={handleSortByWater}>By water</button>
      <button onClick={handleSortByEmoji}>By Emoji (whatever it means)</button>
      <button onClick={handleSortReverse}>Reverse</button>
    </>
  );
};

export default Filters;
