import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Card extends Component {

  render() {
    const {
      name: {
        first: firstName,
        last: lastName,
      },
      email,
      picture: {
        medium: srcImage,
      },
      registered,
    } = this.props.user

    return (
      <div
        className="Card">
        <img
          className="Card__Image"
          src={srcImage} />
        <div
          className="Card__Name">
          {firstName} {lastName}
        </div>
        <div
          className="Card__Email">
          {email}
        </div>
        <div
          className="Card__DateJoined">
          <strong>Joigned</strong><br />
          {registered}
        </div>
      </div>
    )
  }

}

Card.propTypes = {
  user: PropTypes.shape({
    picture: PropTypes.shape({
      medium: PropTypes.string,
    }),
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }),
    email: PropTypes.string,
    registered: PropTypes.string,
  }),
}
