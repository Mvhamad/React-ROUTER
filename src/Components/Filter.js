import React, { useState } from 'react';
import '../styles/filter.css'

function Filter({ handleFilterTitle }) {
  // initialisation des hooks
  const [titleFilter, setTitleFilter] = useState('');

  // for title
  const handleTitle = event => {
    setTitleFilter(event.target.value);
    handleFilterTitle(event.target.value);
  };

  return (
    <>
      <div className="">
        <div>
          <label className='titleFilter'>
            <input type="text" placeholder='Search Movies' value={titleFilter} onChange={handleTitle} />
          </label>
        </div>
      </div>
    </>
  );
};

export default Filter;
