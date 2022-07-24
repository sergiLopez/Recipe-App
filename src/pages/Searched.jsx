import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//import {Motion} from 'framer-motion';
import {useParams} from 'react-router-dom';

function Searched() {



    const [cuisine, setCuisine] = useState([]);
    let params = useParams()
    console.log(params)
    const getCuisine = async (name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=9`)
        const recipes = await data.json();
        setCuisine(recipes.results)
    }


    useEffect(() => {
        getCuisine(params.search)
        console.log(params.search)
      },[params.search])

      
      
      return (
        <Grid>
            {cuisine.map((item) =>{
                return(
                    <Card key={item.id}>
                        <img src={item.image} alt=""></img>
                        <h4>{item.title}</h4>
                    </Card>
                )
            })}
        </Grid>
    
      )
}


const Grid = styled.div`
    margin-top: 70px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 0.2fr));
    grid-gap: 3rem;
    justify-content: center;
`;

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;

    }
`;

export default Searched