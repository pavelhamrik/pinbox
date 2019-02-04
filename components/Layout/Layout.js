import React, {Component} from 'react';
import * as ReactGA from 'react-ga';
import Head from 'next/head';
// import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import layoutStyles from './Layout.scss';

class Layout extends Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        const {title, children} = this.props;

        return (
            <React.Fragment>
                <Head>
                    <title>{title}</title>
                </Head>

                <div className={`${layoutStyles['layout']}`}>
                    <Header/>
                    {children}
                    {/*<Footer/>*/}
                </div>
            </React.Fragment>
        )
    }
}

export default Layout;