import React,{useEffect,useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import * as api from '../API'

export function Feed(){

    const [feed,setFeed] = useState()

    const feedContent = e => {
        setFeed(e.target.value);
    }

    const post = async ()=>{
        const res = await api.postFeed(feed);
        console.log(res)
    }

    useEffect(()=>{
        console.log(localStorage.getItem('token'))
        const readInfo = async ()=>{
            await api.readInfo();
        }
        readInfo();
    },[])

    return(
        <>
            <Title>글쓰기</Title>
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
            <textarea name="" id="" cols="30" rows="10" onChange={feedContent}></textarea>
            <button onClick={post}>post</button>
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
