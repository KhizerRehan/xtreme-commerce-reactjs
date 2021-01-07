import React, { Component } from 'react';
import Search from './Search';
import SearchList from './SearchList';

class SearchableComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      searchKey    : '',
      searchList   : [
        'Apple',
        'Banana',
        'Cat',
        'Dog',
        'Cottom'
      ],
      newSearchList: []
    }
  }

  onInputChange = (value) => {
    const { searchList } = this.state;
    this.setState({
      searchKey    : value,
      newSearchList: searchList.filter(item => item.toLowerCase().startsWith(value.toLowerCase()))
    }, () => {
      console.log('Value is', value);
      console.log('Updated newSearchList is', this.state.newSearchList);
    })
  }

  render() {
    const { children, searchKey } = this.props;
    return <>

      {/* Render Search*/}
      <Search searchKey={searchKey} onInputChange={this.onInputChange}>
        <h3>Search Items:</h3>
      </Search>

      {/* Render SearchList*/}
      {
        this.state.searchKey && <SearchList list={this.state.newSearchList} />
      }
    </>
  }
}

export default SearchableComponent
