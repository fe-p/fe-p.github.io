import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 85%;
 position: relative;
 a {color: #707070;}

 @media all and (max-width:768px) {
    max-width: 90%;
 }
`

export default function wrap(props) {
    return (
        <Wrap>
            {props.children}
        </Wrap>
    );
}