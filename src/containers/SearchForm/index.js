import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { goSearch, addTerm, clearResults } from '../../actions/app'
import { updateBrowserURL, getSearchPath } from '../../utils/util'
import './index.css'

class SearchForm extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      addTerm: PropTypes.func.isRequired,
      clearResults: PropTypes.func.isRequired,
      goSearch: PropTypes.func.isRequired
    }).isRequired,
  }

  componentDidMount() {
    this._enableEvents()
  }

  render() {
    const searchTerm = getSearchPath()

    return (
      <form className="searchForm">
        <div>
          <input type="text" name="searchTerm" placeholder="Search Giphy" ref={searchTerm} defaultValue={searchTerm}/>
          <input type="image" src="/i/search.gif" alt="submit"/>
        </div>
      </form>
    )
  }

  _enableEvents() {
    const searchForm = document.querySelector('form.searchForm')
    const submitButton = document.querySelector('input[type="image"]')
    const searchValue = document.querySelector('input[name="searchTerm"]')

    searchForm.addEventListener('submit', evt => {
      this._goSearch(evt, searchValue.value)

      evt.preventDefault()
    })

    submitButton.addEventListener('click', evt => {
      this._goSearch(evt, searchValue.value)

      evt.preventDefault()
    })
  }

  _goSearch(evt, searchValue) {
    const { goSearch, addTerm, clearResults } = this.props.actions
    
    if (searchValue.length) {
      updateBrowserURL(`/search/${searchValue}`)
      clearResults()
      goSearch(searchValue)
      addTerm(searchValue)
    }
  }
}

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    addTerm: addTerm,
    clearResults: clearResults,
    goSearch: goSearch
  }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm)
