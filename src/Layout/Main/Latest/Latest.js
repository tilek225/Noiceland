import React, { useEffect, useState } from 'react'
import styles from './latest.module.css'
import axios from 'axios';

const Latest = () => {

    const [latest, setLatest] = useState([]);
    const [limit, setLimit] = useState(8)
    const { row, card, category, info, author, btn, hr } = styles;

    useEffect(() => {
        axios(`http://localhost:8080/latest?_start=0&_limit=${limit}`)
            .then(({ data }) => setLatest(data))
    }, [limit])


    return (
        <section>
            <div className='container'>
                <div className={row}>
                    {latest.
                        map(item => (
                            <div key={item.id} className={card}>
                                <img src={item.imgUrl} alt="img" />
                                <p className={category}>{item.category}</p>
                                <p className={info}>{item.info}</p>
                                <h3 className={author}>by {item.author}</h3>
                            </div>
                        ))}
                    <button className={btn} onClick={() => {
                        if (limit >= 20) {
                            setLimit(8)
                        } else {
                            setLimit(limit + 4)
                        }
                    }}>
                        {limit >= 20 ? 'less' : 'view all latest posts'}
                    </button>
                </div>
                <hr className={hr} />
            </div>
        </section>
    )
}

export default Latest