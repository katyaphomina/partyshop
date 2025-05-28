import React from "react";
import {Carousel} from "../../components/Carousel";
import "./index.css"
import filter1 from "./../../images/carousel/filter1.png";
import filter2 from "./../../images/carousel/filter2.png";
import filter3 from "./../../images/carousel/filter3.png";
import frame1 from "./../../images/carousel/Frame234.png"
import frame2 from "./../../images/carousel/Frame 237.png"
import frame3 from "../../images/carousel/Frame238.png"
import frame4 from "./../../images/carousel/Frame 239.png"
import temp1 from "./../../images/carousel/Frame 234.png"
import temp2 from "./../../images/carousel/Frame 235.png"
import temp3 from "./../../images/carousel/Frame 236.png"
import a from "./../../images/carousel/Frame 238.png"

export const Partyplan = () => {
    const carousel1 = [filter1, filter2, filter3];
    const carousel2 = [frame1, frame2, frame3, frame4];
    const carousel3 = [temp1, temp2, temp3];
    const carousel4 = [a,a,a];

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
                        {/*/!*<a>Учесть все ваши предпочтения и ограничения:</a>*!/ TODO*/}
                        <div className="carousel"><Carousel images={carousel1}/></div>
                        <div className="description">Заполните первичные фильтры:
                            <ul>
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