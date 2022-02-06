import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { BiRightArrowAlt } from 'react-icons/bi';

const Search = ({data, setData}) => {
  const [valid, setValid] = React.useState();

  //Get zip value from search bar and validate
  const [searchValue, setSearchValue] = React.useState(),
    getData = e => {
      e.preventDefault();
      var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(searchValue);
      if(isValidZip) {
        setValid(false);
        setData(searchValue);
      }
      else {
        setValid(true);
      }
    }

  return (
    <Form className='searchbar' onSubmit={getData}>
      <Form.Group className="mb-3" controlId="formLocationSearch">
        <InputGroup hasValidation>
          <Form.Control className='searchText' size ="lg" type="text" placeholder="Enter A USA Zip Code" 
            onChange={(e) => setSearchValue(e.target.value)} required isInvalid={valid}/>
          <span className='search-icon'><BiRightArrowAlt /></span>
          <Form.Control.Feedback type="invalid">Please enter a valid United States zip code.</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </Form>
  )
}

export default Search;
