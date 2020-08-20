import React, { useContext } from "react";
import SearchContext from "../../utils/SearchContext";

function SearchResults() {
  const employee = useContext(SearchContext);

  return employee.articleState.map((employees) => {
    return (
      <div key={employees.id.value}>
        <li>{employees.name.first} {employees.name.last}</li>
        <li>{employees.email}</li>
      </div>
    );
  });
}

export default SearchResults;
