import Ajax from '../common/Ajax'
import Config from '../constants/config.json'

export default class LeadActions {
	constructor() {	
	}
	
	doAddLead(pNewLead) {
		var vAjax = new Ajax()
		vAjax.post(Config.persistLeadServerURL, 'application/json;charset=UTF-8', pNewLead, 
        function(response) {
            // AlertsStore.addNewAlertMessage({
            //             nature: Natures.SUCCESS,
            //             content: "Great! The to-read-list has been updated!"
            // });
        }, function(e) { 
            // AlertsStore.addNewAlertMessage({
            //     nature: Natures.FAILURE,
            //     content: "Woops :( couldn't update to-read-list"
            // });
        })
	}
}