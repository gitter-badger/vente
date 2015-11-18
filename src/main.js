import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, Link } from 'react-router'
import CreateNewLead from './components/CreateNewLead'
import UpdateLead from './components/UpdateLead'
import Index from './components/Index'
import I18nStore from './stores/I18nStore'
import ThemeStore from './stores/ThemeStore'
import OffScreenNavigationContent from './utilityComponents/OffScreenNavigationContent'

(() => {
	let app = document.getElementById('app')

	// init lang
	let locale
	let updateLocale = () => locale = I18nStore.getCurrentLang()

	updateLocale()

	I18nStore.addChangeListener(updateLocale)

	// init theme
	let theme
	let updateTheme = () => theme = ThemeStore.getCurrentTheme()

	updateTheme()

	ThemeStore.addChangeListener(updateTheme)

	ReactDOM.render((
		<div>
			<Router>
				<Route path="/" component={OffScreenNavigationContent} content={Index} theme={theme} lang={locale} />
				<Route path="/create-new-lead" component={OffScreenNavigationContent} content={CreateNewLead} theme={theme} lang={locale} />
				<Route path="/update-lead" component={OffScreenNavigationContent} content={UpdateLead} theme={theme} lang={locale} />
				<Route path="/update-client" component={OffScreenNavigationContent} content={CreateNewLead} theme={theme} lang={locale} />
			</Router>
	  	</div>
	), app)
})()
