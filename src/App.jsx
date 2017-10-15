import React, { Component } from 'react'
import Loader from './Loader'
import FetchButton from './FetchButton'
import TopBar from './TopBar'
import Grid from './Grid'
import { Service } from './Service'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      users: [],
      page: 1,
    }
  };

  fetchData(opt) {
    Service.fetch({
      page: opt.page,
    })
      .then(res => {
        this.setState({
          isLoading: false,
          users: this.state.users.concat(res.results),
        })
      })
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.page !== nextState.page) {
      this.fetchData({ page: this.state.page })
    }
  }

  componentWillMount() {
    this.fetchData({ page: this.state.page })
  }

  handleClick() {
    this.setState({
      page: this.state.page + 1,
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Loader />
      )
    }

    return (
      <div
        className="App">
        <TopBar />
        <Grid
          users={this.state.users} />
        <FetchButton
          onClick={() => { this.handleClick() }}
          className="FetchButton" />
      </div>
    )
  }

}
