import React from 'react'
import { Link } from 'react-router-dom'
import './notfound.css'
export default function NotFound() {
  return (
    <main className='flex-grow-1' style={{paddingTop:'80px'}}>
      <section className='section-hero d-flex align-items-center position-relative overflow-hidden'>
        <div className='grid-overlay position-absolute inset-0'></div>
        <div className='position-absolute top-0 start-0 w-100 h-100 opacity-40 overflow-hidden'>
        <div className='blob blob-orange'></div>
        <div className='blob blob-yellow'></div>
        </div>
        <div className='position-relative text-center px-4 mx-auto error-wrapper'>
          <div className="position-relative mb-4">
            <h1 className='error-code gradient-text'>404</h1>
            <div className="error-code glow">404</div>
          </div>
          <div className='position-relative error-icon mx-auto mb-5'>
            <div className="icon-bg"></div>
            <div className="position-absolute top-50 start-50 translate-middle">
              <i class="fa-regular fa-face-frown"></i>
            </div>
            <div className="icon-dot bounce"></div>
            <div className="icon-dot pulse"></div>
          </div>
          <h2 className='title mb-3'>عفواً ! الصفحة غير موجودة</h2>
          <p className='subtitle mb-4'>الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.</p>
          <div className="d-flex flex-colum flex-sm-row justify-content-center gap-3 mb-5">
            <Link className='btn-primary d-inline-flex align-items-center gap-2'to={'/'}><i class="fa-regular fa-house"></i> الصفحة الرئيسية</Link>
            <Link className='btn-secondary d-inline-flex align-items-center gap-2'to={'/blog'}> <i class="fa-regular fa-newspaper"></i>تصفح المقالات</Link>
          </div>
          <div className='pt-4 border-color'>
            <p className='text-sm text-s mb-3'>قد تجد هذه مفيدة:</p>
            <div className="d-flex flex-wrap justify-content-center gap-3 text-sm mb-4">
              <Link className='link-orange' to={'/blog'}>المدونة</Link>
              <span className='text-s'>•</span>
              <Link className='link-orange' to={'/about'}>من نحن</Link>
              <span class="text-s">•</span>
              <Link className='link-orange' to={'/privacy'}>الخصوصية</Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
