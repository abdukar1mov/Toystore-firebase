import React from 'react';
import styled from 'styled-components';
import akmalpicture from '../images/chelavekpavuk.png'

const Section5 = () => {
  return(
      <Section>
        <div className="container">
            <div className="texts">
                <p>Made for Webflow</p>
                <h2>Simple and Colorful Ecommerce <br /> Template for Your Business</h2>
            </div>
            <div className="dfdff">
                <div className="left">
                    <h1>Available for FREE!</h1>
                    <div className="green71"></div>
                    <p>A successful marketing plan relies heavily on the pulling-power of <br /> advertising copy. Writing result-oriented ad copy is difficult, as it <br /> must appeal to, entice, and convince consumers to take action. <br /> There is no magic formula to write perfect ad copy</p>
                    <button className='btn'>GET IT NOW!</button>
                </div>
                <img src={akmalpicture} alt="" />
            </div>
          </div>
      </Section>
  )
};
const Section = styled.div`
    width: 100%;
    .container{
        margin-bottom: 50px;
    }
    .texts{
        text-align: center;
        font-weight: 100;
    }
    .green71{
        width: 100px;
        height: 2px;
        background: #A5C926;
        margin-bottom: 20px;
    }
    .dfdff{
        margin-top: 80px;
        display: flex;
        justify-content: space-between;
    }
    .btn{
        background: #A5C926;
        border-radius: 20px;
        color: white;
    }
    .left h1{
        font-weight: 600;
        margin-bottom: 20px;
        margin-top: 100px;
    }
    @media (max-width: 500px){
        .container{
            margin-bottom: 50px;
        }
        .texts{
            text-align: center;
            font-weight: 100;
        }
        .green71{
            width: 100px;
            height: 2px;
            background: #A5C926;
            margin-bottom: 20px;
        }
        .dfdff{
            margin-top: 80px;
            display: block;
            justify-content: space-between;
        }
        .btn{
            background: #A5C926;
            border-radius: 20px;
            margin-left: 120px;
            margin-bottom: 30px;
            color: white;
        }
        .left h1{
            font-weight: 600;
            margin-bottom: 20px;
            margin-top: 100px;
        }
        .dfdff img{
            width: 100%;
        }
    }
`

export default Section5;
