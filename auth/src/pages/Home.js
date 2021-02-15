import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Timeline} from "../components/Timeline";
import * as api from "../API";

export function Home(){
    const [FeedData,setData] = useState([]);
    useEffect(()=>{
        if(localStorage.getItem('token')){
            const data = async () =>{
                const result = await fetch('https://react-js-sample-api.kmuwink.net/feed/',{
                    method : 'get',
                    headers:{
                        Authorization : 'Token ' + localStorage.getItem('token')
                    }
                });
                const dataResult = await result.json();
                // console.log(dataResult)
                setData(dataResult.reverse())
            }
            data();
        }
        else{

        }

    },[])

    function logout(){
        if(window.confirm('로그아웃?')){
            localStorage.clear();
            window.location.reload();
        }
    }

    return(
        <>
            <Title>HOME</Title>
                {localStorage.getItem('token')
                ?
                    <>
                        <Box>
                            <Link to={"./feed"}
                                  style={{
                                      textDecoration: 'none',
                                      color : 'black'
                                  }}
                            >
                                <p id={"link"}>글쓰기</p>
                            </Link>
                            <Button
                                onClick={logout}
                                style={{
                                    backgroundColor : 'white',
                                    border: 'none'
                                }}
                            >로그아웃</Button>
                        </Box>
                        <Timeline data={FeedData}/>
                    </>


                :<>
                        <Box>
                            <Link to={"./signup"}
                                  style={{
                                      textDecoration: 'none',
                                      color : 'black'
                                  }}
                            >
                                <p id={"link"}>SIGN UP</p>
                            </Link>
                            <Link to={"./login"}
                                  style={{
                                      textDecoration: 'none',
                                      color : 'black'
                                  }}>
                                <p id={"link"}>LOGIN PAGE</p>
                            </Link>
                        </Box>

                        <p style={{textAlign : 'center'}}>로그인 하시면 피드를 보실 수 있습니다 :)</p>
                    </>}





        </>
    )
}

const Box = styled.div`
  text-align: center;
  display: flex;
  justify-content : space-around
`;
const Title = styled.h1`
  text-align: center;
`;

const Button = styled.button`
  backgroundColor : 'white';
  border: 'none';
  &:focus-within{
    outline: none;
  }
`;


