import React, {useState, useEffect} from "react";
import SearchResults from "../../components/SearchResults";
import SearchForm from "../../components/SearchForm";
import SearchContext from "../../utils/SearchContext";
import Alert from "../../components/Alert"
import API from "../../utils/API";



function Search() {
  const [articleState, setArticleState] = useState({
    title: "",
    url: ""
  })

  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Employee Search";
    if(!search){
      return;
    }
    API.searchIndex(search)
    .then(res => {
      if (res.results.length === 0){
        throw new Error("no results found.");
      }
      if (res.results.status === "error"){
        throw new Error(res.results.message);
  
      }
      setArticleState({
        title: res.results[0].name.first,
        url: res.results[1][0],
      })
    })
    .catch(err => setError(err));
  }, [search]);


  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };

  return (
    <SearchContext.Provider value={articleState}>
    <div>
      <h1>Employee Search</h1>
      <div>
        <Alert type="text-center">
          {error}
        </Alert>
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
