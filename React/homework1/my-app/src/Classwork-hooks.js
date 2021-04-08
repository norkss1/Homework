import React, { useState } from "react";

const Tab = (props) => {
    const { active, text, onSelect } = props;
    return (
        <div
            onClick={onSelect}
            style={{ borderBottom: active ? "2px solid black" : "" }}
        >
            {text}
        </div>
    );
};

const Menu = (props) => {
    const { activeItem, onSelectMenuItem } = props;

    return (
        <div style={{ display: "flex" }}>
            <Tab
                onSelect={() => {
                    onSelectMenuItem("users");
                }}
                text={"Users"}
                active={activeItem === "users"}
            />
            <Tab
                onSelect={() => {
                    onSelectMenuItem("fav");
                }}
                text={"Favourites"}
                active={activeItem === "fav"}
            />
        </div>
    );
};

const FavouriteUsers = () => {
    const [activeSection, setActiveSection] = useState("users"); //users | fav

    return (
        <div>
            <Menu
                activeItem={activeSection}
                onSelectMenuItem={(section) => {
                    setActiveSection(section);
                }}
            />
            <div>content</div>
        </div>
    );
};

export default FavouriteUsers;
