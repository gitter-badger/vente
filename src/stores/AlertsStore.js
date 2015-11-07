import {EventEmitter} from 'events'
import EventNames from '../constants/EventNames.json'
import Dispatcher from '../dispatcher/Dispatcher.js'
import I18nStore from './I18nStore'
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
        console.log(messages[I18nStore.getCurrentLang()])
        this.mAlertMessage.content = messages[I18nStore.getCurrentLang()].alertMessages[pAlertMessage.content.split('.')[0]][pAlertMessage.content.split('.')[1]]
        this.emit(EventNames.ALERT)
    },    
    
    getAlertMessage: function() {
        return this.mAlertMessage
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