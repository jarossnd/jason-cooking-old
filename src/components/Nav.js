import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`

`;

export default function Nav() {
    return (
        <div>
            <NavStyles>
            <hr />
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
        </ul>
        <hr />
            </NavStyles>
        </div>

    )
}