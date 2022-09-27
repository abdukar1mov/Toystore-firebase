import React from 'react';
import styled from 'styled-components';
import background1 from '../images/background-2.png';

const Section4 = () => {
  return(
    <Section>
        <div className="bg">
            <div className="texts">
                <p>About The Shop</p>
                <h1>Watch Our Story</h1>
                <p>There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement, <br /> demographic, even the consumer’s mood.</p>
                <button className='btntn'><i class="fas fa-play"></i></button>
            </div>
        </div>
    </Section>
  )
};
const Section = styled.div`
    width: 100%;
    .bg{
        display: flex;
        align-items: center;
        text-align: center;
        color: white;
        background: url(${background1}) no-repeat center center/cover;
        width: 100%;
        height: 464px;
        margin-bottom: 70px;
    }
    .texts{
        margin-left: 250px;
    }
    .texts h1{
        font-weight: 200;
    }
    .btntn{
        background: #A5C926;
        border: 1px solid #A5C926;
        color: white;
        width: 64px;
        height: 64px;
    }
    @media (max-width: 500px){
        .bg{
            display: flex;
            align-items: center;
            text-align: center;
            color: white;
            background: url(${background1}) no-repeat center center/cover;
            width: 100%;
            height: 464px;
            margin-bottom: 70px;
        }
        .texts{
            margin-left: 20px;
        }
        .texts h1{
            font-weight: 200;
        }
        .btntn{
            background: #A5C926;
            border: 1px solid #A5C926;
            color: white;
            width: 64px;
            height: 64px;
        }
    }
`
export default Section4;
