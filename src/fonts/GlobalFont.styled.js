import { createGlobalStyle } from "styled-components";

import BebasNeue_Regular from "./BebasNeue-Regular.otf";
import OpenSans_Bold from "./OpenSans-Bold.ttf";
import OpenSans_Light from "./OpenSans-Light.ttf";
import OpenSans_Regular from "./OpenSans-Regular.ttf";
import OpenSans_Semibold from "./OpenSans-Semibold.ttf";
import Reboto_Light from "./Roboto-Light.ttf";

export default createGlobalStyle`
@font-face{
    font-family: 'OpenSas';
        src: local('OpenSas'), local('FontName'),
        url(${OpenSans_Light}) format('truetype'),
        url(${OpenSans_Bold}) format('truetype'),
        url(${OpenSans_Regular}) format('truetype'),
        url(${OpenSans_Semibold}) format('truetype'),
        url(${Reboto_Light}) format('truetype');
        font-weight: 300;
        font-style: normal;
}
`;
