import React from "react";
import styled from "styled-components";
import leftbgg from "../images/teddy.png";
import rightbgg from "../images/sunflower.png";
import { useTranslation } from "react-i18next";

const Section = () =>{
    const { t} = useTranslation();

    return(
        <Section1>
            <div className="df-card">
                <div className="left">
                    <img src={leftbgg} alt="" />
                    <div className="dfdfdf">
                        <div><h3>{t("description.part9")}</h3></div>
                        <div><button className="dfdf-btn">{t("description.part10")}</button></div>
                    </div>
                </div>
                <div className="right">
                    <div className="dfdfdf">
                        <div><h3>{t("description.part11")}</h3></div>
                        <div><button className="dfdf-btn">{t("description.part10")}</button></div>
                    </div>
                    <img src={rightbgg} alt="" />
                </div>
            </div>
        </Section1>
    )
};

const Section1 = styled.div`
    width: 100%;
    .df-card{
        margin-left: 10px;
        margin-top: 120px;
        margin-bottom: 120px;
        display: flex;
        justify-content: space-around;
    }
    .left{
        width: 510px;
        height: 188px;
        background: #FFC12C;
        border: 1px solid #FFC12C;
        border-radius: 20px;
        display: flex;
        
    }
    .right{
        display: flex;
        justify-content: space-around;
        width: 510px;
        height: 188px;
        background: #FB416B;
        border: 1px solid #FB416B;
        border-radius: 20px;
    }
    .left img{
        margin-top: -58px;
    }
    .right img{
        margin-top: -58px;
    }
    .dfdfdf h3{
        color: white;
        font-family: Arial, Helvetica, sans-serif;
    }
    .dfdfdf{
        margin-top: 30px;
    }
    .dfdf-btn{
        border: 1px solid white;
        border-radius: 20px;
        width: 112px;
        height: 40px;
        margin-top: 10px;
    }

    @media (max-width: 500px){
        .df-card{
            margin-left: 40px;
            margin-top: 120px;
            margin-bottom: 120px;
            display: block;
            justify-content: space-around;
        }
        .left{
            width: 400px;
            height: 188px;
            background: #FFC12C;
            border: 1px solid #FFC12C;
            border-radius: 20px;
            display: flex;
        }
        .right{
            margin-top: 50px;
            display: flex;
            justify-content: space-around;
            width: 400px;
            height: 188px;
            background: #FB416B;
            border: 1px solid #FB416B;
            border-radius: 20px;
        }
        .left img{
            margin-top: -58px;
        }
        .right img{
            margin-top: -58px;
        }
        .dfdfdf h3{
            color: white;
            font-family: Arial, Helvetica, sans-serif;
        }
        .dfdfdf{
            margin-top: 30px;
        }
        .dfdf-btn{
            border: 1px solid white;
            border-radius: 20px;
            width: 112px;
            height: 40px;
            margin-top: 10px;
        }

    }

`

export default Section;