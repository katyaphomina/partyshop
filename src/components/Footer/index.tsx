import "./index.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-lists">
                <ul>
                    <li className="footer-title">Главная</li>
                    <li className="footer-li">Каталог</li>
                    <li className="footer-li">Афиша</li>
                    <li className="footer-li">Идеи</li>
                    <li className="footer-li">Partyplan</li>
                    <li className="footer-li">Partymaker</li>
                </ul>
                <ul>
                    <li className="footer-title">Каталог услуг</li>
                    <li className="footer-li">Еда</li>
                    <li className="footer-li">Площадки</li>
                    <li className="footer-li">Услуги</li>
                    <li className="footer-li">Атрибуты</li>
                    <li className="footer-li">Транспорт</li>
                    <li className="footer-li">Прочее</li>
                </ul>
                <ul>
                    <li className="footer-title">Идеи</li>
                    <li className="footer-li">Личные</li>
                    <li className="footer-li">Корпоративные</li>
                    <li className="footer-li">Культурные</li>
                    <li className="footer-li">Образовательные</li>
                    <li className="footer-li">Спортивные</li>
                </ul>
                <ul>
                    <li className="footer-title">Partyplan</li>
                    <li className="footer-title">Partymaker</li>
                </ul>
                <ul>
                    <li className="footer-title">Контакты</li>
                    <li className="footer-li-a">
                        <a href={"/"}>Россия, Казань, Тэцевская, 4А</a>
                        <a href={"/"}>427170</a>
                    </li>
                    <li className="footer-li-a">
                        <a href={"/"}>E-mail:</a>
                        <a href={"/"}>info@sov-tech.ru</a>
                    </li>
                    <button className="write-to-us-button">Написать нам</button>
                </ul>
            </div>
            <div className="footer-copyright-notice">© 2025-2025 PARTYSHOP</div>
        </footer>
    )
}
