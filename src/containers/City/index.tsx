import "./index.css";
import React, {useState} from "react";
import cinema from "../../images/cinema.png";
import concert from "../../images/concert.jpeg";
import theatre from "../../images/theatre.jpeg";
import kids from "../../images/kids.jpeg";
import exhibitions from "../../images/exhibitions.jpeg";
import {MyCalendar} from "../Calendar";
import search from "../../images/Search.svg";
import sport from "../../images/sport.jpeg"
import standup from "../../images/standup.jpeg"
import arrowDown from "../../images/arrow-down.svg";
import arrowUp from "../../images/arrow-up.svg";

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
    rating: string;
    image: string;
}

const tabs: Tab[] = [{
    name: "Кино",
    image: cinema,
    options: [
        "Кинотеатр",
        "Жанр",
        "Премьера",
        "Детям"
    ],
    dropdown: {
        "Кинотеатр": ["Киномакс", "Синема 5", "Алмаз", "Корстон", "Родина"],
        "Жанр": ["Боевик", "Детектив", "Драма", "Комедия", "Мелодрама"]
    }
},
    {name: "Концерты", image: concert, options: ["Площадки", "Жанр", "Скидки", "Пушкинская карта"], dropdown: {
            "Жанр": ["Поп", "Рок", "Хип-Хоп", "Джаз", "Классика"],
            "Площадки": ["Уникс", "Пирамида", "Татнефть-Арена", "Корстон", "Филармония"]
        }},
    {name: "Театр", image: theatre, options: ["Театр", "Жанр", "Детям", "Пушкинская карта"], dropdown:{
            "Театр":["MON", "Театр им. Качалова", "Театр им. Камала", "Экият", "Театр на Булаке"],
            "Жанр":["Комедия", "Мюзикл", "Балет", "Драма", "Опера"]
        }},
    {name: "Детям", image: kids, options: ["Возраст", "Вид", "Пушкинская карта"], dropdown:{
            "Возраст":["от 0 до 2 лет", "от 3 до 6 лет", "от 7 до 10 лет", "от 11 лет"],
            "Вид":["Кино", "Театр", "Концерт", "Цирк", "Выставка"]
        }},
    {name: "Выставки", image: exhibitions, options: ["Тема", "Детям"], dropdown:{
            "Тема":["Живопись", "Современное", "История", "Фотограия", "Скульптура"]
        }},
    {name: "Спорт", image: sport, options: ["Вид", "Стадион"],dropdown:{
            "Вид":["Футбол", "Хоккей", "Баскетбол", "Бокс", "Волейлбол"],
            "Стадион":["Татнефть-арена", "Ак Барс Арена", "Рубин", "Трудовые резервы", "КАИ Олимп"]
        }},
    {name: "Стендап", image: standup, options: []},
    {name: "Еще", image: exhibitions, options: ["Скидки", "Квесты", "Шоу","Лекции", "Мастер-классы"]},
];

const generateCards = (tabName: string, image: string): Card[] =>
    Array.from({length: 6}).map((_, index) => ({
        id: `${tabName}-${index}`,
        title: `${tabName} мероприятие ${index + 1}`,
        subtitle: "Описание события",
        rating: (7 + Math.random()).toFixed(1),
        image,
    }));

export const City = () => {
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
                    <li className="top__down">что происходит в вашем городе сейчас</li>
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
                    <MyCalendar/>
                    {cards.map((card) => (
                        <div className="card" key={card.id}>
                            <div className="image-wrapper">
                                <img className="city__img" src={card.image} alt="img"/>
                                <div className="rating">{card.rating}</div>
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
