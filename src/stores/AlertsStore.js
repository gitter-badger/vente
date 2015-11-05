import {EventEmitter} from 'events'
import EventNames from '../constants/EventNames.json'
import Dispatcher from '../dispatcher/Dispatcher.js'

export default Object.assign({}, EventEmitter.prototype, {
    
    mAlertMessage: null,
    
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
        this.mAlertMessage = pAlertMessage
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