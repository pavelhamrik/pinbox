import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App, {Container} from 'next/app';
import withRedux from 'next-redux-wrapper';
import rootReducer from '../store/reducers';
import smoothscroll from 'smoothscroll-polyfill';
import {ParallaxProvider} from 'react-scroll-parallax';
import * as ReactGA from 'react-ga';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import '../styles/app.scss'

ReactGA.initialize('UA-130424963-2');

const reduxLogger = createLogger({
    diff: true,
    collapsed: (getState, action, logEntry) => !logEntry.error,
    // predicate: (getState, action) => action.type !== SET_PASSED_TICKS
});

// const makeStore = (initialState, options) => {
const makeStore = (initialState) => {
    return createStore(rootReducer, initialState, applyMiddleware(thunk, reduxLogger));
    // return createStore(rootReducer, initialState);
};

class MyApp extends App {
    static async getInitialProps(params) {
        const {Component, ctx} = params;

        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return {pageProps}
    }

    componentDidMount(props) {
        smoothscroll.polyfill();
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <ParallaxProvider>
                <Container>
                    <Provider store={store}>
                        <Component {...pageProps}/>
                    </Provider>
                </Container>
            </ParallaxProvider>
        );
    }
}

export default withRedux(makeStore)(MyApp);