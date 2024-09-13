import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  generateRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    return randomNumber
  }

  onIncrementCount = () => {
    const generatedNumber = this.generateRandomNumber()
    this.setState(prevState => ({count: prevState.count + generatedNumber}))
  }

  render() {
    const {count} = this.state
    const isEven = count % 2 === 0

    return (
      <div className="app-container">
        <div className="text-container">
          <h1 className="count-heading">
            Count <span>{count}</span>
          </h1>
          <h2 className="even-odd-text">
            Count is <span>{isEven ? 'Even' : 'Odd'}</span>
          </h2>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.onIncrementCount}
            >
              Increment
            </button>
          </div>
          <p className="counter-description">
            *Increase By random number between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
