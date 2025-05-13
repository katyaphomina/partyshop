import "./index.css"
import map from './../../images/map.svg'
export const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <ul className="navbar_city">
                    <img src={map} alt="map"/>
                    <li>Казань</li>
                </ul>
                <ul className="navbar_menu">
                    <li>Каталог</li>
                    <li>Планировщик</li>
                    <li>Афиша</li>
                    <li>Портфолио</li>
                    <li>Поиск</li>
                    <li>Вход/Регистрация</li>
                </ul>
            </nav>
        </header>
    )
}