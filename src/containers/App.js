import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Waypoint from 'react-waypoint'

import { getSearchPath } from '../utils/util'
import RandomImage from './RandomImage'
import SearchForm from './SearchForm'
import SearchTerms from './SearchTerms'
import SearchResults from './SearchResults'
import { 
  addTerm,
  getTrending, 
  goSearch 
} from '../actions/app'
import './App.css'

class App extends Component {
  static propTypes = {
    state: PropTypes.shape({
      app: PropTypes.object.isRequired,
      results: PropTypes.array.isRequired,
      searchTerms: PropTypes.array.isRequired
    }).isRequired,
    actions: PropTypes.shape({
      addTerm: PropTypes.func.isRequired,
      getTrending: PropTypes.func.isRequired,
      goSearch: PropTypes.func.isRequired
    }).isRequired
  }

  render() {
    const { state, actions } = this.props
    const { results, searchTerms, random } = state

    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title rainbow-wrapper">
            <svg className="giphy-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164 35" itemProp="logo">
                <g className="logo-icon" fillRule="evenodd" clipRule="evenodd">
                    <path className="logo-green" d="M0 3h4v29H0z"></path>
                    <path className="logo-purple" d="M24 11h4v21h-4z"></path>
                    <path className="logo-blue" d="M0 31h28v4H0z"></path>
                    <path className="logo-yellow" d="M0 0h16v4H0z"></path>
                    <path className="logo-red" d="M24 8V4h-4V0h-4v12h12V8"></path>
                    <path className="logo-shadow" d="M24 16v-4h4M16 0v4h-4"></path>
                </g>
                <g className="logo-text">
                    <path d="M59.1 12c-2-1.9-4.4-2.4-6.2-2.4-4.4 0-7.3 2.6-7.3 8 0 3.5 1.8 7.8 7.3 7.8 1.4 0 3.7-.3 5.2-1.4v-3.5h-6.9v-6h13.3v12.1c-1.7 3.5-6.4 5.3-11.7 5.3-10.7 0-14.8-7.2-14.8-14.3 0-7.1 4.7-14.4 14.9-14.4 3.8 0 7.1.8 10.7 4.4L59.1 12zM68.2 31.2V4h7.6v27.2h-7.6zM88.3 23.8v7.3h-7.7V4h13.2c7.3 0 10.9 4.6 10.9 9.9 0 5.6-3.6 9.9-10.9 9.9h-5.5zm0-6.5h5.5c2.1 0 3.2-1.6 3.2-3.3 0-1.8-1.1-3.4-3.2-3.4h-5.5v6.7zM125 31.2V20.9h-9.8v10.3h-7.7V4h7.7v10.3h9.8V4h7.6v27.2H125zM149.2 13.3l5.9-9.3h8.7v.3l-10.8 16v10.8h-7.7V20.3L135 4.3V4h8.7l5.5 9.3z"></path>
                </g>
            </svg>
            <sup>Surf<sup>R<sup>R<sup>R<sup>R<sup>R</sup></sup></sup></sup></sup></sup>
          </h1>

          <SearchForm state={ state } />
          <SearchTerms state={ searchTerms } />
        </header>

       <SearchResults state={ results }/>
       <RandomImage state={ random } />

        <div className="waypoint-container">
          <Waypoint
            onEnter={ this._handleWaypointEnter }
            state = { state }
            actions = { actions }
          />
        </div>
      </div>
    )
  }

  _handleWaypointEnter() {
    const searchTerm = getSearchPath()
    const { goSearch, addTerm, getTrending } = this.props.actions
    const { results } = this.props.state
    const params = {
      offset: results && results.length ? results.length : 0
    }
    
    if (searchTerm) {
      params.search = searchTerm
      goSearch(params)
      addTerm(searchTerm)
    } else {
      getTrending(params)  
    }
  }
}

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    addTerm: addTerm,
    getTrending: getTrending,
    goSearch: goSearch
  }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

