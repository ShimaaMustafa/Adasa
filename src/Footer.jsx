import React from 'react'
import { Link } from 'react-router-dom'
import blogData from "../src/data/blogs.json";

import './footer.css'
export default function Footer() {
  return (
    <footer className='section-dark position-relative overflow-hidden'>
        <div className='position-absolute blob blob-orange blob-top-left'></div>
        <div className='position-absolute blob blob-yellow blob-bottom-right'></div>
        <div className=''>
          <div className='section-container position-relative'>
            <div className='footer-grid'>
              <div className='col-lg-12'>
                <Link className='d-flex align-items-center gap-3 mb-4 text-decoration-none' to={'/'}>
                <div className='logo-circle'>
                  <span className='text-white fw-bold fs-4'>ع</span>
                </div>
                <span className='text-white fw-bold fs-5 '>{blogData.siteInfo.name}</span>
                </Link>
                <p className='custom-text'>{blogData.siteInfo.description}</p>
                <div className='d-flex gap-2'>
                  <Link className='social-icon text-decoration-none' to={`${blogData.siteInfo.social.twitter}`} target='_blank'>
                  <i class="fa-brands fa-x-twitter"></i>
                  </Link>
                  <Link className='social-icon text-decoration-none' to={`${blogData.siteInfo.social.github}`} target='_blank'>
                  <i class="fa-brands fa-github"></i>
                  </Link>
                  <Link className='social-icon text-decoration-none' to={`${blogData.siteInfo.social.linkedin}`} target='_blank'>
                  <i class="fa-brands fa-linkedin"></i>
                  </Link>
                  <Link className='social-icon text-decoration-none' to={`${blogData.siteInfo.social.youtube}`} target='_blank'>
                  <i class="fa-brands fa-youtube"></i>
                  </Link>
                </div>
              </div>
              <div>
                  <h3 className='custom-title fs-5 '>
                  <span className='custom-title-line'></span>
                  استكشاف
                </h3>
                <ul className='custom-list'>
                  <li>
                    <Link className='custom-link group  text-decoration-none' to={'/'}><i class="fa-solid fa-angle-right custom-icon"></i>الرئيسية</Link>
                  </li>
                  <li>
                    <Link className='custom-link group  text-decoration-none' to={'/blog'}><i class="fa-solid fa-angle-right custom-icon"></i>المدونة</Link>
                  </li>
                  <li>
                    <Link className='custom-link group  text-decoration-none' to={'/about'}><i class="fa-solid fa-angle-right custom-icon"></i>من نحن</Link>
                  </li>
                </ul>
              </div>
              <div>
                  <h3 className='custom-title fs-5 '>
                  <span className='custom-title-line'></span>
                  التصنيفات
                </h3>
                <ul className='custom-list'>
                  <li>
                    <Link className='custom-link group  text-decoration-none' to={'/blog?category=إضاءة'}><i class="fa-solid fa-angle-right custom-icon"></i>إضاءة</Link>
                  </li>
                  <li>
                    <Link className='custom-link group  text-decoration-none' to={'/blog?category=بورتريه'}><i class="fa-solid fa-angle-right custom-icon"></i>بورتريه</Link>
                  </li>
                  <li>
                    <Link className='custom-link group  text-decoration-none' to={'/about?category=مناظر طبيعية'}><i class="fa-solid fa-angle-right custom-icon"></i>مناظر طبيعية</Link>
                  </li>
                  <li>
                    <Link className='custom-link group  text-decoration-none' to={'/about?category=تقنيات'}><i class="fa-solid fa-angle-right custom-icon"></i>تقنيات</Link>
                  </li>
                </ul>
              </div>
              <div>
                  <h3 className='custom-title fs-5 '>
                  <span className='custom-title-line'></span>
                  ابقي علي اطلاع
                </h3>
                <p className='custom-subtitle'>
                  اشترك للحصول على أحدث المقالات والتحديثات.
                </p>
                <form className="custom-form">
                  <div className="custom-input-wrapper">
                  <input className="custom-input" type="email" placeholder="أدخل بريدك الإلكتروني" />
                  </div>
                  <button class="custom-btn" type="submit">اشترك</button>
                </form>
              </div>
            </div>
          </div>
          <div className='custom-footer-border p-4'>
            <div className='container-fluid custom-footer-padding'>
              <div className='d-flex flex-column flex-md-row justify-content-between align-items-center gap-3'>
                <p className="custom-footer-text">
                  © 2026 عدسة. صنع بكل <i className="fa-solid fa-heart"></i> جميع الحقوق محفوظة.
                  </p>
                  <div class="d-flex gap-4">
                  <Link class="custom-footer-link text-decoration-none" to={"/privacy"}>سياسة الخصوصية</Link>
                  <Link class="custom-footer-link text-decoration-none" to={"/terms"}>شروط الخدمة</Link>
                  </div>
              </div>
            </div>
          </div>

        </div>
        </footer>
  )
}
