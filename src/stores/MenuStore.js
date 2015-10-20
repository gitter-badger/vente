import EventEmitter from 'events'.EventEmitter
import EventNames from '../constants/EventNames.json'
import Dispatcher from '../dispatcher/Dispatcher.js'

export default Object.assign({}, EventEmitter.prototype, {
	
	mMenuElements: null,

	getMenuElements: function() {
		return this.mMenuElements
	}
	register: function() {
		Dispatcher.register((pPayload) => {
			switch(pPayload.actionType) {
                case EventNames.GET_OFF_SCREEN_MENU:
                    AlertsStore.triggerMenuWithContent(pPayload.menuItems)
                break
            }
		})
	}

    triggerMenuWithContent: function(pMenuItems) {
        this.mMenuElements = pMenuItems
        this.emit(EventNames.GET_OFF_SCREEN_MENU)
    },    

	/**
    * @param {function} callback
    */
    addChangeListener: function(callback) {
        this.on(EventNames.GET_OFF_SCREEN_MENU, callback)
    },

    /**
    * @param {function} callback
    */
    removeChangeListener: function(callback) {
        this.removeListener(EventNames.GET_OFF_SCREEN_MENU, callback)
    }
})