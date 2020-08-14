import React, {useContext} from 'react';
import SearchContext from '../../utils/SearchContext';


function SearchResults() {
    const Search = useContext(SearchContext);
    return(
        <ul className="list-group search-results">
        <li className="list-group-item">
          <h2>{Search.title}</h2>
          <a href={Search.url}>{Search.url}</a>
        </li>
      </ul>
    )
}

export default SearchResults;
