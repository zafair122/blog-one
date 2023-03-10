import React from 'react'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'

const Menu = () => {
    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum facilis, et enim voluptatem fuga quam eveniet perspiciatis, consequuntur ipsam modi sed quaerat totam rerum pariatur.",
            img: img1,
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum facilis, et enim voluptatem fuga quam eveniet perspiciatis, consequuntur ipsam modi sed quaerat totam rerum pariatur.",
            img: img2,
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum facilis, et enim voluptatem fuga quam eveniet perspiciatis, consequuntur ipsam modi sed quaerat totam rerum pariatur.",
            img: img3,
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum facilis, et enim voluptatem fuga quam eveniet perspiciatis, consequuntur ipsam modi sed quaerat totam rerum pariatur.",
            img: img4,
        },
    ];
    return (
        <div className='menu'>
            <h1>Oter posts you may like</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default Menu