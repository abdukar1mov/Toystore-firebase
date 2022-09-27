import React from 'react';
import styled from "styled-components";
import background from "../images/toys-p-1.png";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t} = useTranslation();
    return(
        <Header1>
            <div className="header-bg">
                <div className="container">
                    <div className="card">
                        <div><p>{t("description.part12")}</p></div>
                        <div><h1>{t("description.part13")} <br />{t("description.part14")} </h1></div>
                        <button className='card-btn'>Open Catalog</button>
                    </div>
                </div>
            </div>
        </Header1>
    )
}

const Header1 = styled.div`
    width: 100%;
    .header-bg{
        background: url(${background}) no-repeat center center/cover;
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .card{
        display: flex;
        text-align: center;
        border: 1px solid white;
        border-radius: 20px;
        margin: 0 auto;
        width: 570px;
        height: 308px;
    }
    .card p{
        margin-top: 40px;
        color: #A5C926;
    }
    .card h1{
        font-size: 41px;
    }
    .card button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 153px;
        height: 48px;
        border: 1px solid #A5C926;
        border-radius: 24px;
        background: #A5C926;
    }
    .card-btn{
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        margin-top: 20px;

    }
    @media (max-width: 500px){
        .header-bg{
            background: url(${background}) no-repeat center center/cover;
            width: 100%;
            height: 90vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .card{
            display: flex;
            text-align: center;
            border: 1px solid white;
            border-radius: 20px;
            margin-left: 60px;
            width: 350px;
            height: 308px;
        }
        .card p{
            margin-top: 40px;
            color: #A5C926;
        }
        .card h1{
            font-size: 41px;
        }
        .card button{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 90px;
            width: 153px;
            height: 48px;
            border: 1px solid #A5C926;
            border-radius: 24px;
            background: #A5C926;
        }
        .card-btn{
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 200px;
            margin-top: 20px;
        }  
    }
`
export default Header;