import AvengerGame from './components/AvengerGame'

import './App.css'

export const avengersList = [
  {
    id: 0,
    avengerName: 'Hawkeye',
    avengerUrl:
      'https://res.cloudinary.com/strawhat/image/upload/v1628065261/Avengers/hawkeye_blt84r.png',
  },
  {
    id: 1,
    avengerName: 'Doctor strange',
    avengerUrl:
      'https://res.cloudinary.com/strawhat/image/upload/v1628065726/Avengers/doctor_strange_isysjx.png',
  },
  {
    id: 2,
    avengerName: 'Vision',
    avengerUrl:
      'https://res.cloudinary.com/strawhat/image/upload/v1628065837/Avengers/vision_qvexrd.png',
  },
  {
    id: 3,
    avengerName: 'Deadpool',
    avengerUrl:
      'https://res.cloudinary.com/strawhat/image/upload/v1628065928/Avengers/deadpool_adsczp.png',
  },
  {
    id: 4,
    avengerName: 'Black Widow',
    avengerUrl:
      'https://res.cloudinary.com/strawhat/image/upload/v1628066470/Avengers/black_widow_isbdyp.png',
  },
  {
    id: 5,
    avengerName: 'Iron Man',
    avengerUrl:
      'https://res.cloudinary.com/strawhat/image/upload/v1628066543/Avengers/ironman_tfajg4.png',
  },
  {
    id: 6,
    avengerName: 'Gamora',
    avengerUrl:
      'https://res.cloudinary.com/strawhat/image/upload/v1628066661/Avengers/Gamora_tfcswm.png',
  },
  {
    id: 7,
    avengerName: 'Loki',
    avengerUrl:
      'https://res.cloudinary.com/strawhat/image/upload/v1628067088/Avengers/loki_tub6ye.png',
  },
  {
    id: 8,
    avengerName: 'Hulk',
    avengerUrl:
      'https://res.cloudinary.com/strawhat/image/upload/v1628067128/Avengers/hulk_ntslhd.png',
  },
  {
    id: 9,
    avengerName: 'Captain America',
    avengerUrl:
      'https://res.cloudinary.com/strawhat/image/upload/v1628067193/Avengers/captain_america_kgszvk.png',
  },
  {
    id: 10,
    avengerName: 'Groot',
    avengerUrl:
      'https://res.cloudinary.com/strawhat/image/upload/v1628067247/Avengers/groot_eihyuf.png',
  },
  {
    id: 11,
    avengerName: 'Spider Man',
    avengerUrl:
      'https://res.cloudinary.com/strawhat/image/upload/v1628067294/Avengers/spider_man_wdsi1a.png',
  },
]

const App = () => <AvengerGame AvengersList={avengersList} />

export default App
