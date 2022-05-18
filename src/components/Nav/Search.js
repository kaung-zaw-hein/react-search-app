import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useStateContext } from '../../context/contextProvider'
import  Links  from './Link';

const Search = () => {
  const { setSearchTerm } = useStateContext();
  const [text, setText] = useState('Burma');
  const [debouncedValue] = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative mt-3 sm:ml-48 md:ml-72 sm:-mt-10">
      <input
        value={text}
        type="text"
        className="h-10 p-6 text-black border rounded-full shadow-sm outline-none sm:w-96 w-80 dark:bg-gray-200 hover:shadow-lg"
        placeholder="🔎 Search Google or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text !== '' && (
        <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500 " onClick={() => setText('')}>
          x
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;