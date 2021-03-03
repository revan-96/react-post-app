import React from 'react';
import PropTypes from 'prop-types';
import PushButtonGroup from '../PushButtonGroup/PushButtonGroup';
import PushButton from '../PushButton/PushButton';
import Tab from '../Tab/Tab';
import './TabBar.scss';

class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {pressed: "", prev: ""};
        this.onChange = props.onChange;
    }

    handleChange(e) {
        if(this.state.prev === e.target.value)
            return;
        this.setState({pressed: e.target.value, prev: e.target.value});
        this.onChange(e);
    }

    render() {
        return (
            <div>
            <PushButtonGroup onChange={this.handleChange}>
            {
                this.props.children.map((component, index) => {
                    console.log(component)
                    const props = component.props;
                    return <PushButton key={index}>{props.name}</PushButton>
                })
            }
            </PushButtonGroup>
            <br/>
            {
                this.props.children.find((component, index) => {
                    if(this.state.pressed === index.toString()) {
                        const props = component.props;
                        const Component = component.type;
                        return <Component {...props}></Component>;
                    }
                })
            }                
            </div>
        );
    }
}

TabBar.propTypes = {
    children: PropTypes.arrayOf((elements, key, componentName, location, propFullName) => {
        if(elements[key].type != Tab) {
            console.log('invalid')
            return new Error(
                'Invalid prop `' + propFullName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            );
        }
    }),
    onChange: PropTypes.func
}

TabBar.defaultProps = {
}


export default TabBar;