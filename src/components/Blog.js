import React, { useContext } from 'react'
import moment from 'moment';
import { BlogContext } from './blogContext';
import { Mask } from '../assets';
const Blog = () => {

    const blogData = useContext(BlogContext)
  return (
      <div className='blog-box'>
          <div className='blog-header d-flex align-center justify-space-between'>
          <h2 className='service-header header-text'>Blogs</h2>
              <a href="#view" className='view-all-btn'>{'View All ->'}</a>
          </div>
          <div className='blog-posts d-flex justify-space-between'>
              {blogData?.map((blog, index) => index < 3 ? (
                  <div className='blog' key={blog?.id}>
                      <div className='blog-img'>
                          <img scr={blog?.image_url || Mask} alt={`blog${index}`} />
                  </div>
                  <div className='blog-details'>
                          <h4 className='blog-title font-20 font-w400'>{blog?.name}</h4>
                      <p className='blog-date'>{moment(blog?.updatedAt).format('MMMM D, YYYY')} by <span>{blog?.writer_name}</span></p>
                      <p className='blog-desc font-16 font-w400'>{blog?.seo_description}</p>
                  </div>
              </div>
              ) : null)}
          </div>
    </div>
  )
}

export default Blog