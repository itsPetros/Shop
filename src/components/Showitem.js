import React, { Component } from 'react'
import { FaRegWindowClose } from "react-icons/fa";

export class Showitem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
            <FaRegWindowClose className='close-icon' onClick={() => this.props.onShowItem(this.props.item)} />
            <img src={"./img/" + this.props.item.img}  />
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}$</b>
            <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
      </div>
    )
  }
}

export default Showitem