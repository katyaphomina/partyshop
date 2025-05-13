import "./index.css";
import React, {useState} from "react";
import cinema from "../../images/cinema.png";
import concert from "../../images/concert.jpeg";
import theatre from "../../images/theatre.jpeg";
import kids from "../../images/kids.jpeg";
import exhibitions from "../../images/exhibitions.jpeg";
import {MyCalendar} from "../Calendar";
import search from "../../images/Search.svg";

interface Tab {
    name: string;
    image: string;
    options: string[];
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
    ]
},
    {name: "Концерты", image: concert, options: ["Площадки", "Жанр", "Скидки", "Пушкинская карта"]},
    {name: "Театр", image: theatre, options: ["Театр", "Жанр", "Детям", "Пушкинская карта"]},
    {name: "Детям", image: kids, options: ["Возраст", "Вид", "Пушкинская карта"]},
    {name: "Выставки", image: exhibitions, options: ["Тема", "Детям"]},
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

    const handleLike = (id: string) => {
        setLiked((prev) => ({
            ...prev,
            [id]: !prev[id],
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
                        <li key={option}>{option}</li>
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
