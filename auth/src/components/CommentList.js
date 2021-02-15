import React from 'react';
import styled from "styled-components";
import * as api from '../API'
import {Link} from "react-router-dom";

export function CommentList(props){

    const deleteCom = async ()=>{
        const res = await api.deleteComment(props.id, props.routeID)
    }

    return(

            <Box>
                <CommentContent>{props.content}</CommentContent>
                <span style={{
                    position : 'absolute',
                    right:30}}
                    onClick={deleteCom}
                >X</span>
            </Box>


    )
}

const Box = styled.div`
    position : relative
    display: flex;
   margin-bottom : 12px
   
`
const CommentContent = styled.span`
    text-align : center;
    font-size : 16px
`
