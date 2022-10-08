import React from "react";
import styled from "styled-components";

const StHeaderDiv = styled.div`
    border: 1px solid rgb(221, 221, 221);
    height: 60px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 20px;
    margin-top : 10px;
    margin-bottom: 24px;
`

function Header() {
    return (
        <StHeaderDiv>
            <div>My Todo List</div>
            <div>React</div>
        </StHeaderDiv>
    )
}

export default Header;