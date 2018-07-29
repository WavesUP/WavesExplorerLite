import React from 'react';
import PropTypes from 'prop-types';

export default class BlockListItem extends React.Component {
    static propTypes = {
        block: PropTypes.object.isRequired
    };

    render() {
        const {block} = this.props;
        return (
            <tr>
                <td data-label="№ / Timestamp">
                    <div className="block-img sm-hide"></div>
                    <div className="line no-wrap"><a>{block.height}</a></div>
                    <div className="line no-break"><label>{block.time}, {block.date}</label></div>
                </td>
                <td data-label="Base Target">
                    <div className="line bold">{block.baseTarget}</div>
                </td>
                <td data-label="Generator / Signature">
                    <div className="line no-wrap"><a>{block.generator}</a></div>
                    <div className="line no-wrap"><label>{block.signature}</label></div>
                </td>
                <td data-label="TXs">
                    <div className="line">{block.transactions}</div>
                </td>
            </tr>
        );
    }
}