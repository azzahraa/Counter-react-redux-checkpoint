import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {Button} from 'semantic-ui-react'
import {increaseCount, decreaseCount} from '../actions/counter'


class Counter extends Component {

    
    render() {
        const { increaseCount, decreaseCount } = this.props
    
        return(
            <div>
            <Button onClick={increaseCount} >+</Button>
            <span>{this.props.count}</span>
            <Button onClick={decreaseCount}>-</Button>
            </div>
        )
    }
    
    }

    const mapStateToProps = state => {
        console.log(state)
        return {
            count: state.counterReducer.count
        }
    }
    
    const mapDispatchToProps = dispatch => {
        return {
            increaseCount : () => dispatch(increaseCount()),
            decreaseCount : () => dispatch(decreaseCount()) ,
        }
    }
    
    
    export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(Counter)