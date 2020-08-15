import React from 'react';
import './style.css';
function SearchForm(props) {
    return(
      <form>
          <p>
              <label htmlFor='language'>Search Employees:</label>
              <input value={props.search}
              onChange={props.handleInputChange}
              name='find'
              list='find'
              type='text'
              className='form-control'
              placeholder='Type in an employees name '
              id='find'
              />
          </p>
      </form>
    )
}

export default SearchForm;