import "./index.css";
import React, { useState } from "react";
import everything from "../../images/everything.png";
import personal from "../../images/personal.jpeg";
import corporate from "../../images/corporate.jpeg";
import cultural from "../../images/cultural.jpeg";
import education from "../../images/education.jpeg";
import sport from "../../images/sport.jpeg"
import search from "../../images/Search.svg";

interface Tab {
    name: string;
    image: string;
}

interface Card {
    id: string;
    title: string;
    subtitle: string;
    likes: string;
    image: string;
}

const tabs: Tab[] = [
    { name: "Все", image: everything},
    { name: "Личные", image: personal },
    { name: "Корпоративные", image: corporate },
    { name: "Культурные", image: cultural },
    { name: "Образовательные", image: education },
    { name: "Спортивные", image: sport },
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
                    <li className="top__down">что уже организовали с помощью PARTYSHOP</li>
                </ul>
                <form className="search__form">
                    <input className="search__input" type="text" placeholder="поиск"/>
                    <img src={search} alt={"search"}/>
                </form>
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
