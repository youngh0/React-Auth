import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import * as api from '../API';

export function Timeline(props){

    return(
        <>
            {props.data.map((r)=>(
                <>
                    <Link to={"/detail/"+r.id}
                          style={{
                              textDecoration: 'none',
                              color : 'black'
                          }}>
                        <Box>
                            <Name>owner: {r.owner}</Name>
                            <Show>content: {r.content}</Show>
                        </Box>

                    </Link>

                </>
            ))}

        </>
    )
}

const Box = styled.div`
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    padding : 20px;
    margin : 12px;
`

const Name = styled.h4`
    padding : 4px;
    display : flex;
    align-items : center;
    justify-content : center;
    
`

const Show = styled.h5`
    padding : 4px;
    display : flex;
    align-items : center;
    font-size: 13px;
    justify-content : center;
`;
