import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

import AddressRef from '../shared/AddressRef';

class Address extends React.PureComponent {
    static propTypes = {
        address: PropTypes.string,
    };

    render() {
        const currentAddress = this.props.match.params.address;
        const {address} = this.props;

        if (!address)
            return null;

        if (address === currentAddress)
            return <label>{address}</label>;

        return <AddressRef address={address} appearance="regular" />;
    }
}

export default withRouter(Address);
