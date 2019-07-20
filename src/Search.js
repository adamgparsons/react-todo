import React, { useState, useEffect } from "react";

const Search = ({ updateFilter }) => {
  const [filterString, setFilterString] = useState("");

  useEffect(() => {
    updateFilter(filterString);
  });

  return (
    <div className=" pv3 bg-light-gray flex items-center br2">
      <div className="flex items-center">
        <svg
          className="pl2"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.9696 13.5523C16.1361 12.0925 16.7679 10.2676 16.7679 8.36983C16.7679 3.74696 13.0012 0 8.38396 0C3.76671 0.0243309 0 3.77129 0 8.39416C0 13.017 3.76671 16.764 8.35966 16.764C10.2066 16.764 12.0292 16.1314 13.5358 14.9635L18.5662 20L20 18.5645L14.9696 13.5523ZM8.35966 14.7689C4.86027 14.7689 2.01701 11.9221 2.01701 8.41849C2.01701 4.91484 4.86027 2.06813 8.35966 2.06813C11.8591 2.06813 14.7023 4.91484 14.7023 8.41849C14.7023 11.9221 11.8591 14.7689 8.35966 14.7689Z"
            fill="#B1B5B9"
          />
        </svg>
      </div>
      <div className="mw-100">
        <input
          type="text"
          placeholder="Search to dos"
          className="bn mh2 outline-0 bg-light-gray"
          onChange={event => {
            setFilterString(event.target.value);
          }}
          value={filterString}
        />
      </div>
    </div>
  );
};

export default Search;
