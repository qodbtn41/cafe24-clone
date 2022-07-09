import React from 'react';
import "./SignUp.css"
const SignUp = () => {
    const logoImgPath = require('../../Resource/Image/cafe24-Logo.gif');
    const loginPageUrl = "/login"
    return (
        <div className='signupWapper'>
            <div className='container'>
                <div className='informationContainer'>
                    <div className='logo'>
                        <img src = {logoImgPath} alt="logo Image" style={{width : "85%"}}/>
                    </div>
                    <div className='inputContainer'>
                        <input type="text" className='signUpInput' placeholder='휴대폰 번호 입력'/>
                        <input type="text" className='signUpInput' placeholder='이름 입력'/>
                        <input type="text" className='signUpInput' placeholder='아이디 입력'/>
                        <input type="text" className='signUpInput' placeholder='비밀번호 입력'/>
                        <button className='signUpBtn'> 회원가입</button>
                    </div>
                </div>
                <div className='moveLogin'>
                    <span>계정이 있으신가요? </span>
                    <a href={loginPageUrl} style={{textDecoration : "none", color : "#0040FF", fontWeight : "bold"}}> 로그인</a>
                </div>
            </div>
            <div className='footerContainer'>
                <div className='footerContent'>
                        <span>@Copyright EveryOne</span>
                </div>
            </div>
        </div>
    );
};

export default SignUp;