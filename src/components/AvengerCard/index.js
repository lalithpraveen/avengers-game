// Write your code here.
import './index.css'

const AvengerCard = props => {
  const {Avenger, onClickAvenger} = props
  const onClickAvengerCard = () => onClickAvenger(Avenger.id)

  return (
    <li className="Avenger-list-item" onClick={onClickAvengerCard}>
      <img
        src={Avenger.avengerUrl}
        alt={Avenger.avengerName}
        className="Avenger-list-image"
      />
    </li>
  )
}

export default AvengerCard
