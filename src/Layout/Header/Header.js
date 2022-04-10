import React from 'react'
import styles from './header.module.css'

const Header = () => {
    const { header, nav, title, list, item } = styles
    return (
        <header className={header}>
            <div className='container'>
                <nav className={nav}>
                    <h1 className={title}>NOICELAND</h1>
                    <ul className={list}>
                        <li className={item}>Home</li>
                        <li className={item}>Latest</li>
                        <li className={item}>About</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header