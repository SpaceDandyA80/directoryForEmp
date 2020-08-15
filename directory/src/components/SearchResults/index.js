import React, {useContext} from 'react';
import SearchContext from '../../utils/SearchContext';


function SearchResults() {
    const employee = useContext(SearchContext);
    return(
        <ul className="list-group search-results">
        <li className="list-group-item">
          <h2>{employee.first}</h2>
          <h2>{employee.url}</h2>
        </li>
      </ul>
    )
}

export default SearchResults;
