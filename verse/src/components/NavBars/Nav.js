import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Route } from "react-router-dom";

import icon_verse from '../../img/icon_verse.svg'

export default class Navbar extends Component {
    render(){
        return(
            <> 
                <div className="ctnr_nav">
                    <span className="ctnr_logo">
                        <Link to={"/"}>
                        <img
                            src={icon_verse}
                            alt=""
                            width="175px"
                            height="auto"
                            // onClick={this.scrollToTop}
                        />
                        </Link>
                    </span>
                </div>
                
            </>
        )
    }
};
