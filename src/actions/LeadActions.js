import Ajax from '../common/Ajax'
import Config from '../constants/config.json'

export default class LeadActions {
	constructor() {	
        this.mAjax = new Ajax()
        this.doAddLead = this.doAddLead.bind(this)
	}
	
	doAddLead(pNewLead) {
		this.mAjax.post(Config.persistLeadServerURL, 'application/json;charset=UTF-8', pNewLead, 
        function(response) {
            AlertsStore.addNewAlertMessage({
                        nature: Natures.SUCCESS,
                        content: 'Great! The to-read-list has been updated!'
            });
        }, function(e) { 
            console.log(e)
            AlertsStore.addNewAlertMessage({
                nature: Natures.FAILURE,
                content: 'Woops :( couldn\'t update to-read-list'
            });
        })
	}
}