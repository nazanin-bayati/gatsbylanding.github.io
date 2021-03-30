import React from "react"
import navLog from "../img/nav_logo_en.svg"


const Header = () => {
    return (
    <header>
    <nav id="navbar">
        <div class="nav">
            <a class="hamburger" id="hamburger" href="#"><span id="hamburger-line"></span></a>
            <div class="background-responsive" id="background-responsive"></div>
            <div class="container">
                <div class="logo">
                     <img id="logo-navbar" class="svgClass" src={navLog} alt="wish-logo"/>
                </div>
                <ul class="collapsed" id="nav-items">
                    <li class="nav-item">
                        <a class="nav-link" href="/register">
                            Sign Up
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/login">
                            Login
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#howitworks">
                            How it Works
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/projects/submit/category">
                            <button class="hire-toptalent">Submit Your Project</button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </header>

        )
}

export default Header