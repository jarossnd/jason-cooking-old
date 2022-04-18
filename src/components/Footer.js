import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  footer p {
    text-align: center;
    font-size: 2rem;
  }
  .footerSmall {
    font-size: 1rem;
  }
`;

export default function Footer() {
    return (
        <FooterStyles>
    <footer>
        <hr />
        <p>&copy; Jason's Cookbook {new Date().getFullYear()}</p>
    </footer>
        </FooterStyles>

    );
}