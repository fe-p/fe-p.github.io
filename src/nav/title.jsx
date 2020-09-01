import React from 'react';
import styled from 'styled-components';

const Wrap = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;

  @media all and (max-width:1024px) {
    height: 100px;
  }
`

export default function submenu(props) {
  return (
    <>
      <Wrap>
        <p></p>
        {props.children}
      </Wrap>
    </>
  );
}