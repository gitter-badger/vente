import React from 'react'

/**
* This is the component which renders the form for creating a new lead
* @class Button
* @author Mayas Haddad
*/
export default class Menu extends React.Component {
    
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
    return <ul style={{ listStyleType: 'none' }}>
      {this.props.menuItems.map(function(menuItem, i){
        return <li key={i}>{menuItem}</li>
      })}
    </ul>
  }
}