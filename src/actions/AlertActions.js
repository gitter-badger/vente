import AlertsStore from '../stores/AlertsStore'
import {Natures} from 'react-material-alert'

export default class AlertActions {
	
	static doAlertFailure(pMessage) {
		AlertsStore.addNewAlertMessage({
				nature: Natures.FAILURE,
				content: pMessage
		})
	}
	
	static doAlertWarning(pMessage) {
		AlertsStore.addNewAlertMessage({
				nature: Natures.WARNING,
				content: pMessage
		})
	}
}