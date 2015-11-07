import {EventEmitter} from 'events'
import EventNames from '../constants/EventNames.json'
import Dispatcher from '../dispatcher/Dispatcher.js'

export default Object.assign({}, EventEmitter.prototype, {
    
	// lan is en-US by default
    mCurrentTheme: 'greenCash',
    
    register: function() {
        AppAppDispatcher.register((pPayload) => {
            // reminder switch case performs a strict comparison (===)
            switch(pPayload.actionType) {
                case EventNames.CURRENT_THEME_AVAILABLE:
                    I18nStore.updateCurrentTheme(pPayload.theme)
                break
            }
        })
    },
    
    updateCurrentTheme: function(pCurrentTheme) {
        this.mCurrentTheme = pCurrentTheme
        this.emit(EventNames.CURRENT_THEME_AVAILABLE)
    },    
    
    getCurrentTheme: function() {
        return this.mCurrentTheme
    },
        
    /**
    * @param {function} callback
    */
    addChangeListener: function(callback) {
        this.on(EventNames.CURRENT_THEME_AVAILABLE, callback)
    },

    /**
    * @param {function} callback
    */
    removeChangeListener: function(callback) {
        this.removeListener(EventNames.CURRENT_THEME_AVAILABLE, callback)
    }
})