import React from "react";
import {Carousel} from "../Carousel";
import "./index.css"
import filter1 from "./../../images/carousel/filter1.png";
import filter2 from "./../../images/carousel/filter2.png";
import filter3 from "./../../images/carousel/filter3.png";

export const Partyplan = () => {
    const carousel1 = [filter1, filter2, filter3];
    const carousel2 = [filter1, filter2, filter3];
    const carousel3 = [filter1, filter2, filter3];
    const carousel4 = [filter1, filter2, filter3];

    return (
        <div className="partyplan">
            <div className="container">
                <ul>
                    <li className="category-header">всё</li>
                    <li className="top__down">что Вам нужно для легкой организации любого события</li>
                </ul>
                <ul className="box__logo__text">
                    <li className="box__logo__text__party">PARTY</li>
                    <li className="box__logo__text__plan">PLAN</li>
                </ul>
                <ul>
                    <li className="category-header">ЭТО УДОБНЫЙ ИНСТРУМЕНТ ПЛАНИРОВАНИЯ</li>
                    <li className="top__down">который позволит Вам</li>
                </ul>
                <div className="container_partyplan">
                    <div className="instructions">
                        <div className="carousel"><Carousel images={carousel1}/></div>
                        <div className="description">Заполните первичные фильтры:
                            <ul>
                                {/*<li>Заполните первичные фильтры:</li>*/}
                                <li>    тип события</li>
                                <li>    события</li>
                                <li>    бюджет</li>
                                <li>    количетсво-гостей</li>
                            </ul>
                        </div>
                    </div>
                    <div className="instructions">
                        <div className="description">
                            Подобрать площадки и услуги идеально подходящие для Вас
                        </div>
                        <div className="carousel"><Carousel images={carousel2}/></div>
                    </div>
                    <div className="instructions">
                        <div className="carousel"><Carousel images={carousel3}/></div>
                        <div className="description">
                            Удобно взаимодействовать с исполнителями, расчитать бюджет и не забыть детали
                        </div>
                    </div>
                    <div className="instructions">
                        <div className="description">
                            Пригласить друзей для совместного управления
                        </div>
                        <div className="carousel"><Carousel images={carousel4}/></div>
                    </div>

                </div>
            </div>
        </div>
    )
}