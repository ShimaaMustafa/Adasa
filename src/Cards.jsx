import React from 'react'
import { Link } from 'react-router-dom'

export default function Cards({post , formatDate , viewMode}) {
  return (
    <div className={`s4card p-0 overflow-hidden card3 delay-card1 ${viewMode === 'list' ? 'card-list-mode' : "fixed-h"}`}>
                            <Link className='d-block text-decoration-none' to={`/blog/${post.slug}`}>
                            <div className={`card-inner ${viewMode === 'list' && 'row g-0 align-items-stretch'}`}>
                            <div className={`${viewMode === 'list' && 'col-lg-4 order-lg-1'}`} >  
                            <div className='position-relative overflow-hidden h-100 card-img-wrap'>
                              <img className='w-100 h-100 object-fit-cover img-scale' src={post.image} alt={post.title} />
                              <div className='position-absolute top-0 start-0 w-100 h-100 gradient-overlay4'></div>
                              <div className='position-absolute top-0 end-0 p-3'>
                                <span className='px-3 py-1 text-white small rounded-pill custom-badge'>{post.category}</span>
                              </div>
                            </div>
                            </div>
                            <div className={`${viewMode === 'list' && 'col-lg-8 order-lg-2'}`}>
                            <div className='p-3 h-100 d-flex flex-column'>
                              <div className='d-flex align-items-center gap-3 small mb-3'>
                                <span className='d-flex align-items-center gap-1 text-secondary text-s2'><i class="fa-regular fa-clock text-secondary"></i>7 دقائق للقراءة</span>
                                <span className='rounded-circle bg-secondary dot3'></span>
                                <span className='text-secondary'>{formatDate(post.date)}</span>
                              </div>
                              <h3 className='fs-4 fw-bold mb-3 title-card4'>{post.title}</h3>
                              <p className='mb-4 small leading-relaxed secp-4'>{post.excerpt}</p>
                              <div className='mt-auto d-flex align-items-center justify-content-between pt-4 border-custom'>
                                <div className='d-flex align-items-center gap-3'>
                                  <img className='rounded-circle object-fit-cover personal-sec4' src={post.author.avatar} alt={post.author.name} />
                                  <div>
                                    <p className='small fw-medium mb-0 mt-3 text-white'>{post.author.name}</p>
                                    <p className='small text-secondary mb-2'>{post.author.role}</p>
                                  </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-center rounded-circle icon4-btn'><i className="fa-solid fa-angle-left"></i></div>
                              </div>
                              </div>
                              </div>
                            </div>
                            </Link>
                          </div>
  );
}
