import React from 'react'
import SVGIcon from './SVGIcon'

/**
* This is the component which renders the form for creating a new lead
* @class Button
* @author Mayas Haddad
*/
export default class MenuItem extends React.Component {
    
  /**
  **  @name constructor
  **/
  constructor(props) {
    super(props)
    this.props = props
  }
  
  /**
  * renders the JSX representing the add new lead form.
  * @returns {jsx}
  */
  render() {

    const vMenuItemStyle = { 
      fontFamily: 'RobotoRegular',
      display: '-webkit-flex',
      alignItems: 'center'
    },

    vMenuItemIconStyle = {
      width: 32 + 'px', 
      height: 32 + 'px', 
      backgroundColor: '#FFFFFF',
      display: 'inline-block'
    }

    return <div style={ vMenuItemStyle }>
      <SVGIcon 
        imageUrl={ this.props.imageUrl } 
        customStyle={ vMenuItemIconStyle } />
        <div style={{ padding: 1 + 'em', display: 'inline' }}>{ this.props.menuItemTitle }</div>
    </div>
  }
}

MenuItem.propTypes = {
  menuItemTitle: React.PropTypes.string.isRequired,
  imageUrl: React.PropTypes.string.isRequired
}