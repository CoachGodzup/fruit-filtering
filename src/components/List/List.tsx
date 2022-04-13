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
      {list.length === 0 && <div>💔 Nessun frutto trovato 💔</div>}
      {list.map((elm: Fruit) => (
        <div key={elm.emoji}>
          <h1>{elm.emoji}</h1>
          <h3>{elm.name}</h3>
          <ul>
            <li>Is true fruit: {booleanFormatter(elm.isTrueFruit)}</li>
            <li>Can be eaten raw: {booleanFormatter(elm.canBeEatenRaw)}</li>
            <li>
              Energy / 100g: {elm.kJ} KJ ({elm.kcal} KCal)
            </li>
            <li>Water / 100g: {elm.water}g</li>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default List;
