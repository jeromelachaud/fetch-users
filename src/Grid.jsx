import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

export default class Grid extends Component {

  render() {
    const {
      users,
    } = this.props

    const cardElement = users.map((user, i) => (
      <Card
        key={i}
        user={user} />
    ))

    return (
      <div className="Grid">
        {cardElement}
      </div>
    )
  }

}

Grid.propTypes = {
  users: PropTypes.array,
}
