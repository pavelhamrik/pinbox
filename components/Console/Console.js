import React, {Component} from 'react';
import consoleStyles from './Console.scss';
import {connect} from 'react-redux';

class Console extends Component {
    componentDidMount() {
        const gapiScript = document.createElement('script');
        gapiScript.src = 'https://apis.google.com/js/api.js?onload=onGapiLoad';
        window.onGapiLoad = () => {
            gapi.load('client:auth2', () => this.start());
        };
        document.body.appendChild(gapiScript)
    }


    start() {
        const {apiKey, clientId} = this.props.googleApiKeys;

        gapi.client.init({
            apiKey: apiKey,
            discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest'],
            clientId: clientId,
            scope: 'https://www.googleapis.com/auth/tasks',
        }).then(function () {
            // Listen for sign-in state changes.
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

            gapi.auth2.getAuthInstance().signIn();

            // Handle the initial sign-in state.
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        });

        function updateSigninStatus(isSignedIn) {
            if (isSignedIn) {
                makeApiCall();
            }
        }

        function makeApiCall() {
            gapi.client.tasks.tasklists
                .list()
                .then(
                    (response) => console.log(`response: `, response),
                    (reason) => console.log(`error: `, reason)
                );
        }
    };

    render() {
        return (
            <div className={consoleStyles['console']}/>
        )
    }
}


const mapStateToProps = state => {
    return {
        googleApiKeys: state.googleApiKeys,
    }
};

export default connect(mapStateToProps)(Console);