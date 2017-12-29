import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';      

import { goSearch, clearResults } from '../../actions/app'
import { getSearchPath, updateBrowserURL } from '../../utils/util'

import './index.css'

class SearchTerms extends Component {
  static propTypes = {
    state: PropTypes.shape({
      searchTerms: PropTypes.array.isRequired
    }).isRequired,
    actions: PropTypes.shape({
      goSearch: PropTypes.func.isRequired,
      clearResults: PropTypes.func.isRequired,
    }).isRequired
  }

  render() {
    const { searchTerms } = this.props.state
    const clickHandler = this.clickHandler

    return (
      <ul className="searchTerms">
        {
          searchTerms.map((term) => {
            return (
              <li key={term} data-search={term} onClick={clickHandler}>{term}</li>
            )
          })
        }
        
      </ul>
    )
  }

  clickHandler = (e) => {
    const searchField = document.querySelector('input[name="searchTerm"]')
    const { clearResults, goSearch } = this.props.actions
    const searchString = e.currentTarget.dataset.search.toLowerCase()

    if (searchString !== getSearchPath()) {
      updateBrowserURL(`/search/${searchString}`)
      searchField.value = searchString
      clearResults()
      goSearch(searchString)
    }
  }
}

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    goSearch: goSearch,
    clearResults: clearResults
  }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTerms)
