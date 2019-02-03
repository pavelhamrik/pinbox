import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Grid, GridItem} from '../components/Grid/Grid';
import Layout from '../components/Layout/Layout';

import sections from '../styles/generic/_sections.scss';
import {SITE_TITLE} from '../constants/constants';

class Index extends Component {
    static getInitialProps({store, isServer, pathname}) {
        if (isServer) store.dispatch({type: 'SET_SERVER_PATHNAME', payload: pathname});
    }

    render() {
        return (
            <Layout title={`${SITE_TITLE}`}>
                <Grid className={sections['main-section']}>
                    <GridItem width='medium-8' offset='medium-2'>
                        <ul>
                            <li><span style={{color: '#34ace0'}}>&rarr;</span> Hello <span style={{color: '#ff793f'}}>there</span></li>
                        </ul>
                    </GridItem>
                </Grid>
            </Layout>
        )
    }
}

export default connect()(Index);