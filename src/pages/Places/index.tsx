import React, {useState, useRef, useEffect} from "react";
import line from "../../images/line.svg";
import "./index.css";
import place1 from "../../images/places/place1.png";
import place2 from "../../images/places/place2.png";
import place3 from "../../images/places/place3.png";
import place4 from "../../images/places/place4.png";
import arrowUp from "../../images/mini-vector-up.svg";
import arrowDown from "../../images/mini-vector-down.svg";
import {Footer, Header} from "../../components";
import {Link} from "react-router-dom";

interface Tab {
    name: string;
    image?: string;
    options?: string[];
    dropdown?: Record<string, string[]>;
}

interface Card {
    id: string;
    title: string;
    subtitle: string;
    rating: string;
    image?: string;
}

const tabs: Tab[] = [
    {
        name: "Площадки",
        image: place1,
        options: ["Бюджет", "Количество гостей", "Дата"],
        dropdown: {
            "Бюджет": ["до 10 000 руб.", "10 000-50 000 руб.", "50 000-100 000 руб.", "от 100 000 руб."],
            "Количество гостей": ["до 10 человек", "10-50 человек", "50-100 человек", "от 100 человек"],
        }
    },
    {name: "Услуги"},
    {name: "Аттрибуты"},
    {name: "Транспорт"},
    {name: "Прочее"}
];

const staticCards: Card[] = [
    { id: "static-1", title: "Место 1", subtitle: "Описание места", rating: "8.2", image: place1 },
    { id: "static-2", title: "Место 2", subtitle: "Описание места", rating: "8.5", image: place2 },
    { id: "static-3", title: "Место 3", subtitle: "Описание места", rating: "8.0", image: place3 },
    { id: "static-4", title: "Место 4", subtitle: "Описание места", rating: "8.7", image: place4 },
    { id: "static-1", title: "Место 5", subtitle: "Описание места", rating: "8.0", image: place3 },
    { id: "static-2", title: "Место 6", subtitle: "Описание места", rating: "8.3", image: place4 },
    { id: "static-3", title: "Место 7", subtitle: "Описание места", rating: "8.2", image: place1 },
    { id: "static-4", title: "Место 8", subtitle: "Описание места", rating: "8.1", image: place2 },
];


const allImages = [place1, place2, place3, place4];

export const Places = () => {
    const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);
    const [openStates, setOpenStates] = useState<Record<string, boolean>>({});
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [showCalendar] = useState<boolean>(false);
    const [cards, setCards] = useState<Card[]>([]);
    const dateInputRef = useRef<HTMLInputElement>(null);
    const [liked, setLiked] = useState<Record<string, boolean>>({});

    useEffect(() => {
        if (showCalendar && dateInputRef.current) {
            dateInputRef.current.showPicker?.();
            dateInputRef.current.focus();
        }
    }, [showCalendar]);

    useEffect(() => {
        // При первой загрузке: все карточки с place1
        if (selectedTab.name === "Площадки") {
            generateInitialCards();
        } else {
            setCards([]); // Скрывать карточки на других вкладках
        }
    }, [selectedTab]);

    const generateInitialCards = () => {
        const newCards = Array.from({length: 8}).map((_, index) => ({
            id: `Площадки-${index}`,
            title: `Площадки мероприятие ${index + 1}`,
            subtitle: "Описание события",
            rating: (7 + Math.random()).toFixed(1),
            image: place1,
        }));
        setCards(newCards);
    };

    const generateRandomCards = () => {
        const newCards = Array.from({length: 8}).map((_, index) => ({
            id: `Площадки-${index}`,
            title: `Площадки мероприятие ${index + 1}`,
            subtitle: "Описание события",
            rating: (7 + Math.random()).toFixed(1),
            image: allImages[Math.floor(Math.random() * allImages.length)],
        }));
        setCards(newCards);
    };

    const handleLike = (id: string) => {
        setLiked((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const handleTabClick = (tab: Tab) => {
        if (tab.name === "Площадки") {
            setSelectedTab(tab);
        }
    };

    const handleToggleMenu = (option: string) => {
        setOpenStates((prevState) => ({
            ...prevState,
            [option]: !prevState[option],
        }));
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header/>
            <div className="places">
                <div className="main__logo">
                    <Link to={"/partyshop"}>PARTYSHOP</Link>
                </div>
                <img src={line} alt="line"/>
                <div className="main__description">Праздник? Легко!</div>
                <div className="places-container">
                    <ul>
                        <li className="category-header">всё</li>
                        <li className="top__down">что вам нужно для мероприятия</li>
                    </ul>
                    <div className="tabs">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                className={`tab-button ${selectedTab.name === tab.name ? "active" : ""}`}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>
                    {selectedTab.name === "Площадки" && (
                        <div className="mini_tabs">
                            <ul className="mini_tabs_items">
                                {selectedTab.options?.map((option) => (
                                    <li key={option}>
                                        {option === "Дата" ? (
                                            <input
                                                type="date"
                                                className="date-input"
                                                value={selectedDate}
                                                onChange={(e) => setSelectedDate(e.target.value)}
                                            />
                                        ) : (
                                            <>
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
                                            </>
                                        )}
                                    </li>
                                ))}
                                <li>
                                    <input className={"submit-filter"} type="submit" value={"Применить фильтр"}
                                           onClick={generateRandomCards}
                                           tabIndex={-1}
                                           autoComplete="off"/>
                                </li>
                            </ul>
                        </div>
                    )}
                    <div className="places__menu">
                        Кафе
                        <img src={arrowDown} alt={"arrowDown"}/>
                    </div>
                    <div className="main-section">
                        <div className="main-section-header">Кафе под ваши предпочтения в Казани</div>
                        <div className="cards">
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
                    <div className="main-section">
                        <div className="main-section-header">Смотрите ещё в Казани</div>
                        <div className="cards">
                            {staticCards.map((card) => (
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
                    <button className="box__desc__btn1">в план</button>
                </div>
            </div>
            <Footer/>
        </>
    );
};
