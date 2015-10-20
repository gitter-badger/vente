import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, Link } from 'react-router'
import CreateNewLead from './components/CreateNewLead'
import UpdateLead from './components/UpdateLead'

(() => {
	var app = document.getElementById('app')
	
	ReactDOM.render((
	  <Router>
	    <Route path="/create-new-lead" component={CreateNewLead}/>
	    <Route path="/" component={UpdateLead}/>
	  </Router>
	), app)
})()