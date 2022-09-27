import React from 'react';
import styled from 'styled-components';

export const Section6 = () => {
  return(
    <Section>
        <div className="container">
            <div className="dfffff">
                <div className="left">
                    <button>
                        <i class="fab fa-telegram-plane fa-2x"></i>
                    </button>
                    <h4>Subscribe to our newsletter <br /> and get <span>10% discount!</span></h4>
                </div>
                <div className="right">
                    <input type="text" />
                    <button></button>
                </div>
            </div>
        </div>
    </Section>
  )
};
const Section = styled.div`
    width: 100%;
    .dfffff{
        background: white;
        display: flex;
        justify-content: space-between;
    }
    .left button{
        margin-bottom: 40px;
        width: 64px;
        height: 64px;
        background: #A5C926;
        border: 1px solid #A5C926;
    }
    .fab{
        color: white;
    }
    .left{
        display: flex;
        margin-top: 40px;
    }
    .right input{
        width: 350px;
        height: 40px;
        border: 1px solid black;
        border-radius: 20px;
    }
    .right button{
        width: 150px;
        margin-left: 5px;
        height: 40px;
        border: 1px solid #A5C926;
        border-radius: 20px;
        background: #A5C926;
    }
    .right{
        display: flex;
        margin-top: 50px;
    }
    .left h4{
        font-weight: 400;
        margin-left: 10px;
    }
    .left h4 span{
        color: #A5C926;
    }
    @media (max-width: 500px){
        .dfffff{
            background: white;
            display: block;
            justify-content: space-between;
        }
        .left button{
            margin-bottom: 40px;
            width: 64px;
            height: 64px;
            background: #A5C926;
            border: 1px solid #A5C926;
        }
        .fab{
            color: white;
        }
        .left{
            display: flex;
        }
        .right input{
            width: 350px;
            height: 40px;
            border: 1px solid black;
            border-radius: 20px;
        }
        .right button{
            width: 150px;
            margin-left: 5px;
            height: 40px;
            border: 1px solid #A5C926;
            border-radius: 20px;
            background: #A5C926;
        }
        .right{
            display: flex;
            margin-top: 10px;
        }
        .left h4{
            font-weight: 400;
            margin-left: 10px;
        }
        .left h4 span{
            color: #A5C926;
        }
    }
`
export default Section6;
