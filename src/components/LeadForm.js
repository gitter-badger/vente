import React from 'react'
import '../../lib/gridforms/gridforms.css'
import '../styles/main.css'
window.$ = window.jQuery = require('../../lib/jquery.js')
import '../../lib/gridforms/gridforms.js'
import Messages from '../constants/messages.json'
import Button from '../utilityComponents/Button'
import Immutable from 'immutable'
import'react-date-picker/index.css'
import DatePicker from 'react-date-picker'
import DataCheck from '../common/DataCheck'
import Header from './Header'

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
    this.dataCheck = this.dataCheck.bind(this)
    this.makeDatePickerAppear = this.makeDatePickerAppear.bind(this)
    this.handleDatePicked = this.handleDatePicked.bind(this)
    this.hideDatePicker = this.hideDatePicker.bind(this)
    this.handleTitleChangeMr = this.handleTitleChangeMr.bind(this)
    this.handleTitleChangeMrs = this.handleTitleChangeMrs.bind(this)
    
    this.state = {
      locale: 'fr-FR',
      style: {}
    }
  }
  
  setFieldWarning(pFieldKey, pStyle) {
    pStyle[pFieldKey] = { backgroundColor: '#FFEB3B' }
    return false    
  }
  
  dataCheck() {
    
    let style = {}
    
    let vStrictNumberFields = ['budget', 'zipCode']
    let vTelephoneFields = ['officePhone', 'celPhone']
    
    if(!this.state.title) {
        style['title'] = { backgroundColor: '#F44336' }      
        this.setState({'style': style})
        return false
    }
    
    for(let key in this.refs) {
      let success = true
      let vFieldValue = this.refs[key].value
      
      if(!vFieldValue && key !== 'sideNote' && key !== 'mr' && key !== 'mrs') {
        style[key] = { backgroundColor: '#F44336' }
        success = false
      }
      
      if(key === 'email') {
        if(!DataCheck.checkValidEmail(vFieldValue)) {
          success = this.setFieldWarning(key, style)
        }
      }
      
      if(vTelephoneFields.indexOf(key) > -1 && !DataCheck.isPhoneNumber(vFieldValue, this.refs.country.value)) {
          success = this.setFieldWarning(key, style)
      }

      if(vStrictNumberFields.indexOf(key) > -1 && !DataCheck.isNumeric(vFieldValue)) {
          success = this.setFieldWarning(key, style)
      }
      
      if(!success) {
        this.setState({'style': style})
        return false
      }
    }
    
    this.setState({'style': {}})
    return true
  }
  
  handleChange() {
    this.setState({'lead':
      {
        title: this.state.title,
        firstname: this.refs.firstname.value,
        lastname: this.refs.lastname.value,
        birthday: this.refs.birthday.value,
        email: this.refs.email.value,
        company: this.refs.company.value,
        budget: this.refs.budget.value,
        celPhone: this.refs.celPhone.value,
        officePhone: this.refs.officePhone.value,
        address: {
          street: this.refs.street.value,
	        zipCode: this.refs.zipCode.value,
				  city: this.refs.city.value,
			    country: this.refs.country.value
        },
        sideNote: this.refs.sideNote.value
      }
    })
  }
  
  handleDatePicked(e) {
    this.refs.birthday.value = e
    this.hideDatePicker()
  }
  
  hideDatePicker() {
    this.setState({'datePicker': null})
  }

  makeDatePickerAppear(e) {
    e.stopPropagation()
    let vToday = new Date()
    let vMonthNumber = vToday.getMonth() + 1
    let vTodayYYYYMMDD = vToday.getFullYear() + '-' + vMonthNumber + '-' + vToday.getDate()
    let vDatePicker = <DatePicker locale={this.state.locale} minDate='1900-01-01' maxDate= {vTodayYYYYMMDD} 
    date={vToday} 
    onChange={this.handleDatePicked} />
    this.setState({'datePicker': vDatePicker})
  }
  
  stopPropagation(e) {
    e.stopPropagation()
  }
  
  componentDidMount() {
    
    if(this.props.lead.title === 'mr') {
      this.refs.mr.checked = 'checked'
    }
    
    if(this.props.lead.title === 'mrs') {
      this.refs.mrs.checked = 'checked'
    }
  }

  handleTitleChangeMr() {
    this.setState({'title': 'mr'})
  }
  
  handleTitleChangeMrs() {
    this.setState({'title': 'mrs'})
  }

  /**
  * renders the JSX representing the add new lead form.
  * @returns {jsx}
  */
  render() {
    let vLeadFormLabels = Messages[this.state.locale]
    .leadFormLabels
    return (
      <div onFocus={this.hideDatePicker}>
  			<Header />
        <form className="grid-form">
          <fieldset>
              <legend style={{fontFamily: 'RobotoRegular'}}>{this.props.formName}</legend>
              <div data-row-span="4">
                <div data-field-span="1">
                  <label style={this.state.style.title}>{vLeadFormLabels.title}</label>
                  <label>{vLeadFormLabels.titleMr}<input type="radio" onChange={this.handleTitleChangeMr} name="customer-title[]" ref="mr"/></label>
                  <label>{vLeadFormLabels.titleMrs}<input type="radio" onChange={this.handleTitleChangeMrs} name="customer-title[]" ref="mrs"/></label>
                </div>       
                <div data-field-span="1">
                  <label style={this.state.style.firstname}>{vLeadFormLabels.firstname}</label>
                  <input type="text" ref="firstname" onChange={this.handleChange} defaultValue={this.props.lead.firstname} />
                </div>
                <div data-field-span="1">
                  <label style={this.state.style.lastname}>{vLeadFormLabels.lastname}</label>
                  <input type="text" ref="lastname" onChange={this.handleChange} defaultValue={this.props.lead.lastname} />
                </div>
                <div data-field-span="1">
                  <label style={this.state.style.birthday}>{vLeadFormLabels.birthday}</label>
                  <div onFocus={this.stopPropagation} style={{position: 'fixed', minWidth: 30 + '%', height: 'auto', right: 0}}>{this.state.datePicker}</div>
                  <input type="text" ref="birthday" defaultValue = { this.props.lead.birthday } onFocus={this.makeDatePickerAppear} />
                </div>
              </div>
              
              <div data-row-span="3">
                <div data-field-span="1">
                  <label style={this.state.style.email}>{vLeadFormLabels.email}</label>
                  <input type="text" ref="email" onChange={this.handleChange} defaultValue={this.props.lead.email} />
                </div>
                <div data-field-span="1">
                  <label style={this.state.style.celPhone}>{vLeadFormLabels.celPhone}</label>
                  <input type="text" ref="celPhone" onChange={this.handleChange} defaultValue={this.props.lead.celPhone} />
                </div>
                <div data-field-span="1">
                  <label style={this.state.style.officePhone}>{vLeadFormLabels.officePhone}</label>
                  <input type="text" ref="officePhone" onChange={this.handleChange} defaultValue={this.props.lead.officePhone} />
                </div>
              </div>
              
              <fieldset>
              <legend style={{fontFamily: 'RobotoRegular', paddingTop: 0.3 + 'em'}}>{vLeadFormLabels.address.label}</legend>
                <div data-row-span="4">
                  <div data-field-span="1">
                    <label style={this.state.style.street}>{vLeadFormLabels.address.street}</label>
                    <input type="text" ref="street" onChange={this.handleChange} defaultValue={this.props.lead.address.street} />
                  </div>
                  <div data-field-span="1">
                    <label style={this.state.style.zipCode}>{vLeadFormLabels.address.zipCode}</label>
                    <input type="text" ref="zipCode" onChange={this.handleChange} defaultValue={this.props.lead.address.zipCode} />
                  </div>
                  <div data-field-span="1">
                    <label style={this.state.style.city}>{vLeadFormLabels.address.city}</label>
                    <input type="text" ref="city" onChange={this.handleChange} defaultValue={this.props.lead.address.city} />
                  </div>
                  <div data-field-span="1">
                    <label style={this.state.style.country}>{vLeadFormLabels.address.country}</label>
                  <select ref="country" onChange={this.handleChange} defaultValue = {this.props.lead.address.country}>
                      {Messages[this.state.locale].countries.map(function(i) { return <option key={i.code} value={i.code}>{i.name}</option>})}
                    </select>
                  </div>
                </div>
              </fieldset>
              <div data-row-span="2">
                <div data-field-span="1">
                  <label style={this.state.style.company}>{vLeadFormLabels.company}</label>
                  <input type="text" ref="company" onChange={this.handleChange} defaultValue={this.props.lead.company} />
                </div>
                <div data-field-span="1">
                  <label style={this.state.style.budget}>{vLeadFormLabels.budget}</label>
                  <input type="text" ref="budget" onChange={this.handleChange} defaultValue={this.props.lead.budget} />
                </div>
              </div>
              <div data-row-span="1">
                <div data-field-span="1">
                  <label>{vLeadFormLabels.complementaryNote}</label>
                  <textarea style={{height: 10 + 'em'}} onChange={this.handleChange} ref="sideNote" defaultValue={this.props.lead.complementaryNote}></textarea>
                </div>
              </div>
          </fieldset>
          <Button label={this.props.submitButtonLabel} dataCheck={this.dataCheck} data={this.state.lead} clickCallback={this.props.clickCallback} />
        </form>
      </div>
    )
  }
}

LeadForm.propTypes = {
    formName: React.PropTypes.string.isRequired,
    submitButtonLabel: React.PropTypes.string.isRequired,
    lead: React.PropTypes.shape({
      title: React.PropTypes.string,
      firstname: React.PropTypes.string,
      lastname: React.PropTypes.string,
      email: React.PropTypes.string,
      company: React.PropTypes.string,
      birthday: React.PropTypes.string,
      budget: React.PropTypes.string,
      celPhone: React.PropTypes.string,
      officePhone: React.PropTypes.string,
      address: React.PropTypes.shape({
          street: React.PropTypes.string,
          zipCode: React.PropTypes.string,
          city: React.PropTypes.string,
          country: React.PropTypes.string
      }),
      complementaryNote: React.PropTypes.string
    }),
    clickCallback: React.PropTypes.func.isRequired
  }
  
 LeadForm.defaultProps = {
   lead: {
      title: '',
      firstname: '',
      lastname: '',
      email: '',
      birthday: '',
      company: '',
      budget: '',
      celPhone: '',
      officePhone: '',
      address: {
        street: '',
        zipCode: '',
        city: '',
        country: ''
      },
      complementaryNote: ''
    }
  }
  
export default LeadForm