import React,{useEffect,useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import * as api from '../API'
import styled from 'styled-components'
import {CommentList} from "../components/CommentList";

export function DetailFeed(){
    const {id} = useParams();
    const [feed,setFeed] = useState([]);
    const [comment, setComment] = useState();
    const [comments, setComments] = useState([])

    const commentValue = e => {
        setComment(e.target.value);
    }

    const writeComment = async ()=>{
        await api.postComment(id,comment);
        const commentRes = await api.getFeedComment(id)
        setComments(commentRes)
    }

    useEffect(()=>{
        if(localStorage.getItem('token')){
            const data = async () =>{
                const result = await api.getDetailFeed(id)
                const commentRes = await api.getFeedComment(id)
                setComments(commentRes)
                console.log(commentRes)
                setFeed(result)
            }
            data();
        }
        else{
            alert('로그인 해주세요 ㅎ')
        }
        // console.log(localStorage.getItem('token'))
    },[])

    return(
        <>
            <Title>FEED</Title>
            <RouteBox>

                <Link to={"../"}
                      style={{
                          textDecoration: 'none',
                          color : 'black'
                      }}
                >
                    <p id={"link"}>HOME</p>
                </Link>


            </RouteBox>
            <Box>
                <Name>작성자 : {feed.owner}</Name>
                <Show>내용 : {feed.content}</Show>
            </Box>

            {comments.length !== 0
                ? <Box>
                    {comments.map((r)=>(
                        <CommentList
                            content={r.content}
                            id = {r.id}
                            routeID = {id}
                        />
                    ))}
                </Box>
                : <Box>

                    <Comment>댓글이 없어요 :)</Comment>
                </Box>
            }
            <Box>
                <CommentBox type="text" onChange={commentValue}/>
                <br/>
                <button onClick={writeComment}>댓글달기</button>
            </Box>
        </>

    )
}


const Box = styled.div`
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    padding : 20px;
    margin : 12px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`

const Name = styled.h4`
    padding : 4px;
    font-size : 20px
`

const Show = styled.h5`
    padding : 4px;
    font-size: 24px;
`;

const CommentBox = styled.input`
    text-align : center;
    width : 80%
`
const Comment = styled.p`
    text-align : center;
    font-size : 16px
`
const RouteBox = styled.div`
  text-align: center;
  display: flex;
  justify-content : space-around
`;
const Title = styled.h1`
  text-align: center;
`;

