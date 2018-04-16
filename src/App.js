import React, { Component } from 'react';

import {
    Container,
    Brand3,
    H45,
    NavBar1,
    P2,
} from "react-stylux";

import AristosLogo from "./assets/Logo/AristosLogo1.0.svg";

class App extends Component {
    render() {
        return (
            <Container>
                <Brand3
                    size="lg">
                    {AristosLogo}
                </Brand3>
                <H45>Coming Soon...</H45>
                <NavBar1>
                    <a href="https://www.facebook.com/AristosWebBuilder/"></a>
                </NavBar1>
                <P2>Copyright &copy; 2018 -<a href="https://FoxDesignAgency.com">Fox Design Agency</a></P2>
            </Container>
        );
    }
}

export default App;
