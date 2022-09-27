import React from 'react';
import styled from 'styled-components';
import img1 from '../images/grid-1.png'
import img2 from '../images/grid-2.png'
import img3 from '../images/grid-3.png'
import img4 from '../images/grid-4.png'
import img5 from '../images/grid-5.png'
import img6 from '../images/grid-6.png'
const Section7 = () => {
  return(
    <Section>
      <div className="container">
        <div className="up">
          <p>@ElasticThemes</p>
          <h2>We're on Instagram!</h2>
        </div>
        <div className="down">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
        <button className='btn'>See More Photos</button>
      </div>
    </Section>
  )
};

const Section = styled.div`
  width: 100%;
  .up{
    margin-top: 90px;
    text-align: center;
  }
  .up p{
    color: #A5C926;
  }
  .down{
    margin-top: 100px;
    margin-bottom: 100px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }
  .btn{
    width: 173px;
    height: 48px;
    background-color: #A5C926;
    border: 1px solid #A5C926;
    border-radius: 20px;
    color: white;
    margin-left: 470px;
  }
  @media (max-width: 500px){
    .up{
      margin-top: 90px;
      text-align: center;
    }
    .up p{
      color: #A5C926;
    }
    .down{
      margin-top: 100px;
      margin-bottom: 100px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    .down img{
      margin: 0 auto;
    }
    .btn{
     width: 173px;
      height: 48px;
      background-color: #A5C926;
      border: 1px solid #A5C926;
      border-radius: 20px;
      color: white;
      margin-left: 150px;
    }
  }
`
export default Section7;