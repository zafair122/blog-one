import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'

const Home = () => {
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
    <div className='home'>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home