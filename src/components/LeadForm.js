import React from 'react'
import '../../lib/gridforms/gridforms.css'
import '../styles/main.css'
window.$ = window.jQuery = require('../../lib/jquery.js')
import '../../lib/gridforms/gridforms.js'
import Messages from '../constants/messages.json'
import Button from '../utilityComponents/Button'
import Immutable from 'immutable'

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
    this.handleChange = this.handleChange.bind(this)
    
    this.state = {
      locale: 'fr-FR'
    }
  }
  
  handleChange() {
    let vOldState = Immutable.Map(this.state)
    let vNewState = vOldState.set(
      'lead', 
      {
            firstname: this.refs.firstname.value,
            lastname: this.refs.lastname.value,
            email: this.refs.email.value,
            company: this.refs.company.value,
            address: this.refs.address.value,
            sideNote: this.refs.sideNote.value
      }
    )
    this.setState(vNewState.toObject())
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
                <input type="text" ref="firstname" onChange={this.handleChange} defaultValue={this.props.firstname} />
              </div>
              <div data-field-span="1">
                <label>{vLeadFormLabels.lastname}</label>
                <input type="text" ref="lastname" onChange={this.handleChange} defaultValue={this.props.lastname} />
              </div>
            </div>
            <div data-row-span="3">
              <div data-field-span="1">
                <label>{vLeadFormLabels.email}</label>
                <input type="text" ref="email" onChange={this.handleChange} defaultValue={this.props.email} />
              </div>
              <div data-field-span="1">
                <label>{vLeadFormLabels.company}</label>
                <input type="text" ref="company" onChange={this.handleChange} defaultValue={this.props.company} />
              </div>
              <div data-field-span="1">
                <label>{vLeadFormLabels.address}</label>
                <input type="text" ref="address" onChange={this.handleChange} defaultValue={this.props.address} />
              </div>
            </div>
            <div data-row-span="1">
              <div data-field-span="1">
                <label>{vLeadFormLabels.complementaryNote}</label>
                <textarea style={{height: 10 + 'em'}} onChange={this.handleChange} ref="sideNote" defaultValue={this.props.complementaryNote}></textarea>
              </div>
            </div>
        </fieldset>
        <Button label={this.props.submitButtonLabel} data={this.state.lead} clickCallback={this.props.clickCallback} />
      </form>
    )
  }
}

React.statics = {
  propTypes: {
    formName: React.PropTypes.string.isRequired,
    submitButtonLabel: React.PropTypes.string.isRequired,
    firstname: React.PropTypes.string,
    lastname: React.PropTypes.string,
    email: React.PropTypes.string,
    company: React.PropTypes.string,
    address: React.PropTypes.string,
    complementaryNote: React.PropTypes.string,
    clickCallback: React.PropTypes.func.isRequired
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