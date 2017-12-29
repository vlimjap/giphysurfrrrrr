import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { 
  getTrending, 
  goSearch, 
  getRandom,
  clearRandom
 } from '../../actions/app'
import './index.css'

class SearchResults extends Component {
  static propTypes = {
    state: PropTypes.shape({
      results: PropTypes.array.isRequired
    }).isRequired,
    actions: PropTypes.shape({
      getTrending: PropTypes.func.isRequired,
      goSearch: PropTypes.func.isRequired
    }).isRequired,
  }


  componentDidUpdate() {
    const { results } = this.props.state

    if (results.length) {
      this.props.actions.clearRandom()
    }
  }

  render() {
    const { results } = this.props.state

    return (
      <div>
        <ul>
          {
            results.map((img) => {
              return renderGiphyImg(img)
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getTrending: getTrending,
    goSearch: goSearch,
    getRandom: getRandom,
    clearRandom: clearRandom
  }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults)

/* Helper */
function renderGiphyImg(img) {
  const { type, images } = img
  const rnd = Math.random()

  if (type === 'gif') {
    return (
      <li key={ img.id + rnd }><img src={ images.fixed_height.url } alt={ img.slug } /></li>
    )  
  }
}
