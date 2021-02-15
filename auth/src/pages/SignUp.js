import React, {useState} from 'react';
import * as api from '../API'
import styled from "styled-components";
import {Link} from "react-router-dom";

export function SignUp() {

    const [signupEmail, setSignupEmail] = useState()
    const [signupPw, setSignupPw] = useState()
    const [signupNick, setSignupNick] = useState()
    const [signupLName, setSignupLName] = useState()
    const [signupFName, setSignupFName] = useState()

    const signupMailValue = e => {
        setSignupEmail(e.target.value);
    }
    const signupPwValue = e => {
        setSignupPw(e.target.value);
    }
    const signupNickValue = e => {
        setSignupNick(e.target.value);
    }
    const signupLNameValue = e => {
        setSignupLName(e.target.value);
    }
    const signupFNameValue = e => {
        setSignupFName(e.target.value);
    }

    const registUser = async () => {
        const res = await api.signUp(signupNick, signupEmail, signupPw, signupLName, signupFName);
        console.log(res)
    }

    return (
        <>
            <Title>SIGN UP</Title>
            <Box>


                <Link to={"./"}
                      style={{
                          textDecoration: 'none',
                          color: 'black'
                      }}>
                    <p id={"link"}>HOME</p>
                </Link>
            </Box>
            <Container>

                    <input type="text" onChange={signupNickValue}placeholder="user name"
                        style={{
                            marginBottom : 6,
                            width : 240,
                            padding : 8
                        }}
                    />

                    <input type="text" onChange={signupMailValue}placeholder="e-mail"
                           style={{
                               marginBottom : 6,
                               width : 240,
                               padding : 8
                           }}/>

                    <input type="password" onChange={signupPwValue}placeholder="password"
                           style={{
                               marginBottom : 6,
                               width : 240,
                               padding : 8
                           }}/>

                    <input type="text" onChange={signupLNameValue}
                           placeholder="last name"
                           style={{
                               marginBottom : 6,
                               width : 240,
                               padding : 8
                           }}/>

                    <input type="test" onChange={signupFNameValue}placeholder="first name"
                           style={{
                               marginBottom : 6,
                               width : 240,
                               padding : 8
                           }}/>



                <button onClick={registUser}>sign in</button>
                <Link to={"./login"}
                      style={{
                          textDecoration: 'none',
                          color: 'black'
                      }}>
                    <p id={"link"}>로그인</p>
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
  justify-content : space-around;
  
`;
const Title = styled.h1`
  text-align: center;
`;

