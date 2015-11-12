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
      width: 32 + 'px', 
      height: 32 + 'px', 
      backgroundColor: '#FFFFFF',
      display: 'inline-block'
    }

    return <div style={ { fontFamily: 'RobotoRegular', alignItems: 'center'} }>
      <SVGIcon 
        imageUrl={ this.props.imageUrl } 
        customStyle={ vMenuItemStyle } />
        <div style={{ alignItems: 'center', margin: 10 + 'px', padding: 10 + 'px', display: 'inline' }}>DASHBOARD</div>
    </div>
  }
}