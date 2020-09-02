import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Main from './main';

export default function index() {
    return (
        <>
        <BrowserRouter>
          <Route path="/" component={Main} />
        </BrowserRouter>
      </>
    );
}