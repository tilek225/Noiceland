import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './post.module.css'

const Post = () => {
    const [posts, setPosts] = useState([]);
    const { row, card, category, info, author, hr } = styles

    useEffect(() => {
        axios('http://localhost:8080/posts')
            .then(({ data }) => setPosts(data))


    }, [])



    return (
        <section>
            <div className='container'>
                <div className={row}>
                    {posts.map(item => (
                        <div key={item.id} className={card}>
                            <img src={item.imgUrl} alt="img" />
                            <p className={category}>{item.category}</p>
                            <p className={info}>{item.info}</p>
                            <h3 className={author}>by {item.author}</h3>
                        </div>
                    ))}
                </div>
                <hr className={hr} />
            </div>
        </section>
    )
}

export default Post