import React from "react";
import { styled } from '@mui/material/styles';
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import ProperLogo from "../svgs/ProperLogo";


function BlankLayout(props) {
    const {enableHeader} = props;
    return(
        <StyledBlankLayoutContainer>
            {props.children}
        </StyledBlankLayoutContainer>
    )
}

//Styles

const StyledBlankLayoutContainer = styled("div")`
  display: flex;
`;


export default BlankLayout;