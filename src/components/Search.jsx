
import styled from 'styled-components';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Search() {

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    console.log("DLKFJS")
    e.preventDefault();
    navigate('/searched/'+input);
  }
  

  return (
    <FormStyle onSubmit={submitHandler}>
        <label style={{marginBottom: "10px"}}>Search for recipes</label>
        <div>
            <input onChange={ (e) => setInput(e.target.value) }type="text" value={input}/>
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0 20rem;
    position: relative;
    div{
        width: 100%;
        position: relative;
    }

    input{
        border: 2px solid #065a21;
        font-size: 1.5rem;
        color: black;
        padding: 0.5rem 2rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: absoulute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: black;

    }

`

export default Search