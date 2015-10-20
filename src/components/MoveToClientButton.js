import React from 'react'
import Messages from '../constants/messages.json'

/**
* @class MoveToClient
* @author Mayas Haddad
*/
export default class MoveToClientButton extends React.Component {
    
  /*
  *  @name constructor
  */
  constructor(props) {

    super(props)
    this.props = props
    
    this.state = {
      locale: 'fr-FR'
    }
  }
   
  /**
  * renders the JSX representing the add new lead form.
  * @returns {jsx}
  */
  render() {
    let vMoveToClientButtonLabel = Messages[this.state.locale]
         .moveToClientButtonLabel

    return (
      <div onClick={this.props.clickCallback}>
        {vMoveToClientButtonLabel}
      </div>
    )
  }
}