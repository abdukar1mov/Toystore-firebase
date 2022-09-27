import React from 'react';
import styled from 'styled-components';
import image1 from '../images/card-1-img.png';
import image2 from '../images/card-2-img.png';
import image3 from '../images/card-3-img.png';
import image4 from '../images/card-4-img.png';

const Section2 = () => {
  return(
    <Section>
        <div className="container">
            <div className="dftexts">
                <h1>Stuffed Animals</h1>
                <div className="p">
                    <p>See All Toys</p> 
                    <i class="far fa-long-arrow-right"></i>
                </div>
            </div>
            <div className="chiziq"></div>
            <div className="cards">
                <div class="card">
                    <img src={image1} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Teddy Bear</h5>
                        <button type="button" class="btn">$ 30.00 USD</button>
                    </div>
                </div>
                <div class="card">
                    <img src={image2} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Mega Plush Toy</h5>
                        <button type="button" class="btn">$ 38.00 USD</button>
                     </div>
                </div>
                <div class="card">
                    <img src={image3} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Cute Dog</h5>
                        <button type="button" class="btn">$ 24.00 USD</button>
                    </div>
                </div>
                <div class="card">
                    <img src={image4} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Little Friend</h5>
                        <button type="button" class="btn">$ 27.00 USD</button>
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

export default Section2;