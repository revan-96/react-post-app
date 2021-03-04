import React from 'react';
import { StyledTab } from './TabStyles';

class Tab extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return (
            <StyledTab {...this.props}>{this.props.children}</StyledTab>
        );
    }

}

Tab.propTypes = {
}

Tab.defaultProps = {
}

export default Tab;