import React from 'react'
import './BlogDetails.css'
import BlogImg from '../../assets/vr-kid.png'
import { Link } from 'react-router-dom'

export default function BlogDetails() {
  return (
    <>
    <div className='blog-detail-wrapper'>
        <img className="blogDetail-image fluid" src={BlogImg} alt="Blog photoframe" />
        <h1 className="blogDetail-title">Blog Title here</h1>
        <h2 className="blogDetail-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <p className="blogDetail-content lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
          euismod odio, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
          euismod odio, gravida pellentesque urna varius vitae. euismod odio, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
          euismod odio, gravida pellentesque urna varius vitae
        </p>

        <div className='btb-btn'>
          <Link to="/blogs" style={{textDecoration:"none"}}>
            <button className='btn btn-info back-to-blogs'>Back To Blogs</button>
          </Link>
        </div>
    </div>
    </>

  )
}