import { useState } from 'react';
export const Searcher = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handlerInput = event => {
    const { value } = event.target;
    setQuery(value);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };
  return (
    <form onSubmit={handlerSubmit}>
      <input onChange={handlerInput} value={query} />
      <button type="submit">Search</button>
    </form>
  );
};
