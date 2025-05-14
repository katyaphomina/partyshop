import React from "react";
import {Carousel} from "../Carousel";
import "./index.css"
import graybackground from "./../../images/carousel/graybackground.png";

export const Partymaker = () => {
    const carousel1 = [graybackground, graybackground, graybackground];
    const carousel2 = [graybackground, graybackground, graybackground];
    const carousel3 = [graybackground, graybackground, graybackground];

    return (
        <div className="partyplan">
            <div className="container">
                <ul>
                    <li className="category-header">всё</li>
                    <li className="top__down">что Вам нужно для продвижения услуг</li>
                </ul>
                <ul className="box__logo__text">
                    <li className="box__logo__text__party1">PARTY</li>
                    <li className="box__logo__text__maker">MAKER</li>
                </ul>
                <ul>
                    <li className="category-header">ЭТО УДОБНЫЙ ИНСТРУМЕНТ ПРОДВИЖЕНИЯ</li>
                    <li className="top__down">который позволит Вам</li>
                </ul>
                <div className="container_partyplan">
                    <div className="instructions">
                        <div className="carousel"><Carousel images={carousel1}/></div>
                        <div className="description">Текст в разработке
                        </div>
                    </div>
                    <div className="instructions">
                        <div className="description">
                            Текст в разработке
                        </div>
                        <div className="carousel"><Carousel images={carousel2}/></div>
                    </div>
                    <div className="instructions">
                        <div className="carousel"><Carousel images={carousel3}/></div>
                        <div className="description">
                            Текст в разработке
                        </div>
                    </div>
                    <button className="box__desc__btn2">в свой кабинет</button>
                </div>
            </div>
        </div>
    )
}