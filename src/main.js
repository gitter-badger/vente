import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, Link } from 'react-router'
import CreateNewLead from './components/CreateNewLead'
import UpdateLead from './components/UpdateLead'
import Index from './components/Index'

(() => {
	let app = document.getElementById('app')
	
	ReactDOM.render((
		<div>
			<div>
        		<a href="#/create-new-lead" >Create Lead </a>
        		<a href="#/update-lead" >Update Lead</a>
        	</div>
			<Router>
				<Route path="/" component={Index}/>
				<Route path="/create-new-lead" component={CreateNewLead}/>
				<Route path="/update-lead" component={UpdateLead}/>
			</Router>
	  	</div>
	), app)
})()