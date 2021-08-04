// Write your code here.
import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  renderScore = () => {
    const {currentScore, isGameOver, topScore} = this.props

    if (isGameOver) {
      return null
    }
    return (
      <div className="scores-container">
        <p className="score">Score: {currentScore}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <nav className="nav-container">
        <div className="nav-items">
          <div className="game-logo-card">
            <img
              src="https://res.cloudinary.com/strawhat/image/upload/v1628067846/Avengers/avengers_logo_pdevme.png"
              className="Avenger-logo"
              alt="Avenger Logo"
            />
            <h1 className="title">Avengers Game</h1>
          </div>
          {this.renderScore()}
        </div>
      </nav>
    )
  }
}

export default NavBar
