In this repository  built a **Avenger Game** by applying the concepts I have
learned till now.

### Refer to image below:

<br/>
<div style="text-align: center;">
    <img src="https://res.cloudinary.com/strawhat/image/upload/v1628073288/Avengers/avenger_game.gif_df6tb8.gif" alt="emoji-game-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

## Project Set Up Instructions

- Download dependencies by running `npm install`
- Start up the app using `npm start`

### Project Completion Instructions

#### Add Functionality

The app must have the following functionalities

- The _Score_ and _Total Score_ for the current game should be **0** initially.
- When an **Avenger** is clicked

  - If the clicked emoji is not the same as any of the previously clicked emojis
    then the _Score_ should be increased by **1**.
  - If all the emojis are clicked exactly once

    - The _Best score_ should be equal to the _Top Score_

  - If the clicked avenger is the same as any of the previously clicked emojis

    - The _Game status_ along with _Current score_ and _Play Again_ button
      should be displayed as shown in the **Image**.

    - If the score achieved in the current game is higher than the previous
      scores then the _Top Score_ should be updated accordingly.

- When the _Play Again_ button is clicked, then we should be able to play the
  game again.

- The _Play Again_ button should reset the game and _Score_ value but not the
  _Top Score_ value.

- The list of avengers is passed to the `AvengerGame` component as a prop
  `avengerssList` in the form of an array object.

- Each emoji object will have the following properties

  | Key         | Data Type |
  | ----------- | --------- |
  | id          | Number    |
  | avengerName | String    |
  | avengerUrl  | String    |

- The value of the key `id` in the emoji object should be used as a key to the
  `AvengerCard` component.
- The value of the key `avengerName` in the emoji object should be used as a alt
  text to the `avenger` image.

### Quick Tips

- The cursor CSS property sets the type of mouse cursor, if any, to show when
  the mouse pointer is over an element. Use the CSS property cursor with a value
  `pointer` to indicate a link. Click
  <a href="https://css-tricks.com/almanac/properties/c/cursor/" target="_blank">this
  </a> to know more.
- An outline is a line that is drawn around an element, outside the border. The
  outline CSS shorthand property sets all the outline properties. Use the CSS
  property `outline` with value `none` to hide all the outline properties. Click
  <a href="https://www.w3schools.com/css/css_outline.asp" target="_blank">this
  </a> to know more.
