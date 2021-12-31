import React from 'react'
import logo from '../logo.svg'

export default function Header() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <p>my travel journal</p>
        </header>
    )
}