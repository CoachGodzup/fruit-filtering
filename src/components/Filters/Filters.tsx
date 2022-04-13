import React, {
  ChangeEvent,
  FormEventHandler,
  useEffect,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import {
  reverseSort,
  sortAlphabetically,
  sortByEmoji,
  sortByKcal,
  sortByWater,
} from '../../data/sort';
import { changeCheckboxFilter, FilterState } from '../../reducer/filterReducer';
import { sort } from '../../reducer/listReducer';

const Filters = () => {
  const [isTrueFruit, setTrueFruit] = useState<boolean[]>([]);
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

  useEffect(() => {
    console.log(isTrueFruit);
    filterList();
  }, [isTrueFruit]);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log('senza filtro!');
  };

  const filterList = () => {};

  const changeFilter = (
    name: keyof FilterState,
    value: string,
    checked: boolean
  ) => {
    console.log('dispatch!');
    dispatch(changeCheckboxFilter({ name, value: value === 'true', checked }));
  };

  const onChangeTrueFruitHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name as keyof FilterState;
    const value = event.target.value;
    const checked = event.target.checked;
    changeFilter(name, value, checked);

    /*    console.log(newValue, checked);
    setTrueFruit(
      checked
        ? [...isTrueFruit, newValue]
        : isTrueFruit.filter((elm) => elm !== newValue)
    );*/
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Filters:</h3>
        <div className='formGroup'>
          <label htmlFor='isTrueFruit'>È un vero frutto?</label>
          <span>
            <input
              onChange={(event) => onChangeTrueFruitHandler(event)}
              type='checkbox'
              name='isTrueFruit'
              value={'false'}
            />{' '}
            No
          </span>
          <span>
            <input
              onChange={(event) => onChangeTrueFruitHandler(event)}
              type='checkbox'
              name='isTrueFruit'
              value={'true'}
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
