import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Signout extends Component {
    componentDidMount(props) {
        this.props.signout(() => {
            this.props.history.push('/');
        });
    }

    render() {
        return <div>

        </div>;
    }
}

export default connect(
    null,
    actions
)(Signout);
