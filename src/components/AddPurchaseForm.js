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
import AddPurchaseLine from './AddPurchaseLine'

/**
* @class AddPurchaseForm
* @author Mayas Haddad
*/
class AddPurchaseForm extends React.Component {

  /**
  **  @name constructor
  **/
  constructor(props) {

    super(props)
    this.props = props
    this.addPurchaseForm = this.addPurchaseForm.bind(this)
    
    const vPurchaseForm = []
    
    this.pFormNumber = 0
    
    vPurchaseForm.push(this.getPurchaseForm(this.pFormNumber))
        
    this.state = {
      purchaseForms: vPurchaseForm
    }
  }
  
  getPurchaseForm(pIndex) {
    let vAddPurchaseFormLabels = Messages[this.props.lang]
    .addPurchaseFormLabels
    return <AddPurchaseLine theme={this.props.theme} changeHandler={this.props.changeHandler} lang={this.props.lang} index={pIndex} />
  }
  
  addPurchaseForm() {
    
     this.pFormNumber++
     const vOldPurchaseForms = new Immutable.List(this.state.purchaseForms)
    
     const vNewPurchaseForms = vOldPurchaseForms.push(this.getPurchaseForm(this.pFormNumber))
     this.setState({'purchaseForms': vNewPurchaseForms.toArray()})
  }

  /**
  * renders the JSX representing the add new lead form.
  * @returns {jsx}
  */
  render() {
    return (
      <div onFocus={this.hideDatePicker}>
  			<form className="grid-form">
          <fieldset>
              <legend style={{fontFamily: 'RobotoRegular'}}>{ Messages[this.props.lang].addPurchaseFormLabels.formName }</legend>
              { this.state.purchaseForms.map(function(purchaseForm, pIndex) { return <div key={pIndex}>{purchaseForm}</div> }) }
          </fieldset>
        </form>
        <div style={{ padding: 0.5 + 'em' }} onClick={this.addPurchaseForm}>
          <SVGIcon imageUrl="./src/icons/add.svg" customStyle={ {cursor: 'pointer', marginLeft: 'auto', width: 1.5 + 'em', height: 1.5 + 'em', backgroundColor: ColorsTheme[this.props.theme].addPurchaseFormColor} } />
        </div>
      </div>
    )
  }
}

AddPurchaseForm.propTypes = {
    changeHandler: React.PropTypes.func.isRequired,
    lang: React.PropTypes.string.isRequired,
    theme: React.PropTypes.string.isRequired
  }
  
export default AddPurchaseForm