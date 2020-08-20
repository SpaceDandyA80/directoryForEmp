import React, { useContext } from "react";
import SearchContext from "../../utils/SearchContext";

function SearchResults() {
  const employee = useContext(SearchContext);
  console.log(employee);
  return employee.articleState.map(({ name, email, id }) => {
    return (
      <div key={id}>
        <li>{name}</li>
        <li>{email}</li>
      </div>
    );
  });
}

export default SearchResults;
