import React, { Component } from 'react';

const SearchList = ({ list }) => {

  return (
    <>
      <ul>
        {
          list && list.map(item => (
            <li>
              {item}
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default SearchList
