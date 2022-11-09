import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Veggi = () => {
    const [veggi,setVeggi] = useState([])

    useEffect(()=>{
        getPopular();
    },[]);
    

    const getPopular = async () =>{
        const check = localStorage.getItem("popular");
        if(check){
            setVeggi(JSON.parse(check))
        }else{

        const api = await  fetch(` https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
        const data = await api.json();
        localStorage.setItem("popular",JSON.stringify(data.recipes));
        setVeggi(data.recipes);
        }
    }
    return (
        <Wrapper>
            <h3>Vagitarian Picks</h3>
            <Splide
            
            options={{ 
                perPage:3,
                arrows:true,
                pagination:false,
                type: 'loop',
                drag:'free',
                gap:"2rem",
             }}

            >
                {
                veggi.map((recipe)=>{
                    return(
                        <SplideSlide>
                            <Card>
                                <Link to={'/recipe/'+ recipe.id }>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <Gradient />
                                </Link>
                            </Card>
                        </SplideSlide>
                    )

                })
            }
            </Splide>
        </Wrapper>

    );

    
};

const Wrapper = styled.div`
      margin: 4rem 0rem; 
      font-family: 'Lonster Two' , cursive;     
    ` ;
const Card = styled.div`
    min-height : 20rem;
    border-radius : 2rem;
    overflow: hidden;
    position:relative;

    img{
        border-radius : 2rem;
        position: absolute;
        left:0;
        width:100%;
        height:100%;
        object-fit:cover;
    }
    p{
        position:absolute;
        z-index:10;
        left:50%;
        bottom:0%;
        transform:translate(-50%,0%);
        color:white;
        width:100%;
        text-align:center;
        font-weight:600;
        font-size:1rem;
        height:40%;
        display:flex;
        justify-content:center;
        align-item:center;
    }
` ;

const Gradient = styled.div`
    	z-index: 3;
        position:absolute;
        width:100%;
        height:100%;
        background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));

`;


export default Veggi;