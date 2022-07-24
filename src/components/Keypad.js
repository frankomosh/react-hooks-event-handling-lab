
import React, { PureComponent } from 'react'

export default class Keypad extends PureComponent {     
  render() {

    function handleChange(event) {
        console.log("Entering password...");
    }

    return (
      <div>
          <input type="password" name='password' placeholder='password' onChange={handleChange}/>
      </div>
    )
  }
}
