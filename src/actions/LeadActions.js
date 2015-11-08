import Ajax from '../common/Ajax'
import AlertsStore from '../stores/AlertsStore'
import Config from '../constants/config.json'
import {Natures} from 'react-material-alert'

export default class LeadActions {
	constructor() {	
                this.mAjax = new Ajax()
                this.doAddLead = this.doAddLead.bind(this)
                this.doUpdateLead = this.doUpdateLead.bind(this)
	}
	
	doAddLead(pNewLead) {
		this.mAjax.post(Config.persistLeadServerURL, 'application/json;charset=UTF-8', pNewLead, 
                function(response) {
                        (JSON.parse(response).success === true ?
                                AlertsStore.addNewAlertMessage({
                                        nature: Natures.SUCCESS,
                                        content: 'networkSuccess.successfullyAddedLead'
                                }) :
                                AlertsStore.addNewAlertMessage({
                                        nature: Natures.FAILURE,
                                        content: 'collisionError.aLeadWithTheSameEmailExists'
                                }))
                }, function(e) { 
                        AlertsStore.addNewAlertMessage({
                                nature: Natures.FAILURE,
                                content: 'networkError.couldntAddLead'
                        })
                })
	}
        
        doUpdateLead(pLeadToUpdate) {
		this.mAjax.post(Config.updateLeadServerURL, 'application/json;charset=UTF-8', pLeadToUpdate, 
                function(response) {
                        JSON.parse(response).success === true ?
                                AlertsStore.addNewAlertMessage({
                                        nature: Natures.SUCCESS,
                                        content: 'networkSuccess.successfullyUpdatedLead'
                        }) :
                                AlertsStore.addNewAlertMessage({
                                        nature: Natures.FAILURE,
                                        content: 'collisionError.aLeadWithTheSameEmailExists'
                                })
                }, function(e) { 
                        AlertsStore.addNewAlertMessage({
                                nature: Natures.FAILURE,
                                content: 'networkError.couldntUpdateLead'
                        })
                })
	}
}