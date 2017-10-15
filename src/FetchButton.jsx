import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FetchButton extends Component {

  render() {
    return (
      <button
        onClick={this.props.onClick}
        className="FetchButton">
        Load More
      </button>
    )
  }

}

FetchButton.propTypes = {
  onClick: PropTypes.func,
}
