import {Component} from 'react'

import AvengerCard from '../AvengerCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class AvengerGame extends Component {
  state = {
    clickedAvengers: [],
    isGameOver: false,
    topScore: 0,
  }

  setTopScore = currentScore => {
    const {topScore} = this.state
    if (currentScore > topScore) {
      this.setState({topScore: currentScore})
    }
  }

  finishGameAndSetTopScore = newScore => {
    this.setIsGameOver(true)
    this.setTopScore(newScore)
  }

  onClickAvenger = id => {
    const {AvengersList} = this.props
    const {clickedAvengers} = this.state
    const isAvengerPresent = clickedAvengers.includes(id)
    const clickedAvengersLength = clickedAvengers.length

    if (isAvengerPresent) {
      this.finishGameAndSetTopScore(clickedAvengersLength)
    } else {
      if (AvengersList.length - 1 === clickedAvengersLength) {
        this.finishGameAndSetTopScore(AvengersList.length)
      }
      this.setState(previousState => ({
        clickedAvengers: [...previousState.clickedAvengers, id],
      }))
    }
  }

  getShuffledAvengersList = () => {
    const {AvengersList} = this.props
    return AvengersList.sort(() => Math.random() - 0.5)
  }

  renderAvengersList = () => {
    const shuffledAvengersList = this.getShuffledAvengersList()

    return (
      <ul className="Avengers-list-container">
        {shuffledAvengersList.map(Avenger => (
          <AvengerCard
            Avenger={Avenger}
            key={Avenger.id}
            onClickAvenger={this.onClickAvenger}
          />
        ))}
      </ul>
    )
  }

  setIsGameOver = value => {
    this.setState({isGameOver: value})
  }

  resetGame = () => {
    this.setIsGameOver(false)
    this.setState({clickedAvengers: []})
  }

  renderScoreCard = () => {
    const {AvengersList} = this.props
    const {clickedAvengers} = this.state
    const isWon = clickedAvengers.length === AvengersList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedAvengers.length}
      />
    )
  }

  render() {
    const {clickedAvengers, isGameOver, topScore} = this.state

    return (
      <div className="Avenger-game-container">
        <NavBar
          currentScore={clickedAvengers.length}
          isGameOver={isGameOver}
          topScore={topScore}
        />
        <div className="Avenger-game-body">
          {isGameOver ? this.renderScoreCard() : this.renderAvengersList()}
        </div>
      </div>
    )
  }
}

export default AvengerGame
