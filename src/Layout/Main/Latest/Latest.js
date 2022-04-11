import React, { useState } from 'react'
import styles from './latest.module.css'
import axios from 'axios';

const Latest = () => {

    const [latest, setLatest] = useState([]);
    const [view, setView] = useState('')
    const { row, card, category, info, author, btn, hr } = styles;

    axios('http://localhost:8080/latest')
        .then(({ data }) => setLatest(data))

    return (
        <section>
            <div className='container'>
                <div className={row}>
                    {latest.filter((el, idx) => {
                        if (view.length === 0) {
                            return idx < 8
                        }
                        return el
                    }).
                        map(item => (
                            <div key={item.id} className={card}>
                                <img src={item.imgUrl} alt="img" />
                                <p className={category}>{item.category}</p>
                                <p className={info}>{item.info}</p>
                                <h3 className={author}>by {item.author}</h3>
                            </div>
                        ))}
                    <button className={btn} onClick={() => {
                        view.length ? setView('') : setView('all')
                    }}>
                        {view ? 'less' : 'view all latest posts'}
                    </button>
                </div>
                <hr className={hr} />
            </div>
        </section>
    )
}

export default Latest