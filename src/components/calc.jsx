import React, { Component } from "react";

class Calc extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="calc">
          <div className="sum">sdf</div>
          <div className="calc-keypad">
            <div className="left_keys">
              <div className="function-keys">
                <button>C</button>
                <button>+-</button>
                <button>%</button>
              </div>
              <div className="digit-keys">
                <button id="zero">0</button>
                <button>:</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
              </div>
            </div>

            <div className="operator-keys">
              <button>divide</button>
              <button>x</button>
              <button>-</button>
              <button>+</button>
              <button>=</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Calc;
