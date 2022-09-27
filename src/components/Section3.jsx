import React from 'react';
import styled from 'styled-components';
import image5 from '../images/card-5-img.png'
import image6 from '../images/card-6-img.png'
import image7 from '../images/card-7-img.png'
import image8 from '../images/card-8-img.png'

const Section3 = () => {
  return(
    <Section>
        <div className="container">
            <div className="dftexts">
                <h1>Wooden Toys</h1>
                <div className="p">
                    <p>See All Toys</p> 
                    <i class="far fa-long-arrow-right"></i>
                </div>
            </div>
            <div className="chiziq"></div>
            <div className="cards">
                <div class="card">
                    <img src={image5} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Happy Flower</h5>
                        <button type="button" class="btn">$ 38.00 USD</button>
                    </div>
                </div>
                <div class="card">
                    <img src={image6} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Lift Machine</h5>
                        <button type="button" class="btn">$ 24.00 USD</button>
                     </div>
                </div>
                <div class="card">
                    <img src={image7} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Wooden Camera</h5>
                        <button type="button" class="btn">$ 32.00 USD</button>
                    </div>
                </div>
                <div class="card">
                    <img src={image8} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Little Rabbit</h5>
                        <button type="button" class="btn">$ 16.00 USD</button>
                    </div>
                </div>
            </div>
        </div>
    </Section>
  )
};

const Section = styled.div`
    width: 100%;
    .container{
        margin-bottom: 60px;
    }
    .dftexts{
        display: flex;
        justify-content: space-between;
        border: 2px solid white;
        border-bottom: black;
        margin-bottom: 30px;
    }
    .p{
        display: flex;
        margin-top: 17px;
        margin-left: -8px;
    }
    .p i{
        margin-top: 7px;
        margin-left: 5px;
    }
    .chiziq{
        width: 100%;
        background: #E5E5E5;
        height: 2px;
    }
    .card{
        margin-top: 40px;
        text-align: center;
        width: 270px;
        border: 1px solid white;
        border-radius: 20px;
    }
    .cards{
        display: grid;
        grid-template-columns: repeat(4 , 1fr);
    }
    .card img{
        width: 183px;
        height: 183px;
        margin-left: 40px;
    }
    .card-body button{
        background: #A5C926;
        width: 120px;
        height: 30px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 55px;
        border-radius: 20px;
    }
    .card-title{
        font-weight: 100;
    }
    @media (max-width: 500px){
        .container{
        margin-bottom: 60px;
        }
        .dftexts{
            display: flex;
            justify-content: space-between;
            border: 2px solid white;
            border-bottom: black;
            margin-bottom: 30px;
        }
        .p{
            display: flex;
            margin-top: 17px;
            margin-left: -8px;
        }   
        .p i{
            margin-top: 7px;
            margin-left: 5px;
        }
        .chiziq{
            width: 100%;
            background: #E5E5E5;
            height: 2px;
        }
        .card{
            margin-top: 40px;
            margin: 0 auto;
            text-align: center;
            width: 170px;
            border: 1px solid white;
            border-radius: 20px;
        }
        .cards{
            display: grid;
            grid-template-columns: repeat(2 , 1fr);
            margin-left: -10px;
        }
        .card img{
            width: 183px;
            height: 183px;
            margin-left: 0px;
        }
        .card-body button{
            background: #A5C926;
            height: 30px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 15px;
            border-radius: 20px;
        }
        .card-title{
            font-weight: 100;
        }
    }

`
export default Section3;
