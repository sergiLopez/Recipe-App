import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import React from 'react'
import {NavLink} from 'react-router-dom';


function Category() {
  return (
    <List>
        <SLink to={"/cuisine/Italian"} style={{backgroundColor: '#2c0c6a', opacity: "0.85"}}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/American"} style={{backgroundColor: '#de3d19',opacity: "0.85"}}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={"/cuisine/Thai"} style={{backgroundColor: '#eed029', opacity: "0.85"}}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>
        <SLink to={"/cuisine/Japanese"} style={{backgroundColor: '#68beda', opacity: "0.85"}}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`

const SLink = styled(NavLink)`

    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5%;
    margin: 0 1rem;
    text-decoration: none;
    width: 10rem;
    height: 4rem;
    color: white;
    cursor: pointer;
}
`


export default Category
