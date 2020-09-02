import React from 'react';
import styled from 'styled-components';

import Index from './page/index';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  top: 0;
  position: relative;
  .datavisualize {display: flex;}
  cursor: url(https://cdn.custom-cursor.com/db/cursor/32/Gray_cursor.png), pointer;
  & a:hover {cursor: url(https://cdn.custom-cursor.com/db/cursor/32/Orange_cursor.png), pointer;}
`

function App() {
  return (
      <Wrap>
        <Index />
      </Wrap>
  );
}

export default App;
