import React from "react";

export default function Header(){
    return (
        <header>
            <aside className="sidebar">
                <div className="logo-box">
                    <img className="profile"></img>
                </div>
            </aside>

            <div className="buttons">
                <a className="menu-btn" href="#"><i className="fa-solid fa-bars"></i></a>
                <a className="chat-btn" href="#"><i className="fa-solid fa-message"></i></a>
            </div>
        </header>
    )
}