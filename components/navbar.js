import React, { Component } from 'react';
import Link from 'next/link'

class Navbar extends Component {
  render() {
    return (
      <div>
        <Link href='/'>
          <img width="30" margin-top="-2" src="https://i.imgur.com/CmYcjAK.png"/>
        </Link>
        <h1> Rables of a broken mind  </h1>
        <Link href='/about'><a> contribute </a></Link>
        <style jsx>{`
          div {
            background-color: gray;
            padding: 5px;
            border-radius: 5px;
          }
        `}
        </style>
      </div>
    )
  }
}

export default Navbar;
