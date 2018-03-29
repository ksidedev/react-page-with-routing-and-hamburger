import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ChangeTextRedux } from './../shared/actions'
import '../components/Styles/ChangeText/ChangeText.css'

class PageOne extends Component {
  constructor(props: any) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.dispatch(ChangeTextRedux('How are you?'))
  }

  render() {
    return (
      <div className="greyBg">
        <h3 className="heading">Page One</h3>
      </div>
    )
  }
}

export default connect(state => ({
  ChangeTextRedux: state.ChangeTextRedux
}))(PageOne)
