import React from 'react';
import { GiKnifeFork } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Logo = () => {
    return (
        <div>
            <Nav>
                <GiKnifeFork />
                <Logos to={"/"}>Foodiesss</Logos>
            </Nav>
        </div>
    );
};
const Logos = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Lonster Two' , cursive;
`;
const Nav = styled.div`
    padding: 1rem 0rem;
    display:flex;
    justify-content: flex-start;
    align-item:center;
    svg{
        font-size:2rem
    }
`



export default Logo;