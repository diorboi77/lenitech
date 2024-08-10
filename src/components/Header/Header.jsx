import React from 'react'
import './header.css'
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="h-main">
            <div className="h-left">
                <p className='ppp'>Favorite brands</p>
                <h1>
                    <span>An exciting place </span> <br />
                    for the whole family to shop.
                </h1>
                <p >The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                <button>Shop Now</button> <p>$ 249.99
                $ 249.99</p>
            </div>
            <div className="h-right">
                <img src="./rasm.png" alt="" />
            </div>
        </div>
        <div className="main">
            <img src="./rasm1.png" alt="" />
            <img src="./rasm2.png" alt="" />
            <img src="./rasm3.png" alt="" />
            <img src="./rasm4.png" alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header
