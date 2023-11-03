import React, { useState } from 'react';
import { Button ,Form} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function SearchBox() {
  const [keyword, setKeyword] = useState('')
  
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword)
    {
      navigate(`/?keyword=${keyword}&page=1`)
    }
    else
    {
      navigate('/');
    }
    }

  return (
    <Form onSubmit={submitHandler} className='flex'>
      <div className='navbar_search-section'>

            <Form.Control
          type='text'
          placeholder="🔎 I'm shopping for"
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5 '
                ></Form.Control>
                </div>

            <Button
                type='submit'
                variant=''
        className='btn-submit'
            >
                Search
            </Button>
        </Form>
  )
}

export default SearchBox