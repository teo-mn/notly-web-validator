import React from 'react';
import {hot} from 'react-hot-loader';

import './assets/css/main.css';
import './scss/App.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import {BrowserRouter as Router, Switch, Route ,Redirect} from "react-router-dom";
import PartnersForm from "./components/PartnersForm/PartnersForm";

import {LocaleContext, LocaleProvider} from "./LocaleContext";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import DownloadApp from "./components/DownloadApp/DownloadApp";



class App extends React.Component {
    static contextType = LocaleContext;

    constructor() {
        super();
        this.state = {
            locale: 'mn',
        }
    };

    componentDidMount() {
        if (window.env.faviconIconUrl) {
            const favicon = document.getElementById("favicon");
            favicon.href = window.env.faviconIconUrl;
        }

        window.addEventListener('storage', (e) => {
            const {currentTarget: {localStorage: {locale}}} = e;
            this.setState({locale});
        });
    };

    componentWillUnmount() {
        window.removeEventListener('storage', (e) => {
            const {currentTarget: {localStorage: {locale}}} = e;
            this.setState({locale});
        });
    }

    render() {
       

        return (
            <LocaleProvider>
                    <Router>
                        <Navbar/>
                    <div id="app" className={'h-screen grid grid-rows-custom-container bg-main-bg'}>
                        <div></div>
                            <Switch>
                                <Route exact path="/">
                                    <Home/>
                                </Route>
                                <Route path="/partnersForm">
                                    <PartnersForm/>
                                </Route>
                                <Route path="/downloadApp">
                                    <DownloadApp/>
                                </Route>
                                <Route path="/privacyPolicy">
                                    <PrivacyPolicy/>
                                </Route>
                                <Redirect from="*" to="/" />
                            </Switch>

                        <Footer/>
                    </div>
                    </Router>
            </LocaleProvider>
        );
    }
}

export default hot(module)(App);
