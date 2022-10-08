import React from "react";
import styled from "styled-components";

const StLayoutDiv = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    min-width: 800px;
`;

function Layout(props) {
    return (
        <StLayoutDiv>
            {props.children}
        </StLayoutDiv>
    );
}

export default Layout;