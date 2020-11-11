import React from 'react';
import styled from 'styled-components';

import Wrap from '../page/wrap';
import Menu from './menu';
import Title from './title';

const Paper = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background-color: #fff;
 width: 900px;
 margin-bottom: 100px;

 .contact h2 {width: 28%;}
 .education h2, .experience h2, .skill h2 {width: 40%; line-height: 20px;}

 ul {width: 100%; padding-left: 20px;}
 ul li:nth-of-type(1) {margin-top: 0;}
 li {font-size: 0.875rem; color: #898989; list-style: none; margin-top: 20px; display: flex; flex-direction: column;}
 a:hover {opacity: .6; transition: all 0.2s ease-out; color: rgb(227, 112, 7);}

 article {display: flex; flex-direction: row; width: 100%; border-bottom: 1px solid #ddd; padding: 50px;}

 .my {align-items: center; flex-direction: column; padding: 100px 40px;}
 .my svg {margin-top: 250px;}
 .my p {line-height: 34px;}
 img {background-color: #ddd; width: 150px; height: 150px; border-radius: 100px; margin-bottom: 50px;}

 .title {color: #333;}
 .inner {padding-right: 60px; width: calc(100% / 1);}
 .inner ul {margin-top: 30px;}
 .portfolio .inner ul li {flex-direction: column;}
 .portfolio .inner ul li a {padding-bottom: 5px;}
 .edu li p:nth-of-type(2) {padding-left: 10px; display: flex;} 
 .edu li p:nth-of-type(2) span {padding-left: 10px;}

 .work li p:nth-of-type(2) {padding-left: 10px;}
 .contactinner ul li p span {padding-left: 10px;}
 .experience ul li p span {padding-left: 10px;}

 ul li {flex-direction: row;}
 ul li p:nth-of-type(2) span {padding-left: 10px;}

@media all and (max-width:1024px) {
width: auto;
padding: 70px 0;
margin: 0;

.edu li p:nth-of-type(2) {flex-direction: column; width: 250px;}
.edu li p:nth-of-type(2) span {padding-left: 0px; }

li {margin-top: 5px; font-size: 0.75rem;}
p {font-size: 0.75rem; letter-spacing: -0.5px; display: flex;}
span:nth-of-type(2) {padding-left: 14px;}
article {width: 100%; padding: 40px 10px;}

.inner .title a {font-size: 0.875rem; font-weight: normal; padding-left: 1.1rem; color: #898989;}
.inner p a {color: #898989;}
.inner {padding-right: 0;}

.m-none {display: none;}
}

@media all and (max-width:768px) {
ul {padding-left: 0; margin-top: 30px;}
li {flex-direction: column;}
.contact h2, .education h2, .experience h2, .skill h2 {width: 100%;}

article {flex-direction: column; padding: 40px 0 40px 10px; margin-left: -5px;}
.my {padding: 0px 0px 150px 10px; margin-left: -5px;}
.my svg {display: none;}
.contact, .portfolio {flex-direction: column;}
.contact .contactinner {flex-direction: column;}
.inner {border-bottom: none; padding-bottom: 20px;}
.inner:nth-last-child(1) {padding: 40px 0 0px 10px; margin-left: -10px; border-top: 1px solid #ddd;}
}
`

export default function resume() {

    const contact = [
        {id: 1, title: '* Name　:', content: 'Lee Erin'},
        {id: 2, title: '* Email :', content: 'wfedev@gmail.com'},
    ];
    const contactTwo = [
        {id: 1, mtitle: '* Address　:', mcontent: 'Nakseongdae, Gwanak-gu, Seoul, Republic of Korea'},
        {id: 2, mtitle: '* Interest :', mcontent: 'Collection of design references'},
        {id: 3, mtitle: '* Language :', mcontent: 'Korean, English, Javascript'}
    ];
    const education = [
        {id: 1, yyyy: '* 2013-2020', edu: 'University', content: '(Dept. of Design)'},
        {id: 2, yyyy: '# 2019-2019', edu: 'Web developer', content: '(Front-end, Back-end, Database)'},
        {id: 3, yyyy: '* 2014-2014', edu: 'Architecture Construction practice', content: '(CAD, 3D visualization)'},
        {id: 4, yyyy: '* 2012-2012', edu: 'Fashion Design', content: '(Pattern drawing, Cloth foundation, Sewing)'}
    ];

    const experience = [
        {id: 1,  yyyy: '* 2012-2020', work: 'Graphic design'},
        {id: 2,  yyyy: '* 2015-2020', work: 'UI/UX design, Publising, front end'},
        {id: 3,  yyyy: '# 2020-2020', work: 'Startup event page Web'},
        {id: 4,  yyyy: '# 2020-2020', work: 'Coupon event page mobile Web'},
        {id: 5,  yyyy: '# 2020-2020', work: 'Education archiving Web/App'},
        {id: 6,  yyyy: '# 2020-2020', work: 'AI Solution responsive Web'},
        {id: 7,  yyyy: '# 2020-2020', work: 'P2P investment SPA'},
        {id: 8,  yyyy: '# 2017-2019', work: 'E-commerce site Web/App'},
        {id: 9,  yyyy: '# 2015-2016', work: 'Trading company responsive Web'},
        {id: 10,  yyyy: '* 2017-2018', work: 'Exhibition visualization'},
        {id: 11,  yyyy: '* 2014-2018', work: 'Architectural visualization'},
        {id: 12, yyyy: '* 2012-2013', work: 'Knit design'}
    ];

    const skills = [
        {id: 1, title: '* UI :', skill: 'Adobe XD, Figma, Sketch, Zeplin'},
        {id: 2, title: '* Graphic :', skill: 'Adobe Illustrator, Adobe Photoshop'},
        {id: 3, title: '* Motion :', skill: 'Adobe After Effect'},
        {id: 4, title: '* 3D :', skill: 'Autodesk 3dsmax, Sketchup, AutoCAD, V-ray'},
        {id: 5, title: '# Font-end :', skill: 'JS(ES6+), ReactJS, styled-components, CSS3, SCSS, HTML5'},
        {id: 6, title: '# Back-end :', skill: 'Java(Spring Boot), Nodejs(Express)'},
        {id: 7, title: '# DataBase :', skill: 'OracleSQL, MySQL'},
        {id: 8, title: '# Version :', skill: 'Github, Bitbuket'},
        {id: 9, title: '# Cloud:', skill: 'AWS, GCP'}
    ];

    const design = [
        {id: 1, title: 'Behance', content: '디테일한 그래픽 디자인 작업으로 구성되어 있습니다.'},
        {id: 2, title: 'Dribbble', content: 'UI 그래픽 위주 개인작업으로 구성되어 있습니다.'},
        {id: 3, title: 'Graphic Design Portfolio', content: 'Private을 제외한 디자인 일부만 과정 없이 결과로 구성하였습니다.'},
        {id: 4, title: 'Map Service UI', content: 'Figma로 Userflow와 UI를 제작하였습니다.'},
        {id: 5, title: 'Loan UI', content: 'Userflow기획을 바탕으로 UI를 제작하였습니다.'},
        {id: 6, title: 'Map floting UI', content: 'Adobe XD로 UX를 고려하여 UI를 제작하였습니다.'},
        {id: 7, title: 'Re-Branding', content: '기존 App ui를 ReBranding 하였습니다.'},
        {id: 8, title: 'Startup event', content: 'Figma로 Graphic & UI 디자인을 제작하였습니다.'}
    ];

    const develop = [
        {id: 1, title: 'P2P investment', content: 'Adobe XD를 사용하여 디자인하고, ReactJS로 만든 Responsive WebApp 입니다.'},
        {id: 2, title: 'GatsbyJS Blog', content: 'ReactJS와 Typescript, scss, GatsbyJS 정보 수집용 개인저장소 블로그 입니다.'},
        {id: 3, title: 'Trading company responsive Web', content: 'Photoshop, illustrator를 사용하여 디자인하고 Wordpress와 bootstrap으로 만든 company 웹사이트 입니다.'},
        {id: 4, title: 'AI Solution responsive Web', content: 'Figma로 받은 디자인을 참고하여 Wordpress를 custom css로 제작한 company 웹사이트 입니다.'},
        {id: 5, title: 'Cafe24 E-commerce site', content: 'Photoshop, illustrator를 사용하여 디자인하고 cafe24에 html, css을 작업한 Shopping Mall 입니다.'},
        {id: 6, title: 'Education archiving', content: 'XD로 받은 디자인을 참고하여 NodeJS로 Page route를 설정하여 html, css, JS로 web & mobile을 작업한 웹사이트 입니다.'},
        {id: 7, title: 'Coupon event', content: 'Figma로 Graphic & UI 디자인하고 html, scss, js로 작업한 이벤트 페이지 입니다.'}
    ];

    return (
        <>
    <Wrap>
        <Title>
            <Menu/>
        </Title>
        <Paper>
            <article className="my">
                <img src={require('../image/00.png')}/>
                <p>배움과 행복을 추구하는 삶을 살아가고 있습니다.</p>
                <p>효율적인 방법을 찾아가는 것을 좋아합니다.</p>
                <svg width="40" height="80" viewBox="0 0 42.52 92.934" id="box">
                        <g transform="translate(-959.646 -920.388)">
                            <path d="M980.834,949.844v91.436" transform="translate(0 -29.456)" fill="none" stroke="#707070" strokeWidth="1"/>
                            <path d="M949.844,990.131l20.906,20.906,20.906-20.906" transform="translate(10.156 1.578)" fill="none" stroke="#707070" strokeWidth="1"/>
                        </g>
                    </svg>
            </article>
            <article className="contact">
                <h2># Contact</h2>
                <div className="contactinner">
                    <ul>
                        {contact.map(i =>
                            <li>
                                <p className="title">{i.title}</p>
                                <p><span>{i.content}</span></p>
                            </li>
                        )}
                        {contactTwo.map(i =>
                            <li>
                                <p className="m-none title">{i.mtitle}</p>
                                <p><span className="m-none">{i.mcontent}</span></p>
                            </li>
                        )}
                    </ul>
                </div>
            </article>
            <article className="education">
                <h2># Education</h2>
                <ul className="edu">
                    {education.map(i =>
                        <li>
                            <p className="title year">{i.yyyy}</p>
                            <p>{i.edu}<span>{i.content}</span></p>
                        </li>
                    )}
                </ul>
            </article>
            <article className="experience">
                <h2># Work experience</h2>
                <ul className="work">
                    {experience.map(i =>
                        <li>
                            <p className="title">{i.yyyy}</p>
                            <p>{i.work}</p>
                        </li>
                    )}
                </ul>
            </article>
            <article className="skill">
                <h2># Skills </h2>
                <ul>
                    {skills.map(i =>
                            <li>
                                <p className="title">{i.title}</p>
                                <p><span>{i.skill}</span></p>
                            </li>
                    )}
                </ul>
            </article>
            <article className="portfolio">
                <div className="inner">
                <h2># Graphic & UI Design</h2>
                  <ul>
                    {design.map(i =>
                        <li>
                            <a href="https://j.mp/2XwtlH3" target="blank" alt="portfolio" className="title">{i.title}</a>
                            <p className="m-none">{i.content}</p>
                        </li>
                    )}
                    <li><a href="https://j.mp/2XwtlH3" target="blank" alt="portfolio" style={{color: "#E37007", marginTop: "20px"}}>※ Link는 권한 요청하시면 오픈 가능합니다.</a></li>
                  </ul>
                <br/>
                </div>
                <div className="inner">
                <h2># Design & Front end</h2>
                  <ul>
                    {develop.map(i =>
                        <li>
                            <a href="https://j.mp/2XwtlH3" target="blank" alt="portfolio" className="title">{i.title}</a>
                            <p className="m-none">{i.content}</p>
                        </li>
                    )}
                  </ul>
                </div>
            </article>
        </Paper>
    </Wrap>
    </>
    );
}