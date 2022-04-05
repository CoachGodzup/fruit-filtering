import React from 'react';

const Filters = () => {
  return (
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
  );
};

export default Filters;
