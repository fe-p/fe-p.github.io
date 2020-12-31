import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BrowserRouter, Switch, Route} from "react-router-dom";

import Nav from '../nav/nav';
import Resume from '../nav/resume';

const Wrap = styled.div`
* {margin: 0; padding: 0;}
width: 100%;

.scrollingBanner {position: relative; width: 100%; height: 100vh; display: flex; overflow: hidden; background: #151515;}
.scrollingBanner div {position: relative; width: 75%; overflow: hidden; background: url(https://user-images.githubusercontent.com/54713067/91960699-2fe0a800-ed45-11ea-84ae-cb194817d604.png); background-size: 360px 1080px;}
.scrollingBanner div:nth-child(1) {width: 25%; background: url(https://user-images.githubusercontent.com/54713067/91960665-28b99a00-ed45-11ea-86b1-71d756b39e3e.png); background-size: cover;}
.scrollingBanner div:nth-child(1) h2 a {-webkit-text-stroke: 1px; -webkit-text-stroke-color: #fff; -webkit-text-fill-color: transparent; left: 100%;}
.scrollingBanner div h2 {position: relative; font-family: 'Roboto';}
.scrollingBanner div h2 a {position: absolute; white-space: nowrap; font-size: 15em; color: #222; line-height: 165vh; animation: animate 60s linear infinite; height: 30%; bottom: 40px;}
.scrollingBanner div h2:hover a {color: #000;}
.scrollingBanner div:nth-child(1) h2:hover a {-webkit-text-stroke: 1px; -webkit-text-stroke-color: #000; -webkit-text-fill-color: transparent; left: 100%;}

.left {background: none; transform: rotate(-90deg); -moz-transform: rotate(-90deg); -ms-transform: rotate(-90deg); -o-transform: rotate(-90deg);
 color: #bbb; text-align : right; font-size: 1rem; position: absolute; top: 280px; left: -200px; z-index: 2;}
.left:hover {opacity: .8;}

.right {position: absolute; top: 35px; right: 40px; z-index: 2; display: flex; align-items: center;}
.right p {color: #555; margin-right: 15px;}
.right span {width: 180px; border-bottom: 1px solid #444; height: 2px;}
.right:hover {opacity: .8;}

@keyframes animate {
  0% {transform: translateX(0);}
  100% {transform: translateX(-100%);}
}

@media all and (max-width:768px) {
  .scrollingBanner div:nth-child(1) {width: 30%;}
  .scrollingBanner div h2 a {font-size: 9.5em; line-height: 175vh;}

  .left p {font-size: 0.875rem;}
  .left {top: 240px; left: -180px;}
  .right span {width: 70px;}
}
`

export default function main() {
    return (
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <>
              <Switch location={location}>
                  <Route path="/nav" component={Nav} />
                  <Route path="/resume" component={Resume} />
                  <Wrap>
                    <Link to={"/nav"}>
                      <div className="left">
                        <p>Resume / Graphic Design / Web Design & Publising</p>
                        <p>UIUX WebApp Design / Data visualization & Infographic</p>
                      </div>
                    </Link>
                    <Link to={"/nav"}>
                      <div className="right">
                        <p>2012-2021</p>
                        <span></span>
                      </div>
                    </Link>
                    <section className="scrollingBanner">
                      <div>
                        <h2><Link to={"/nav"}>Designer & Front-end developer.</Link></h2>
                      </div>
                      <div>
                        <h2><Link to={"/nav"}>Designer & Front-end developer.</Link></h2>
                      </div>
                    </section>
                  </Wrap>
              </Switch>
            </>
          )}
        />
      </BrowserRouter>
    );
}

