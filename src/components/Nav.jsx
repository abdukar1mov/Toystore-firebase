import React from "react";
import Styled from "styled-components";
import { useTranslation } from "react-i18next";
import { auth } from "../config/firebase";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <Navbar1>
      <div className="up">
        <div className="container">
          <div className="left">
            <ul>
              <div>
                {t("description.part3")}
                <li></li>
              </div>
              <li>Email: toystore@template.com</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-pinterest"></i>
              <i class="fab fa-youtube"></i>
            </ul>
          </div>
        </div>
      </div>
      <div className="down">
        <div className="container">
          <div className="left-2">
            <ul className="ulli">
              <h3>ToyStore</h3>
              <div className="lila">
                <div>
                  {t("description.part4")}
                  <li></li>
                </div>
                <div>
                  {t("description.part5")}
                  <li></li>
                </div>
                <div>
                  {t("description.part6")}
                  <li></li>
                </div>
                <div>
                  {t("description.part7")}
                  <li></li>
                </div>
                <button onClick={() => changeLanguage("en")}>EN</button>
                <button onClick={() => changeLanguage("ru")}>RU</button>
              </div>
            </ul>
          </div>
          <div className="right-2">
            <button className="btn" onClick={() => auth.signOut()}>
              Log Out
            </button>
            <div>
              <h3>{t("description.part8")}</h3>
            </div>
            <i class="far fa-shopping-cart"></i>
            <i class="fab fa-creative-commons-zero"></i>
          </div>
        </div>
      </div>
    </Navbar1>
  );
};

const Navbar1 = Styled.div`
    width: 100%;
    .btn{
        width: 100px;
        height: 40px;
        border: 1px solid black;
        margin: 0px 20px; 
    }
    .container .right-2 i{
        margin-top: 12px;
    }
    .far{
        margin-right: 10px;
    }
    .ulli{
        width: 100%;
    }
    .lila{
        display: flex;
        justify-content: space-around;
        width: 400px;
        margin: 0 auto;
        margin-top: 7px;
    }
    .left-2 ul li{
        margin-top: 6px;
    }
    .container{
        display: flex;
        justify-content: space-between;
    }
    .up{
        color: white;
        height: 30px;
        background: #A5C926;
        display: flex;
        justify-content: space-between;
    }
    .up .fab{
        color: white;
    }
    .left ul{
        display: block;
        justify-content: space-around;
        width: 500px;
        list-style: none;
    }
    .right ul{
        margin-top: 5px;
        display: flex;
        justify-content: space-around;
        width: 200px;
    }
    .down{
        margin-top: 20px;
    }
    .down ul{
        list-style: none;
        display: flex;
        justify-content: space-around;
        width: 500px;
    }
    .down .fab{
        color: #A5C926;
    }
    .le
    .right-2{
        display: flex;
        justify-content: space-around;
        width: 120px;
    }
    .right-2 i{
        margin-top: 5px; 
    }
    .container .right-2{
        display: flex;
    }

    @media (max-width: 500px){
        .ulli{
            text-align: center;
            margin: 0;
            padding: 0;
        }
        h1{
            padding: 0;
            margin: 0;
            width: 100%;
        }
        .container .right-2 i{
            margin-top: 12px;
        }
        .far{
            margin-right: 10px;
            margin-left: -10px;
        }
        .container .right-2 h3{
            margin-right: 20px;
        }
        .left-2 ul li{
            margin-top: 6px;
        }
        .container{
            display: block;
            justify-content: space-between;
        }
        .up{
            color: white;
            height: 30px;
            background: #A5C926;
            display: flex;
            justify-content: space-between;
        }
        .up .fab{
            color: white;
        }
        .left ul{
            display: block;
            justify-content: space-around;
            width: 100%;
            list-style: none;
        }
        .right ul{
            margin-top: 5px;
            display: block;
            justify-content: space-around;
            width: 200px;
        }
        .down{
            margin-top: 20px;
        }
        .down ul{
            list-style: none;
            display: block;
            justify-content: space-around;
            width: 100%;
        }
        .down .fab{
           color: #A5C926;
        }
        .right-2{
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }
    }
`;

export default Navbar;
