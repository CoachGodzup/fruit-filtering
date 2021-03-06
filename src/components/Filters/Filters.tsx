import React, { ChangeEvent, FormEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCheckboxFilter, FilterState } from '../../reducer/filterReducer';
import { filter, sortBy } from '../../reducer/listReducer';
import { RootState } from '../../store/store';

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filter);

  const handleSortAlphabetically = () => {
    dispatch(sortBy('name'));
  };

  const handleSortByKcal = () => {
    dispatch(sortBy('kcal'));
  };

  const handleSortByWater = () => {
    dispatch(sortBy('water'));
  };

  const handleSortByEmoji = () => {
    dispatch(sortBy('emoji'));
  };

  const handleSortReverse = () => {
    dispatch(sortBy('reverse'));
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    dispatch(filter(filters));
  };

  const changeFilter = (
    name: keyof FilterState,
    value: string,
    checked: boolean
  ) => {
    dispatch(changeCheckboxFilter({ name, value: value === 'true', checked }));
  };

  const onChangeFilterHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name as keyof FilterState;
    const value = event.target.value;
    const checked = event.target.checked;
    changeFilter(name, value, checked);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Filters:</h3>
        <div className='formGroup'>
          <label htmlFor='isTrueFruit'>È un vero frutto?</label>
          <span>
            <input
              onChange={(event) => onChangeFilterHandler(event)}
              type='checkbox'
              name='isTrueFruit'
              value={'false'}
              checked={filters.isTrueFruit.includes(false)}
            />{' '}
            No
          </span>
          <span>
            <input
              onChange={(event) => onChangeFilterHandler(event)}
              type='checkbox'
              name='isTrueFruit'
              value={'true'}
              checked={filters.isTrueFruit.includes(true)}
            />{' '}
            Sì
          </span>
        </div>

        <div className='formGroup'>
          <label htmlFor='canBeEatenRaw'>Si può mangiare crudo?</label>
          <span>
            <input
              onChange={(event) => onChangeFilterHandler(event)}
              type='checkbox'
              name='canBeEatenRaw'
              value={'false'}
              checked={filters.canBeEatenRaw.includes(false)}
            />{' '}
            No
          </span>
          <span>
            <input
              onChange={(event) => onChangeFilterHandler(event)}
              type='checkbox'
              name='canBeEatenRaw'
              value={'true'}
              checked={filters.canBeEatenRaw.includes(true)}
            />{' '}
            Sì
          </span>
        </div>

        <button type='submit'>Filtra</button>
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
