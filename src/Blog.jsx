import React, { useState } from 'react'
import blogData from "../src/data/blogs.json";
import './blog.css'
import './home.css'
import Cards from './Cards';
import { Link } from 'react-router-dom';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};


export default function Blog() {
  const [currentPage , setCurrentPage] = useState(1);
  const postsPerPage = 6 ;
  const postsArray = Array.isArray(blogData.posts) ? blogData.posts : [];
  const [currentCategory, setCurrentCategory] = useState("جميع المقالات");
  const filteredPosts = currentCategory === 'جميع المقالات' ? postsArray : postsArray.filter((post)=> post.category === currentCategory);
  const [search , setSearch] = useState("");
  const searchedPosts = filteredPosts.filter((post)=>{
    const item = search.trim().toLowerCase();
    if (!item) return true;
    return(
      post.title.toLowerCase().includes(item)||
      post.category.toLowerCase().includes(item) || 
      post.excerpt.toLowerCase().includes(item));
  })
  const totalPosts = searchedPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage ;
  const endIndex = startIndex + postsPerPage ; 
  const currentPosts = searchedPosts.slice(startIndex , endIndex);
  const [viewMode , setViewMode] = useState('grid');

  return (
    
    <main className='flex-grow-1' style={{paddingTop:'80px'}}>
    <section className='section-hero-b position-relative overflow-hidden'>
      <div className="grid-overlay-b position-absolute inset-0"></div>
        <div className="blob-b blob-1-b position-absolute" ></div>
        <div className="blob blob-2-b position-absolute" ></div>
        <div className="blob blob-3-b position-absolute" ></div>
        <div className='container-lg position-relative custom-section-b'>
          <div className="text-center mx-auto max-width">
            <div className="section-label-b d-inline-flex align-items-center mb-4 fade-in-b">
              <span className="ping-dot-b position-relative d-flex ms-1">
                <i class="fa-solid fa-newspaper "></i>
                </span>
                <span className='text-sm-b font-me-b text-neutral-b'>مدونتنا</span>
            </div>
            <h1 className="hero-title-b">استكشف                      
              <span className="gradient-text-b"> مقالاتنا</span>
            </h1>
            <p className='hero-subtitle-b'>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
        </div>
        </div>
        <div className='container-fluid position-sticky custom-sticky'>
          <div className='mx-auto px-3 px-md-4 px-lg-5 py-3 max-w-b'>
            <div className='d-flex flex-column flex-md-row justify-content-between align-items-center gap-3'>
              <div className='position-relative w-25 w-md-b'>
                <input type="text" placeholder="ابحث في المقالات..."
                className='w-100 input-scolor' value={search}
                onChange={(e)=>{
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}/>
                <i class="fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y ms-3 icon-sm"></i>
              </div>
              <div className='d-flex flex-wrap justify-content-center gap-2'>
                <button onClick={() => {setCurrentCategory('جميع المقالات'); setCurrentPage(1);}}
                className={`blog-btn ${currentCategory==='جميع المقالات' ? 'active' : ""}`}>جميع المقالات</button>
                {blogData.categories.map((category)=>(
                  <button key={category.name} onClick={()=> {setCurrentCategory(category.name); setCurrentPage(1);}}
                  className={`blog-btn-outline ${currentCategory === category.name && 'active' }`}>
                    {category.name}</button>))}
              </div>
            </div>
          </div>
          <div className='mx-auto px-3 px-md-4 px-lg-5 py-5 max-w-b scroll-offset'>
          <div className='mb-4 d-flex align-items-center justify-content-between'>
            <p className='style-color-b'>عرض <span className='fw-bold text-white'>{totalPosts}</span> مقالات</p>
            <div className='d-flex align-items-center gap-2'>
              <div className='d-flex align-items-center blog-style-box'>
                <button className={`blog-btn-style ${viewMode === 'grid' && 'active-view'}`} 
                title="عرض شبكي" onClick={()=>setViewMode('grid')}>
                  <i class="fa-solid fa-border-all"></i>
                </button>

                <button className={`custom-btn-text ${viewMode === 'list' && 'active-view'}`}
                title="عرض قائمة" onClick={() => setViewMode('list')}>
                  <i class="fa-solid fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='row g-4 pb-5 cardblog-grid'>
          {/* code card */}
          {
            currentPosts.length > 0 ?
            currentPosts.map((post)=>
              <div className={viewMode === 'grid' ? 'col-md-4 col-12' : 'col-12'} key={post.id}>
                            <Cards post={post} formatDate={formatDate} viewMode={viewMode}/>
                          </div>
              )
            : <h1 className='py-5 text-center'>No cardes Found</h1>
          }
          
        </div>
        {/* Pagination code */}
        {currentCategory === 'جميع المقالات' && (
          <div className='d-flex justify-content-center align-items-center gap-2 mt-5 mb-5'>
          <button disabled={currentPage === 1} onClick={()=> setCurrentPage((prev)=> prev-1)}
          className={`p-3 rounded-4 ${currentPage ===1 ? "disabled-cardb text-secondary" : "cardb-hover text-secondary"} `}>
            <i class="fa-solid fa-angle-right"></i></button>
          <div className='d-flex align-items-center gap-1'>
            {Array.from({length: totalPages} , (_,i)=> i+1) .map((page)=>(
              <button key={page} onClick={()=> setCurrentPage(page)}
              className={`rounded-4 small fw-medium btn-filter p-3 ${currentPage === page ? "active" : "" }`}>{page}</button>
            ))}
          </div>
          <button className={`p-3 rounded-4 ${currentPage === totalPages ? "disabled-cardb text-secondary" : "text-secondary cardb-hover"} `}
          disabled={currentPage === totalPages}
          onClick={()=> setCurrentPage((next)=> next+1)}>
            <i class="fa-solid fa-angle-left"></i></button>
        </div>
          )}
        
        </div>
    </section>
    </main>
  )
}
