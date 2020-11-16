import { createGlobalStyle } from "styled-components";

import BebasNeue_Regular from "./BebasNeue-Regular.otf";
import OpenSans_Bold from "./OpenSans-Bold.ttf";
import OpenSans_Light from "./OpenSans-Light.ttf";
import OpenSans_Regular from "./OpenSans-Regular.ttf";
import OpenSans_Semibold from "./OpenSans-Semibold.ttf";
import Reboto_Light from "./Roboto-Light.ttf";

export default createGlobalStyle`
@font-face{
    font-family: 'BebasNeue-Regular';
        src: local('BebasNeue-Regular'), local('FontName'),
        url(${BebasNeue_Regular}) format('otf'),
        url(${OpenSans_Bold}) format('truetype');
        font-weight: 300;
        font-style: normal;
}
`;
