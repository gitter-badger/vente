import Dispatcher from '../dispatcher/Dispatcher.js'
import EventNames from '../constants/EventNames.json'

export default OffScreenMenuAction {
	
	doGetOffScreenMenu() {
		Dispatcher.dispatche(
			actionType: EventNames.GET_OFF_SCREEN_MENU,
            menuItems: {}
		)
	}
}