import React, { Component } from 'react'

class CardImg extends Component {
    render (props) { 
        return <>
          <div  className={`item ${this.props.imsecColor} img-responsive`}>
    <img alt=""src={this.props.imsc} />
    <i>{this.props.imsecTitle}</i>
    </div> 
        </>
    }
}
export default CardImg