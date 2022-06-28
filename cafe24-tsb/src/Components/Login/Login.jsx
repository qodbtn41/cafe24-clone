import React from 'react';
import './login.css'
const Login = () => {
    const logoClick = () => {
        console.log("logo Clicked")
    }

    const saveIdClick = () => {
        console.log("saveID Clicked")
    }

    const LoginBtnClick = () => {
        console.log("Login Btn Clicked")
    }

    const logoPath = require('../../Resource/Image/cafe24-Logo.gif');
    const firstEventPath = ""
    const secondEventPath = "";
    const eventSampleImg1 = require('../../Resource/Image/eventImg01.jpeg');
    const eventSampleImg2 = require('../../Resource/Image/eventImg02.jpeg');

    return (
        <div>
            <div className='loginMainWapper'>
                <div className='loginMain'>
                    <div style={{textAlign : "center"}}>
                        <img className="loginLogo" src={logoPath} alt="cafe24-logo" onClick={logoClick}/>
                    </div>
                    <div>
                        <form>
                            <div>
                                <div style={{color : "#1C1C1C"}}>아이디</div>
                                <div>
                                    <input type="text" className='loginInput' placeholder='아이디를 입력해주세요'/>
                                </div>
                                <div className='saveId'>
                                    <input type="checkbox" onClick={saveIdClick}/>
                                    <span onClick={saveIdClick}> 아이디 저장 </span>
                                </div>
                            </div>
                            <div>
                                <div style={{color : "#1C1C1C"}}>비밀번호</div>
                                <div>
                                    <input type="password"  className='loginInput' placeholder='비밀번호를 입력해주세요'/>
                                </div>
                            </div>
                            <div>
                                <button className='loginBtn' onClick={LoginBtnClick}> 로그인</button>
                            </div>
                        </form>
                        <div style={{marginTop : "10px", display : "flex", justifyContent:"space-between"}}>
                            <a href={firstEventPath} className="removeAProperties" style={{textAlign : "left", color : "#0040FF", fontWeight : "bold"}}> 회원가입</a>
                            <a href={secondEventPath} className="removeAProperties" style={{textAlign : "right", color : "black", fontWeight : "bold"}}> 아이디/비밀번호 찾기</a>
                        </div>
                        <div style={{marginTop : "50px", marginBottom : "100px"}}>
                            <div className='loginEventImg'>
                                <img src={eventSampleImg1} className='loginEventImg'/>
                            </div>
                            <div style={{marginTop : "10px"}}>
                                <img src={eventSampleImg2} className='loginEventImg'/>
                            </div>
                        </div>
                        <div style={{height : "100px", textAlign : "center"}}>
                            <span style={{color : "#D8D8D8"}}> Copyright ⓒ React Study. All Rights Reserved. </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;