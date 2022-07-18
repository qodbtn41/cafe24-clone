import React from 'react';
import './Header.scss';
import logo from'../../Resource/Image/cafe24-main-Logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";


const Header = () => {
    return (
        <nav class="navbar">
            <div class="navbar_logo">
                <li><a href="#"><img src={logo} alt='메인 로고이미지'/></a></li>
            </div>
            <ul class="navbar_menu">
                <li><a href="#">카테고리</a></li>
                <li><a href="#">기획전</a></li>
                <li><a href="#">맞춤제작</a></li>
                <li><a href="#">베스트</a></li>
                <li><a href="/designShop">디자이너샵</a></li>
                <li><a href="#">스토리</a></li>
                <li><a href="#">고객지원</a></li>
                <li><a href="#">웹스토어</a></li>
            </ul>
            <ul class="navbar_icons">

                <li><FontAwesomeIcon icon={faHeart} /></li>

                <li><a href="#">로그인</a></li>
                <button>무료시작</button>
            </ul>
            <a href="#" class="navbar_togglebtn">
                <i class="fas fa-bars"></i>
            </a>
        </nav>


    );
};

export default Header;