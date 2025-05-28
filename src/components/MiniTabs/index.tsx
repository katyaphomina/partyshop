import arrowUp from "../../images/mini-vector-up.svg";
import arrowDown from "../../images/mini-vector-down.svg";


interface Tab {
    name: string;
    image: string;
    options: string[];
    dropdown?: Record<string, string[]>;
}

interface MiniTabsProps {
    tabs: Tab[];
    selectedTab: Tab;
    openStates: Record<string, boolean>;
    setOpenStates: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
    selectedOptions: Record<string, string>;
    setSelectedOptions: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

export function MiniTabs(props: MiniTabsProps) {
    const {
        tabs,
        selectedTab,
        openStates,
        setOpenStates,
        selectedOptions,
        setSelectedOptions,
    } = props;

    const handleToggleMenu = (option: string) => {
        setOpenStates((prevState) => ({
            ...prevState,
            [option]: !prevState[option],
        }));
    };

    return (
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
    );
}

