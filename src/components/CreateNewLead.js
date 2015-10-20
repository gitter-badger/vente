import React from 'react'
import '../../lib/gridforms/gridforms.css'
import '../styles/main.css'
window.$ = window.jQuery = require('../../lib/jquery.js')
import '../../lib/gridforms/gridforms.js'
import Messages from '../constants/messages.json'
import Button from '../../lib/utilityComponents/Button.js'

/**
* This is the component which renders the form for creating a new lead
* @class CreateNewLead
* @author Mayas Haddad
*/
export default class CreateNewLead extends React.Component {
    
  /**
  **  @name constructor
  **/
  constructor() {
    this.state = {
      locale: 'fr-FR'
    }
  }
   
  /**
  * renders the JSX representing the add new lead form.
  * @returns {jsx}
  */
  render() {
    let vCreateNewLeadMessages = Messages[this.state.locale]
    .createNewLeadFormLabels
     
    let f = () => { console.log('click on button') }
    
    return (
      <div>
        <form className="grid-form">
          <fieldset>
              <legend style={{fontFamily: 'RobotoRegular'}}>{vCreateNewLeadMessages.formName}</legend>
              <div data-row-span="2">
                <div data-field-span="1">
                  <label>{vCreateNewLeadMessages.firstname}</label>
                  <input type="text"/>
                </div>
                <div data-field-span="1">
                  <label>{vCreateNewLeadMessages.lastname}</label>
                  <input type="text"/>
                </div>
              </div>
              <div data-row-span="3">
                <div data-field-span="1">
                  <label>{vCreateNewLeadMessages.email}</label>
                  <input type="text"/>
                </div>
                <div data-field-span="1">
                  <label>{vCreateNewLeadMessages.company}</label>
                  <input type="text"/>
                </div>
                <div data-field-span="1">
                  <label>{vCreateNewLeadMessages.address}</label>
                  <input type="text"/>
                </div>
              </div>
              <div data-row-span="1">
                <div data-field-span="1">
                  <label>{vCreateNewLeadMessages.complementaryNote}</label>
                  <textarea></textarea>
                </div>
              </div>
          </fieldset>
        </form>
        <Button clickCallback={f} label={'AJOUTER'} />
      </div>
    )
  }
}