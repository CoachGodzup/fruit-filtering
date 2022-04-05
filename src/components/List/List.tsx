import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Fruit } from '../../type/fruit';
import './List.css';

const List = () => {
  const list = useSelector((state: RootState) => state.fruit.list);

  const booleanFormatter = (input: boolean) => {
    return input ? '✅' : '❌';
  };

  return (
    <section className='fruitList'>
      {list.map((elm: Fruit) => (
        <div>
          <h1>{elm.emoji}</h1>
          <h3>{elm.name}</h3>
          <ul>
            <li>Is true fruit: {booleanFormatter(elm.isTrueFruit)}</li>
            <li>Can be eaten raw: {booleanFormatter(elm.canBeEatenRaw)}</li>
            <li>KCal / 100g: {elm.kcal}</li>
            <li>Water / 100g: {elm.water}g</li>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default List;
