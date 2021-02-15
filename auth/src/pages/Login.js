import React,{useState} from 'react';
import * as api from '../API'
import * as config from '../config/Var'
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Home} from "./Home";


export function Login(){
    const [loginEmail,setLoginEmail] = useState()
    const [loginPw,setLoginPw] = useState()

    const loginMailValue = e => {
        setLoginEmail(e.target.value);
    }
    const loginPwValue = e => {
        setLoginPw(e.target.value);
    }


    const getToken = async ()=>{
        const res = await api.signIn(loginEmail, loginPw);
        if(res.token){
            localStorage.setItem('token',res.token);
            alert("로그인 되었습니다^^");
            window.location.href = './'
            console.log(res)
        }else{
            alert('입력한 정보를 확인해주세요')
        }

    }

    return(
        <>
            <Title>LOG IN</Title>
            <Box>

                <Link to={"./"}
                      style={{
                          textDecoration: 'none',
                          color : 'black'
                      }}
                >
                    <p id={"link"}>HOME</p>
                </Link>
            </Box>
            <Container>
                <input type="text" onChange={loginMailValue}
                       placeholder="e-mail"
                       style={{
                           marginBottom : 6,
                           width : 240,
                           padding : 8
                       }}/>
                <input type="password" onChange={loginPwValue}
                       placeholder="password"
                       style={{
                           marginBottom : 6,
                           width : 240,
                           padding : 8
                       }}/>
                <button onClick={getToken}>login</button>
                <Link to={"./signup"}
                      style={{
                          textDecoration: 'none',
                          color : 'black'
                      }}
                >
                    <p id={"link"}>회원가입</p>
                </Link>
            </Container>

        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction : column;
    justify-content : center;
    align-items : center
`
const Box = styled.div`
  text-align: center;
  display: flex;
  justify-content : space-around
`;
const Title = styled.h1`
  text-align: center;
`;


