import React from 'react'

const Header = () => {
  return (
    <div>
        <header>
        <div className="logo_container">
            <a href="#"><img classNameName="myntra_home" src="../images/myntra_logo.webp" alt="Myntra Home"/></a>
        </div>
        <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div classNameName="search_bar">
            <span classNameName="material-symbols-outlined search_icon">search</span>
            <input classNameName="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div classNameName="action_bar">
            <div classNameName="action_container">
                <span className="material-symbols-outlined action_icon">person</span>
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
                <span className="material-symbols-outlined action_icon">favorite</span>
                <span className="action_name">Wishlist</span>
            </div>

            <div className="action_container">
                <span className="material-symbols-outlined action_icon">shopping_bag</span>
                <span className="action_name">Bag</span>
                <span className="bag-item-count">0</span>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Header