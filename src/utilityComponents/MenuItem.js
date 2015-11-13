import React from 'react'
import SVGIcon from './SVGIcon'
import Immutable from 'immutable'

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

    this.goOpac = this.goOpac.bind(this)
    this.goTransparent = this.goTransparent.bind(this)

    const vMenuItemStyle = { 
      fontFamily: 'RobotoRegular',
      display: '-webkit-flex',
      alignItems: 'center',
      cursor: 'pointer'
    }

    this.state = { menuItemStyle : vMenuItemStyle }
  }
  
  goOpac() {
    let vOldMenuItemStyle = new Immutable.Map(this.state.menuItemStyle)

    let vNewMenuItemStyle = vOldMenuItemStyle.set('opacity', 1)

    this.setState({ menuItemStyle: vNewMenuItemStyle.toObject() })
  }

  goTransparent() {
    let vOldMenuItemStyle = new Immutable.Map(this.state.menuItemStyle)

    let vNewMenuItemStyle = vOldMenuItemStyle.set('opacity', 0.5)

    this.setState({ menuItemStyle: vNewMenuItemStyle.toObject() })
  }

  /**
  * renders the JSX representing the add new lead form.
  * @returns {jsx}
  */
  render() {

    const vMenuItemIconStyle = {
      width: 32 + 'px', 
      height: 32 + 'px', 
      backgroundColor: '#FFFFFF',
      display: 'inline-block'
    }

    return <div onMouseOver={this.goTransparent} onMouseOut={this.goOpac} style={ this.state.menuItemStyle }>
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