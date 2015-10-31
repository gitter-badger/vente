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
  
  dataCheck() {
    
    let style = {}
    
    console.log(this.state.title)

    if(!this.state.title) {
        style['title'] = { backgroundColor: '#F44336' }      
        this.setState({'style': style})
        return false
    }
    
    for(let key in this.refs) {
      let success = true
      if(!this.refs[key].value && key !== 'sideNote' && key !== 'mr' && key !== 'mrs') {
        style[key] = { backgroundColor: '#F44336' }
        success = false
      }
      if(key === 'email') {
        if(!DataCheck.checkValidEmail(this.refs[key].value)) {
          style[key] = { backgroundColor: '#FFEB3B' }
          success = false
        }
      }
      
      if(!success) {
        this.setState({'style': style})
        return false
      }
    }

    return true
  }
  
  handleChange() {
    this.setState({'lead':
      {
        title: this.state.title,
        firstname: this.refs.firstname.value,
        lastname: this.refs.lastname.value,
        email: this.refs.email.value,
        company: this.refs.company.value,
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
    
    if(this.props.title === 'mr') {
      this.refs.mr.checked = 'checked'
    }
    
    if(this.props.title === 'mrs') {
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
                <input type="text" ref="firstname" onChange={this.handleChange} defaultValue={this.props.firstname} />
              </div>
              <div data-field-span="1">
                <label style={this.state.style.lastname}>{vLeadFormLabels.lastname}</label>
                <input type="text" ref="lastname" onChange={this.handleChange} defaultValue={this.props.lastname} />
              </div>
              <div data-field-span="1">
                <label style={this.state.style.birthday}>{vLeadFormLabels.birthday}</label>
                <div onFocus={this.stopPropagation} style={{position: 'fixed', minWidth: 30 + '%', height: 'auto', right: 0}}>{this.state.datePicker}</div>
                <input type="text" ref="birthday" onFocus={this.makeDatePickerAppear} />
              </div>
            </div>
            
            <div data-row-span="3">
              <div data-field-span="1">
                <label style={this.state.style.email}>{vLeadFormLabels.email}</label>
                <input type="text" ref="email" onChange={this.handleChange} defaultValue={this.props.email} />
              </div>
              <div data-field-span="1">
                <label style={this.state.style.celPhone}>{vLeadFormLabels.celPhone}</label>
                <input type="text" ref="celPhone" onChange={this.handleChange} defaultValue={this.props.celPhone} />
              </div>
              <div data-field-span="1">
                <label style={this.state.style.officePhone}>{vLeadFormLabels.officePhone}</label>
                <input type="text" ref="officePhone" onChange={this.handleChange} defaultValue={this.props.officePhone} />
              </div>
            </div>
            
            <fieldset>
            <legend style={{fontFamily: 'RobotoRegular'}}>{vLeadFormLabels.address.label}</legend>
              <div data-row-span="4">
                <div data-field-span="1">
                  <label style={this.state.style.addressStreet}>{vLeadFormLabels.address.street}</label>
                  <input type="text" ref="street" onChange={this.handleChange} defaultValue={this.props.addressStreet} />
                </div>
                <div data-field-span="1">
                  <label style={this.state.style.addressZipCode}>{vLeadFormLabels.address.zipCode}</label>
                  <input type="text" ref="zipCode" onChange={this.handleChange} defaultValue={this.props.addressZipCode} />
                </div>
                 <div data-field-span="1">
                  <label style={this.state.style.addressCity}>{vLeadFormLabels.address.city}</label>
                  <input type="text" ref="city" onChange={this.handleChange} defaultValue={this.props.addressCity} />
                </div>
                <div data-field-span="1">
                  <label style={this.state.style.addressCountry}>{vLeadFormLabels.address.country}</label>
                 <select ref="country" onChange={this.handleChange}>
                    {Messages[this.state.locale].countries.map(function(i) { return <option key={i} value={i}>{i}</option>})}
                  </select>
                </div>
              </div>
            </fieldset>
            <div data-row-span="2">
              <div data-field-span="1">
                <label style={this.state.style.company}>{vLeadFormLabels.company}</label>
                <input type="text" ref="company" onChange={this.handleChange} defaultValue={this.props.company} />
              </div>
              <div data-field-span="1">
                <label style={this.state.style.budget}>{vLeadFormLabels.budget}</label>
                <input type="text" ref="budget" onChange={this.handleChange} defaultValue={this.props.budget} />
              </div>
            </div>
            <div data-row-span="1">
              <div data-field-span="1">
                <label>{vLeadFormLabels.complementaryNote}</label>
                <textarea style={{height: 10 + 'em'}} onChange={this.handleChange} ref="sideNote" defaultValue={this.props.complementaryNote}></textarea>
              </div>
            </div>
        </fieldset>
        <Button label={this.props.submitButtonLabel} dataCheck={this.dataCheck} data={this.state.lead} clickCallback={this.props.clickCallback} />
      </form>
      </div>
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
    address: React.PropTypes.shape(
      {
        street: React.PropTypes.string,
        zipCode: React.PropTypes.string,
        city: React.PropTypes.string,
        country: React.PropTypes.string
      }
    ),
    complementaryNote: React.PropTypes.string,
    clickCallback: React.PropTypes.func.isRequired
  },
  
  defaultProps: {
    title: '',
    firstname: '',
    lastname: '',
    email: '',
    company: '',
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