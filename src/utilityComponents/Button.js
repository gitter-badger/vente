import React from 'react'
import '../styles/main.css'
import ColorsTheme from '../constants/ColorsTheme.json'
import Immutable from 'immutable'

/**
* This is the component which renders the form for creating a new lead
* @class Button
* @author Mayas Haddad
*/
export default class Button extends React.Component {
    
  /**
  **  @name constructor
  **/
  constructor(props) {
    super(props)
    this.props = props
    
    this.showShadow = this.showShadow.bind(this)
    this.hideShadow = this.hideShadow.bind(this)
    
    let vColorTheme = 'darkBlue'
    
    this.mButtonStyle = {
      fontFamily: 'RobotoRegular', 
      backgroundColor: ColorsTheme[vColorTheme].buttonColor, 
      borderRadius: 1 + 'px', 
      height: 30 + 'px',
      padding: 5 + 'px',
      display: 'table-cell',
      wordWrap: 'break-word',
      wordBreak: 'break-word',
      float: 'right',
      color: 'white'
    }

    this.state = { 
      colorTheme: vColorTheme,
      style: this.mButtonStyle 
    }
  }
  
  showShadow() {
    let oldStyle = Immutable.Map(this.state.style)

    let newStyle = oldStyle.set('boxShadow', 0 + 'px ' + 0 + 'px ' + 5 + 'px ' + '#888888')
    
    this.setState({
      style: newStyle.toObject(),
      colorTheme: this.state.colorTheme
    })
  }
  
  hideShadow() {
    let oldStyle = Immutable.Map(this.state.style)

    let newStyle = oldStyle.remove('boxShadow')
    
    this.setState({
      style: newStyle.toObject(),
      colorTheme: this.state.colorTheme
    })
  }
  
  /**
  * renders the JSX representing the add new lead form.
  * @returns {jsx}
  */
  render() {
    return (<div 
      onClick = { this.props.clickCallback } 
      onMouseOver = { this.showShadow }
      onMouseOut = { this.hideShadow }
      style = { this.state.style }>
        { this.props.label }
    </div>)
  }
}