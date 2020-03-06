import React, { Component } from "react";
// import { Link as RouterLink } from "react-router-dom";

export default class Home extends Component { 
  render() {
    return(
      <>
        <div className='home_ctnr'>
          <div className='intro'>
            <h2> Your own comfy corner, <br/> 
            w/ your memorables verses. </h2>
          </div>

          <div className='description'> 
            <p>A perfect place for booklovers. <br/> 
            Read, Collect and Pick up your favorites verses.</p>
          </div>
        </div>

      </>
    )
  }
};