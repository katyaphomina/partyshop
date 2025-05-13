import "./index.css"
import map from './../../images/map.svg'
import heart from './../../images/heart.png'
import user from './../../images/user.png'

export const Header = () => {
    return (
        <div className="header-container">
            <header>
                <nav className="navbar">
                    <ul className="navbar_city">

                        <li>
                            <img src={map} alt="map"/>
                            Казань</li>
                        <div className="search-input">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M10,2A8,8,0,1,1,2,10,8,8,0,0,1,10,2m0,2A6,6,0,1,0,16,10,6,6,0,0,0,10,4m8.71,13.29-3.4-3.39a8,8,0,1,1,1.41-1.41l3.39,3.4a1,1,0,1,1-1.41,1.41Z"/>
                            </svg>
                            <input type="text" placeholder="Поиск"/>
                        </div>
                    </ul>
                    <ul className="navbar_menu">
                        <li>Каталог</li>
                        <li>Идеи</li>
                        <li>Partyplan</li>
                        <li><img src={heart} alt="heart"/></li>
                        <li><img src={user} alt="user"/></li>
                        <li>Вход<br/>Регистрация</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

