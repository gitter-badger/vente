import React from 'react'
import AlertsStore from '../stores/AlertsStore'
import {Alert} from 'react-material-alert'

/**
* This is the component which renders the form for creating a new lead
* @class CreateNewLead
* @author Mayas Haddad
*/
export default class Header extends React.Component {
    
  /**
  **  @name constructor
  **/
  constructor(props) {
    this.props = super(props)
    this.updateAlert = this.updateAlert.bind(this)
    this.closeAlert = this.closeAlert.bind(this)
    this.state = { sAlert: null }
  }
  
  /**
    * Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
    * It subscribes the current class to the ToReadListsListStore object providing this ladder with the updateToReadListsList callback.
    */
  componentDidMount() {
    AlertsStore.addChangeListener(this.updateAlert)
  }
    
   /**
   * Invoked immediately before a component is unmounted from the DOM.
   * It unsubscribes the current class to the componentWillUnmount class providing this ladder with the updateToReadListsList callback.
   */
  componentWillUnmount() {
    AlertsStore.removeChangeListener(this.updateAlert)
  }
  
  updateAlert() {
    this.setState({sAlert: <Alert alert = {AlertsStore.getAlertMessage(this.props.lang)} closeCallback={this.closeAlert}/>})
  }
  
  /**
   * @callback called whenever the close button of alert is fired.
   */
  closeAlert() {
    this.setState({ sAlert: null })
  }
  
  render() {
    
    return (
      <div>
        { this.state.sAlert }
      </div>
           )
  }
}