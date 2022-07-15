import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed">
          Speed is <p>{count}</p>mph
        </h1>
        <p className="maxmin">Min Limit 0mph, Max Limit 200mph</p>

        <div className="btn-c">
          <button className="acc" type="button" onClick={this.onIncrement}>
            Acceleration
          </button>
          <button className="apb" type="button" onClick={this.onDecrement}>
            Applay Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
