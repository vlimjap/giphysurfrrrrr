import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import './index.css'
import { getRandom, clearRandom } from '../../actions/app'

class RandomImage extends Component {
  static propTypes = {
    state: PropTypes.shape({
      app: PropTypes.object.isRequired,
      random: PropTypes.object.isRequired
    }).isRequired,
    actions: PropTypes.shape({
      getRandom: PropTypes.func.isRequired
    }).isRequired,
  }

  componentDidUpdate() {
    const randomContainer = document.querySelector('.nope')
    const { id } = this.props.state.random

    id ? randomContainer.style.display = 'block' : randomContainer.style.display = 'none'
  }

  render() {
    const img = this.props.state.random

    if (img) {
      return (
        <div className="nope">
          <p>No GIFs found. Here's a random one.</p>
          <img src={img.image_original_url } alt="random"/>
        </div>
      )  
    } else {
      return(<div className="nope"></div>)
    } 
  }

}

const mapStateToProps = state => ({
  state: {
    app: state.app,
    random: state.random
  }
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getRandom: getRandom,
    clearRandom: clearRandom
  }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomImage)