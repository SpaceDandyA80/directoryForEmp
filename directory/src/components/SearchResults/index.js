import React, {useContext} from 'react';
import SearchContext from '../../utils/SearchContext';


function SearchResults() {
    const search = useContext(SearchContext);
    return(
        <ul className="list-group search-results">
        <li className="list-group-item">
          <h2>{search.title}</h2>
          <a href={search.url}>{search.url}</a>
        </li>
      </ul>
    )
}

export default SearchResults;
