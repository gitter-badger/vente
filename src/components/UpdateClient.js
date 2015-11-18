import React from 'react'
import Messages from '../constants/messages.json'
import LeadForm from './LeadForm'
import LeadActions from '../actions/LeadActions'

/**
* @class UpdateLead
* @author Mayas Haddad
*/
export default class UpdateClient extends React.Component {

  /*
  *  @name constructor
  */
  constructor(props) {
    this.props = super(props)
  }

  /**
  * renders the JSX representing the add new lead form.
  * @returns {jsx}
  */
  render() {
    let vUpdateNewClientMessages = Messages[this.props.lang]
         .updateLeadFormLabels

    let vClientActions = new LeadActions()

    let vClient = {
      title: 'mr',
      firstname: 'Nicolas',
      lastname: 'Vanalder',
      email: 'mayas_91@goatmail.com',
      birthday: '1988-10-01',
      company: 'Cap',
      complementaryNote: 'This is the best lead so far',
      budget: '50000',
      celPhone: '0687485928',
      officePhone: '0187485928',
      address: {
        street: '3 rue toto',
        zipCode: '75000',
        city: 'Paris',
        country: 'FR'
      }
    }

    return <LeadForm
            lead = { vClient }
            formName = { vUpdateNewClientMessages.formName }
            submitButtonLabel = { vUpdateNewLeadMessages.submitButtonLabel }
            clickCallback = { vClientActions.doUpdateClient }
            lang = { this.props.lang }
            theme = { this.props.theme }
     />
  }
}
