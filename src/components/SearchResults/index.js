import React, {useContext} from 'react';
import SearchContext from '../../utils/SearchContext';


function SearchResults() {
    const employee = useContext(SearchContext);
    return(
  <div >
    <input className="form-control"
    type="search"
    aria-label="Search"
    onChange={e => employee.handleInputChange(e)}
    />
  </div>
    )
}

export default SearchResults;
