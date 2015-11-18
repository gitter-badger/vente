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
import ColorsTheme from '../constants/ColorsTheme.json'
import AlertActions from '../actions/AlertActions'
import SVGIcon from '../utilityComponents/SVGIcon'

/**
* @class AddPurchaseForm
* @author Mayas Haddad
*/
class AddPurchaseLine extends React.Component {

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
    
    const vStyle = this.getDefaultLabelStyles()
    
	  this.state = {
      style: vStyle
    }
  }
  
  getDefaultLabelStyles() {
    let vDefaultLabelStyle = new Immutable.Map({ fontWeight: 'bold', fontSize: 'small', color: ColorsTheme[this.props.theme].labelsColors })

    return  { 
         'amount': vDefaultLabelStyle.toObject(),
         'productID': vDefaultLabelStyle.toObject(),
         'transactionDate': vDefaultLabelStyle.toObject()
      }
  }
  
  setFieldWarning(pFieldKey, pStyle) {
    pStyle[pFieldKey].backgroundColor = '#FFEB3B'
  }
  
  dataCheck() {
    let style = this.getDefaultLabelStyles()
      
    let vStrictNumberFields = ['amount']
    
    if(!this.state.title) {
        style['amount'].backgroundColor = '#F44336'
        style['amount'].color = 'white'
        this.setState({'style': style})
        AlertActions.doAlertFailure('dataCheck.fieldMissing')
        return false
    }
      
    if(vStrictNumberFields.indexOf(key) > -1 && !DataCheck.isNumeric(vFieldValue)) {
        this.setFieldWarning(key, style)
        this.setState({'style': style})
        AlertActions.doAlertWarning('dataCheck.invalidNumber')
        return false
    }
    
    this.setState({'style': this.getDefaultLabelStyles()})
    return true
  }
  
  handleChange() {
    this.props.changeHandler(this.refs)
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
    let vDatePicker = <DatePicker locale={this.props.lang} minDate='1900-01-01' maxDate= {vTodayYYYYMMDD} 
    date={vToday} 
    onChange={this.handleDatePicked} />
    this.setState({'datePicker': vDatePicker})
  }

  /**
  * renders the JSX representing the add new lead form.
  * @returns {jsx}
  */
  render() {
    let vAddPurchaseFormLabels = Messages[this.props.lang]
    .addPurchaseFormLabels
    
    return (<div data-row-span="3">
                <div data-field-span="1">
                  <label style={this.state.style.amount}>{ vAddPurchaseFormLabels.amount }</label>
                  <input onChange={this.props.changeHandler} type="text" ref={'amount' + this.props.index } />
                </div>
                <div data-field-span="1">
                  <label style={this.state.style.productID}>{ vAddPurchaseFormLabels.productID }</label>
                  <input onChange={this.props.changeHandler} type="text" ref={'productID' + this.props.index } />
                </div>
                <div data-field-span="1">
                  <label style={this.state.style.transactionDate}>{ vAddPurchaseFormLabels.transactionDate }</label>
                  <input onChange={this.props.changeHandler} type="text" ref={'transactionDate' + this.props.index } onFocus={this.makeDatePickerAppear} />
                </div>
            </div>)
  }
}

AddPurchaseLine.propTypes = {
    changeHandler: React.PropTypes.func.isRequired,
    lang: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired,
    theme: React.PropTypes.string.isRequired
  }
  
export default AddPurchaseLine