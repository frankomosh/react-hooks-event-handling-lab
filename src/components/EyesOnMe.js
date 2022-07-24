// Code EyesOnMe Component Here
import React, { PureComponent } from 'react'

export default class EyesOnMe extends PureComponent {
  render() {

    function blur() {
      console.log("Hey! Eyes on me!");
    }

    function focus() {
      console.log("Good!");
    }
    return (
      <div>
         <button onBlur={blur} onFocus={focus}>Eyes on me</button>;
      </div>
    )
  }
}