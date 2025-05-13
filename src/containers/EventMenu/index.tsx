import React, { useState } from "react";
import "./index.css";
import "./search.css"
import arrowDown from '../../images/arrow-down.svg';
import arrowUp from '../../images/arrow-up.svg';
import search from '../../images/Search.svg';

type Category = {
    title: string;
    items: string[];
};

const categories: Category[] = [
    {
        title: "Еда",
        items: ["Рестораны / кафе", "Кейтеринг", "Кондитерские"],
    },
    {
        title: "Места",
        items: [
            "Открытые площадки",
            "Лофты",
            "Загородные дома",
            "Квартиры / апартаменты",
            "Конференц-залы / залы для тренингов",
            "Залы для выставок",
            "Концертные залы / кинозалы",
            "Фотостудии",
            "Клубы",
            "Спортивные площадки",
            "Спецплощадки",
        ],
    },
    {
        title: "Услуги",
        items: [
            "Фотографы / видеографы",
            "Ведущие / организаторы",
            "Декораторы",
            "Артисты / музыканты",
            "Аниматоры",
            "Стилисты",
            "Переводчики",
            "Охранники",
            "Дизайнеры",
            "Координаторы",
            "PR-специалисты",
            "Кейтеринг",
            "Клининг",
            "Спортивные специалисты",
            "Преподаватели мастер-классов",
        ],
    },
    {
        title: "Атрибуты",
        items: [
            "Аренда оборудования",
            "Игры и игровое оборудование",
            "Аренда костюмов",
            "Декор",
            "Подарки для гостей",
            "Тематика и текстиль",
        ],
    },
    {
        title: "Транспорт",
        items: [
            "Прокат автомобилей",
            "Аренда транспорта для гостей",
            "Такси и трансферы",
            "Профессиональные водители",
        ],
    },
    {
        title: "Прочее",
        items: [
            "Прочее"
        ]
    }
];



export const EventMenu = () => {
    const [openStates, setOpenStates] = useState<boolean[]>(
        Array(categories.length).fill(false)
    );

    const toggleIndex = (index: number) => {
        setOpenStates(prev => {
            const newStates = [...prev];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    return (
        <div className="menu__container">
            <div className="container">
                <div className="top">
                    <ul>
                        <li className="category-header">всё</li>
                        <li className="top__down">что вам нужно для мероприятия</li>
                    </ul>
                    <div className="top__desc__search">
                        <form className="search__form">
                            <input className="search__input" type="text" placeholder="поиск"/>
                            <img src={search} alt={"search"}/>

                        </form>
                        <button className="write-to-us-button">Смотреть Всё</button>
                    </div>
                </div>
                {categories.map((category, index) => (
                    <div key={category.title} className="category">
                        <div className="category-header" onClick={() => toggleIndex(index)}>
                            {category.title}
                            <span className="category-icon">

                <img
                    src={openStates[index] ? arrowUp : arrowDown}
                    alt="toggle"
                    className="category-icon"
                />
                </span>
                        </div>
                        {openStates[index] && (
                            <ul className="category-items">
                                {category.items.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
