import React, { Component } from 'react'

const Search = ({ children, searchKey, onInputChange }) => {
  return (
    <>
      {children}
      <input type='text' placeholder='Search Item...' value={searchKey} onChange={(e)=> onInputChange(e.target.value)} />
    </>
  )
}

export default Search;
