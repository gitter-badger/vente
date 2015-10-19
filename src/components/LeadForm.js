import React from 'react'
import '../../lib/gridforms/gridforms.css'
import '../styles/main.css'
window.$ = window.jQuery = require('../../lib/jquery.js')
import '../../lib/gridforms/gridforms.js'
import Messages from '../constants/messages.json'

/**
* @class LeadForm
* @author Mayas Haddad
*/
class LeadForm extends React.Component {

  /**
  **  @name constructor
  **/
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
    let vLeadFormLabels = Messages[this.state.locale]
    .leadFormLabels
     
    return (
      <form className="grid-form">
        <fieldset>
            <legend style={{fontFamily: 'RobotoRegular'}}>{this.props.formName}</legend>
            <div data-row-span="2">
              <div data-field-span="1">
                <label>{vLeadFormLabels.firstname}</label>
                <input type="text" defaultValue={this.props.firstname} />
              </div>
              <div data-field-span="1">
                <label>{vLeadFormLabels.lastname}</label>
                <input type="text" defaultValue={this.props.lastname} />
              </div>
            </div>
            <div data-row-span="3">
              <div data-field-span="1">
                <label>{vLeadFormLabels.email}</label>
                <input type="text" defaultValue={this.props.email} />
              </div>
              <div data-field-span="1">
                <label>{vLeadFormLabels.company}</label>
                <input type="text" defaultValue={this.props.company} />
              </div>
              <div data-field-span="1">
                <label>{vLeadFormLabels.address}</label>
                <input type="text" defaultValue={this.props.address} />
              </div>
            </div>
            <div data-row-span="1">
              <div data-field-span="1">
                <label>{vLeadFormLabels.complementaryNote}</label>
                <textarea style={{height: 10 + 'em'}} defaultValue={this.props.complementaryNote}></textarea>
              </div>
            </div>
        </fieldset>
      </form>
    )
  }
}

React.statics = {
  propTypes: {
    formName: React.PropTypes.string.isRequired,
    firstname: React.PropTypes.string,
    lastname: React.PropTypes.string,
    email: React.PropTypes.string,
    company: React.PropTypes.string,
    address: React.PropTypes.string,
    complementaryNote: React.PropTypes.string
  },
  
  defaultProps: {
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    address: '',
    complementaryNote: ''
  }
}
export default LeadForm