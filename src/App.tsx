import React from 'react';
import './App.css';
import {City, EventMenu, Header, Events, Partyplan, Partymaker, Footer} from './components'
import arrow from './images/Arrow.svg'
import line from './images/line.svg'



function App() {
  return (
      <>
          <div className="intro__container">
              <Header/>
              <div className="main__logo">
                  PARTYSHOP
              </div>
              <img src={line} alt="line"/>
              <div className="main__description">
                  Праздник? Легко!
              </div>

              <div className="boxes">
                  <div className="box__full">
                      СПЛАНИРОВАТЬ СОБЫТИЕ
                      <div className="box">
                          <div className="box__logo">
                              <ul className="box__logo__text">
                                  <li className="box__logo__text1">PARTY</li>
                                  <li className="box__logo__text2">PLAN</li>
                              </ul>
                          </div>
                          <div className="box__desc">
                              <ul className="box__menu">
                                  <li className="box__menu__item">Упростите организацию мероприятий</li>
                              </ul>
                              <button className="box__desc__btn1">в план</button>
                          </div>
                      </div>
                  </div>

                  <div className="box__full">
                      РАЗМЕСТИТЬ УСЛУГИ
                      <div className="box">
                          <div className="box__logo">
                              <ul className="box__logo__text">
                                  <li className="box__logo__text1">PARTY</li>
                                  <li className="box__logo__text3">MAKER</li>
                              </ul>
                          </div>
                          <div className="box__desc">
                              <ul className="box__menu">
                                  <li className="box__menu__item">Позвольте клиентам воспользоваться Вашими услугами</li>
                              </ul>
                              <button className="box__desc__btn2">в свой кабинет</button>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="main__footer">
                  <li>У нас есть всё</li>
                  <li>для Вашего события</li>
              </div>
              <img className="arrow" src={arrow} alt = "arrow"/>
          </div>
          <EventMenu/>
          <City/>
          <Events/>
          <Partyplan/>
          <Partymaker/>
          <Footer/>
      </>
  );
}


export default App;
