import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";



const Search = () => {

    const [input , setInput] = useState("");
    const navigate = useNavigate();

const submitHandler = (e)=>{
    navigate("/searched/" + input);
    e.preventDefault();
}


    return (
        <div>
            <FormStyle onSubmit={submitHandler}>
                <FaSearch/>
                <input type="text" onChange={(e)=> setInput(e.target.value)} value={input} />
                
            </FormStyle>
        </div>
    );
};


const FormStyle = styled.form`

    position:relative;
    width:100%;
    input{
        border:none;
        background: #494949;
        font-size:1rem;
        color:white;
        padding:.5rem 3rem;
        border:none;
        border-radius:1rem;
        outline:none;
        width:100%;
    }
    svg{
        position: absolute;
        top:50%;
        left:0%;
        transform: translate(100% , -50%);
        color:white;
    }
`;

export default Search;