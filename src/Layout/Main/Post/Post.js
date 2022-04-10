import React, { useState } from 'react'
import axios from 'axios'


const Post = () => {
    const [posts, setPosts] = useState([]);

    axios('http://localhost:8080/news')
        .then(({ data }) => setPosts(data))



    return (
        <section>
            <div className='container'>
                <div>
                    {posts.map(item => (
                        <div key={item.id}>
                            <img src={item.imgUrl} alt="img" />
                            <p>{item.category}</p>
                            <p>{item.info}</p>
                            <h3>{item.author}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Post