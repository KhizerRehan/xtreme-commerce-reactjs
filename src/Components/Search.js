import React, { Component } from 'react'
import PropTypes from 'prop-types';

const Search = ({ children, searchKey, onInputChange }) => {
  return (
    <>
      {children}
      <input type='text' placeholder='Search Item...' value={searchKey} onChange={(e)=> onInputChange(e.target.value)} />
    </>
  )
}

Search.propTypes = {
  children: PropTypes.node,
  searchKey: PropTypes.string,
  onInputChange: PropTypes.func
}
export default Search;
