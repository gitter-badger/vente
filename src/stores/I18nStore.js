import {EventEmitter} from 'events'
import EventNames from '../constants/EventNames.json'
import Dispatcher from '../dispatcher/Dispatcher.js'

export default Object.assign({}, EventEmitter.prototype, {
    
	// lan is en-US by default
    mCurrentLang: 'en-US',
    
    register: function() {
        AppAppDispatcher.register((pPayload) => {
            // reminder switch case performs a strict comparison (===)
            switch(pPayload.actionType) {
                case EventNames.CURRENT_LANG_AVAILABLE:
                    I18nStore.updateCurrentLang(pPayload.lang)
                break
            }
        })
    },
    
    updateCurrentLang: function(pCurrentLang) {
        this.mCurrentLang = pCurrentLang
        this.emit(EventNames.CURRENT_LANG_AVAILABLE)
    },    
    
    getCurrentLang: function() {
        return this.mCurrentLang
    },
        
    /**
    * @param {function} callback
    */
    addChangeListener: function(callback) {
        this.on(EventNames.CURRENT_LANG_AVAILABLE, callback)
    },

    /**
    * @param {function} callback
    */
    removeChangeListener: function(callback) {
        this.removeListener(EventNames.CURRENT_LANG_AVAILABLE, callback)
    }
})