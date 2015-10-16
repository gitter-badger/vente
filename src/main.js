import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, Link } from 'react-router'
import CreateNewLead from './components/CreateNewLead'

(() => {
	var app = document.getElementById('app')
	
	ReactDOM.render((
	  <Router>
	    <Route path="/" component={CreateNewLead}/>
	  </Router>
	), app)
})()