import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ChangeTextRedux } from './../shared/actions'
import '../components/Styles/ChangeText/ChangeText.css'

class Three extends Component {
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
        <h5 className="heading">Change Text</h5>
        <p>
          <b>{this.props.ChangeTextRedux}</b>
        </p>
        <p>
          <span className={`btn btn-primary`} onClick={this.onSubmit}>
            Click me
          </span>
        </p>
      </div>
    )
  }
}

export default connect(state => ({
  ChangeTextRedux: state.ChangeTextRedux
}))(Three)
