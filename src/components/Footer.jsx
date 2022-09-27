import React from 'react';
import styled from 'styled-components';

const Footer8 = () => {
  return(
    <Footer>
        <div className="divid">
            <div className="container">
                <div className="dfup">
                    <h4>ToyStore</h4>
                    <ul className='texts'>
                        <li>Home</li>
                        <li>Catalog</li>
                        <li>Delivery</li>
                        <li>About</li>
                        <li>Contacts</li>
                    </ul>
                    <ul className='iconomies'>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-pinterest"></i>
                        <i class="fab fa-youtube"></i>
                    </ul>
                </div>
                <hr />
                <div className="down">
                    <p>Created with love by  Elastic Themes</p>
                    <ul>
                        <li>Powered by</li>
                        <li>Webflow</li>
                        <li>Style Guide</li>
                        <li>Licensing</li>
                    </ul>
                </div>
            </div>
        </div>
    </Footer>
  )
};
const Footer = styled.div`
    .divid{
        color: white;
        margin-top: 50px;
        position: absolute;
        width: 100%;
        height: 50vh;
        background-color: #A5C926;
    }
    .dfup{
        margin-top: 30px;
        margin-bottom: 60px;
        display: flex;
        justify-content: space-between;
    }
    .texts{
        display: flex;
        justify-content: space-around;
        width: 400px;
    }
    .dfup ul{
        list-style: none;
    }
    .iconomies{
        display: flex;
        justify-content: space-around;
        width: 140px;
        margin-left: 105px;
        margin-top: 20px;

    }
    .down{
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
    }
    .down ul{
        list-style: none;
        display: flex;
        justify-content: space-around;
        width: 400px;
    }

    @media (max-width: 500px){
        .divid{
            color: white;
            margin-top: 50px;
            position: absolute;
            width: 100%;
            height: 40vh;
            background-color: #A5C926;
        }
        .dfup{
            margin-top: 30px;
            margin-bottom: 60px;
            display: block;
            justify-content: space-between;
        }
        .dfup h4{
            text-align: center;
        }
        .texts{
            display: flex;
            justify-content: space-around;
            width: 400px;
            margin: 0 auto;
            margin-top: 20px;
        }
        .dfup ul{
            list-style: none;
        }
        .iconomies{
            display: flex;
            justify-content: space-around;
            width: 200px;
            margin: 0 auto;
            text-align: center;
            margin-top: 30px;
        }
        .down{
            margin-top: 50px;
            display: block;
            justify-content: space-between;
            margin: 0 auto;
            text-align: center;
        }
        .down p{
            margin-left: 50px;
        }
        .down ul{
            list-style: none;
            display: flex;
            justify-content: space-around;
            width: 400px;
            margin: 0 auto;
            text-align: center;
        }
    }
`
export default Footer8;