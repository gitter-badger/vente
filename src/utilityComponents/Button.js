import React from 'react'
import '../styles/main.css'

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
    this.state = {}
    this.showShadow = this.showShadow.bind(this)
    this.hideShadow = this.hideShadow.bind(this)
    
    this.state = { button: <div 
        onClick = { this.props.clickCallback } 
        onMouseOver = { this.showShadow }
        onMouseOut = { this.hideShadow }
        style= { {fontFamily: 'RobotoRegular', 
        backgroundColor: '#01579B', 
        borderRadius: 1 + 'px', 
        height: 20 + 'px',
        padding: 5 + 'px',
        display: 'table-cell',
        wordWrap: 'break-word',
        wordBreak: 'break-word',
        float: 'right',
        color: 'white'} }>
	  	    { this.props.label }
 	    </div> }
    
  }
  
  showShadow() {
     
    this.setState({
      button: <div 
        onClick = { this.props.clickCallback } 
        onMouseOver = { this.showShadow }
        onMouseOut = { this.hideShadow }
        style= { {fontFamily: 'RobotoRegular', 
        backgroundColor: '#01579B', 
        borderRadius: 1 + 'px', 
        height: 20 + 'px',
        padding: 5 + 'px',
        display: 'table-cell',
        wordWrap: 'break-word',
        wordBreak: 'break-word',
        float: 'right',
        color: 'white',
        boxShadow : 0 + 'px ' + 0 + 'px ' + 2 + 'px ' + '#888888'} }>
	  	    { this.props.label }
 	    </div>
    })
  }
  
  hideShadow() {
    this.setState({
      button: <div 
        onClick = { this.props.clickCallback } 
        onMouseOver = { this.showShadow }
        onMouseOut = { this.hideShadow }
        style= { {fontFamily: 'RobotoRegular', 
        backgroundColor: '#01579B', 
        borderRadius: 1 + 'px', 
        height: 20 + 'px',
        padding: 5 + 'px',
        display: 'table-cell',
        wordWrap: 'break-word',
        wordBreak: 'break-word',
        float: 'right',
        color: 'white'} }>
	  	    { this.props.label }
 	    </div>
    })
  }
  
  /**
  * renders the JSX representing the add new lead form.
  * @returns {jsx}
  */
  render() {
    return <div>{this.state.button}</div>
  }
}