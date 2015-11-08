import {EventEmitter} from 'events'
import EventNames from '../constants/EventNames.json'
import Dispatcher from '../dispatcher/Dispatcher.js'
import messages from '../constants/messages.json'

export default Object.assign({}, EventEmitter.prototype, {
    
    mAlertMessage: {},
    
    register: function() {
        AppAppDispatcher.register((pPayload) => {
            // reminder switch case performs a strict comparison (===)
            switch(pPayload.actionType) {
                case EventNames.ALERT:
                    AlertsStore.addNewAlertMessage(pPayload.alertMessages)
                break
            }
        })
    },
    
    addNewAlertMessage: function(pAlertMessage) {
        this.mAlertMessage.nature = pAlertMessage.nature
        this.mAlertMessage.content = pAlertMessage.content
        this.emit(EventNames.ALERT)
    },    
    
    getAlertMessage: function(pLang) {
        return {
            'nature': this.mAlertMessage.nature,
            'content': messages[pLang].alertMessages[this.mAlertMessage.content.split('.')[0]][this.mAlertMessage.content.split('.')[1]]
        }
    },
        
    /**
    * @param {function} callback
    */
    addChangeListener: function(callback) {
        this.on(EventNames.ALERT, callback)
    },

    /**
    * @param {function} callback
    */
    removeChangeListener: function(callback) {
        this.removeListener(EventNames.ALERT, callback)
    }
})