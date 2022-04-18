import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';

const ContentStyles = styled.div`
position: relative;
width: 75%;
float: right;
height: 100vh;

h1 {
    text-align: center;
    font-size: 5rem;
    color: var(--black);
}`;

const SideBarStyles = styled.div`
position: fixed;
background: rgb(5, 68, 104);
width: 25%;
height: 100%;
top: 0;
left: 0;
padding: 20px 0;
transition: all 0.5s ease;

`;

const WrapperStyles = styled.div`
position: relative;
width: 75%;
float: right;
height: 100vh;
`;

export default function Layout({ children }) {
    return <div>
        <SideBarStyles>
        </SideBarStyles>
        <ContentStyles><h1>Jason's Cookbook</h1>{children}</ContentStyles>
    </div>
}