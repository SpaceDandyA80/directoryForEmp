import React, { useState, useEffect } from "react";
import SearchResults from "../../components/SearchResults";
import SearchForm from "../../components/SearchForm";
import SearchContext from "../../utils/SearchContext";
//import Alert from "../../components/Alert"
import API from "../../utils/API";

function Search() {
  const [articleState, setArticleState] = useState([]);

  const [search, setSearch] = useState({});
  //const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Employee Search";

    API.searchIndex()
      .then((res) =>
        // console.log(res.data.results)
        setArticleState(res.data.results)
      )
      .catch((err) => console.log(err));
  });

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <SearchContext.Provider value={articleState}>
      <div>
        <h1>Employee Search</h1>
        <div>
          {/* <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
          {error}
        </Alert> */}
          <SearchForm
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            results={search}
          />
          <SearchResults />
        </div>
      </div>
    </SearchContext.Provider>
  );
}
export default Search;