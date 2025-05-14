import "./index.css";
import React, { useState } from "react";
import everything from "../../images/everything.png";
import personal from "../../images/personal.jpeg";
import corporate from "../../images/corporate.jpeg";
import cultural from "../../images/cultural.jpeg";
import education from "../../images/education.jpeg";
import sport from "../../images/sport.jpeg"
import search from "../../images/Search.svg";
import arrowUp from "../../images/arrow-up.svg";
import arrowDown from "../../images/arrow-down.svg";

interface Tab {
    name: string;
    image: string;
    options: string[];
    dropdown?: Record<string, string[]>;
}

interface Card {
    id: string;
    title: string;
    subtitle: string;
    likes: string;
    image: string;
}

const tabs: Tab[] = [
    { name: "Все", image: everything, options: ["Бюджет", "Количество гостей", "Место"], dropdown:{
            "Бюджет":["до 10 000 руб.", "10 000-50 000 руб.", "50 000-100 000 руб.", "от 100 000 руб."],
            "Количество гостей":["до 10 человек", "10-50 человек", "50-100 человек", "от 100 человек"],
            "Место":["Ресторан/кафе", "Концертный/конференц-зал", "Уличные площадки/парки", "Стадион"]
        }},
    { name: "Личные", image: personal, options: [] },
    { name: "Корпоративные", image: corporate, options: [] },
    { name: "Культурные", image: cultural, options: [] },
    { name: "Образовательные", image: education, options: [] },
    { name: "Спортивные", image: sport, options: [] },
];

const generateCards = (tabName: string, image: string): Card[] =>
    Array.from({ length: 6 }).map((_, index) => ({
        id: `${tabName}-${index}`,
        title: `${tabName} мероприятие ${index + 1}`,
        subtitle: "Описание события",
        likes: ((80 + (Math.random() * 10)).toFixed(0)),
        image,
    }));

export const Events = () => {
    const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);
    const [liked, setLiked] = useState<Record<string, boolean>>({});
    const [openStates, setOpenStates] = useState<Record<string, boolean>>({});
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});


    const handleLike = (id: string) => {
        setLiked((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const handleToggleMenu = (option: string) => {
        setOpenStates((prevState) => ({
            ...prevState,
            [option]: !prevState[option],
        }));
    };
    const cards = generateCards(selectedTab.name, selectedTab.image);


    return (
        <div className="container">
            <div className="top">
                <ul>
                    <li className="category-header">всё</li>
                    <li className="top__down">что уже организовали с помощью PARTYSHOP</li>
                </ul>
                <div className="top__desc__search">
                    <form className="search__form">
                        <input className="search__input" type="text" placeholder="поиск"/>
                        <img src={search} alt={"search"}/>

                    </form>
                    <button className="write-to-us-button">Смотреть Всё</button>
                </div>
            </div>
            <div className="tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        className={`tab-button ${selectedTab.name === tab.name ? "active" : ""}`}
                        onClick={() => setSelectedTab(tab)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            <div className="mini_tabs">
                <ul className="mini_tabs_items">
                    {selectedTab.options.map((option) => (
                        <li key={option}>
                            <button
                                className="option-button"
                                onClick={() => handleToggleMenu(option)}
                            >
                                {selectedOptions[option] || option}
                                {selectedTab.dropdown?.[option] && (
                                    <img
                                        src={openStates[option] ? arrowUp : arrowDown}
                                        alt="toggle"
                                        className="category-icon"
                                    />
                                )}
                            </button>
                            {selectedTab.dropdown?.[option] && openStates[option] && (
                                <ul className="dropdown-menu">
                                    {selectedTab.dropdown[option].map((item) => (
                                        <li key={item}>
                                            <button
                                                className="dropdown-item-button"
                                                onClick={() => {
                                                    setSelectedOptions((prev) => ({
                                                        ...prev,
                                                        [option]: item
                                                    }));
                                                    setOpenStates((prev) => ({
                                                        ...prev,
                                                        [option]: false
                                                    }));
                                                }}
                                            >
                                                {item}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="main-section">
                <h1>{selectedTab.name} в Казани</h1>
                <p>Выберите мероприятие по душе</p>

                <div className="cards">
                    {cards.map((card) => (
                        <div className="card" key={card.id}>
                            <div className="image-wrapper">
                                <img className="city__img" src={card.image} alt="img" />
                                <div className="likes">❤️{card.likes}</div>
                            </div>
                            <p>{card.title}</p>
                            <span>{card.subtitle}</span>
                            <button
                                className={`like-button ${liked[card.id] ? "liked" : ""}`}
                                onClick={() => handleLike(card.id)}
                            >
                                {liked[card.id] ? "❤️" : "🤍"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
