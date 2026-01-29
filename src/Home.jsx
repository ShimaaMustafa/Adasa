import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className='flex-grow-1' style={{paddingTop:'80px'}}>
      <section className='section-hero d-flex align-items-center position-relative overflow-hidden'>
      <div className="grid-overlay position-absolute inset-0"></div>
        <div className="blob blob-1 position-absolute" ></div>
        <div className="blob blob-2 position-absolute" ></div>
        <div className="blob blob-3 position-absolute" ></div>
        <div className='container-lg position-relative custom-section'>
          <div className="text-center mx-auto max-width">
            <div className="section-label d-inline-flex align-items-center mb-4 fade-in">
              <span className="ping-dot position-relative d-flex">
                <span className="ping-circle position-absolute" />
                <span className="ping-core position-relative" />
                </span>
                <span className='text-sm font-me text-neutral'>مرحباً بك في عدسة</span>
            </div>
            <h1 className="hero-title">اكتشف                       
              <span className="gradient-text"> فن</span>
            <br />التصوير الفوتوغرافي</h1>
            <p className='hero-subtitle'>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-4 buttons-wrapper">
            <Link className="btn btn-orange btn-cta d-inline-flex align-items-center justify-content-center gap-2" to="/blog">
              <span>استكشف المقالات</span>
                  <i class="fa-solid fa-arrow-left-long"></i>
            </Link>
            <Link className="btn btn-outline-orange btn-cta d-inline-flex align-items-center justify-content-center gap-2" to="/about">
                  <i class="fa-solid fa-circle-info"></i>
              <span>اعرف المزيد</span>
            </Link>
            </div>
            <div className='row g-3 justify-content-center stats-grid mb-4 mt-5 mx-auto'>
              <div className="col-md-3 col-6">
                <div className="glass-card text-center p-2 stat-card">
                  <i className="fa-solid fa-newspaper icon-orange mb-1"></i>
                  <p className="stat-number gradient-text">+50</p>
                  <p className="stat-label">مقالة</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="glass-card text-center p-2 stat-card">
                  <i class="fa-solid fa-users icon-orange mb-1"></i>
                  <p class="stat-number gradient-text">+10 ألف</p>
                  <p class="stat-label">قارئ</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="glass-card text-center p-2 stat-card">
                  <i class="fa-solid fa-folder-open icon-orange mb-1"></i>
                  <p class="stat-number gradient-text">4</p>
                  <p class="stat-label">تصنيفات</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="glass-card text-center p-2 stat-card">
                  <i class="fa-solid fa-pen-nib icon-orange mb-1"></i>
                  <p class="stat-number gradient-text">6</p>
                  <p class="stat-label">كاتب</p>
                </div>
              </div>

            </div>

            </div>
        </div>
      </section>

      <section className='position-relative overflow-hidden section1-dark'>
        <div className="gradient-overlay"></div>
        <div className="position-relative container-custom mx-auto px-3 px-sm-4 px-lg-5">
          <div className="d-flex justify-content-between align-items-start mb-5 gap-3 flex-responsive">
            <div>
              <span className='section-label mb-4 gap-2 ps-3'>
                <span className='position-relative d-flex ms-2 dot2 '>
                  <span className='ping-circle2 d-inline-flex rounded-circle opacity-75'></span>
                  <span className='position-relative d-inline-flex rounded-circle dot-orange'></span>
                </span>
                مميز
              </span>
              <h2 className='section-title text-white'>مقالات مختارة</h2>
              <p className='section-subtitle'>محتوى منتقى لبدء رحلة تعلمك</p>
            </div>
            <Link className='btn-custom d-inline-flex align-items-center fw-medium text-decoration-none' to={'/blog'}>عرض الكل<i class="fa-solid fa-angle-left"></i></Link>
          </div>
          <div className='py-4'>
          <div className='card-custom position-relative overflow-hidden delay-card1'>
            <Link className='d-block text-decoration-none' to={'/blog/mastering-golden-hour-photography'}>
              <div className='row g-0'>
                <div className='col-12 col-md-6'>
                  <div className='position-relative overflow-hidden section-height group'>
                    <img className='img-cover zoom-on-hover' src={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop'} alt={'إتقان تصوير الساعة الذهبية: دليل شامل'} />
                    <div className='overlay-gradient'></div>
                    <div className='cardEnd'>
                      <span className='badge-custom d-inline-flex align-items-center fw-semibold text-white'><i class="fa-solid fa-star"></i>مميز</span>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='section-box d-flex justify-content-center flex-column section-box-bg'>
                    <div className='d-flex align-items-center gap-3 mb-4'>
                      <span className='tag-custom fw-semibold'>إضاءة</span>
                      <span className='d-flex align-items-center gap-1 text-s2'><i class="fa-regular fa-clock"></i>8 دقائق للقراءة</span>
                    </div>
                    <h2 className='title-hover fw-bold mb-4'>إتقان تصوير الساعة الذهبية: دليل شامل</h2>
                    <p className='text-s-custom mb-5 cl-3'>
                      تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.
                    </p>
                    <div className='d-flex align-items-center justify-content-between mt-auto'>
                      <div className='d-flex align-items-center gap-3'>
                        <div className='position-relative'>
                          <img className='parsonal-img rounded-circle shadow' src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="salem ahmed" />
                          <div className='dot-img'></div>
                        </div>
                        <div>
                          <p className='fs-6 fw-semibold text-white mb-0'>سالم أحمد</p>
                          <p className='date-s'>15 يناير 2026</p>
                        </div>
                      </div>
                      <span className='d-inline-flex align-items-center fw-semibold text-sm-orange'>اقرأ المقال<i class="fa-solid fa-arrow-left-long pp"></i></span>
                    </div>
                  </div>
                  </div>
              </div>
              </Link>
          </div>
          </div>

          <div className='py-4'>
            <div className='card-custom position-relative overflow-hidden delay-card2'>
            <Link className='d-block text-decoration-none' to={'/blog/portrait-photography-secrets'}>
              <div className='row g-0'>
                <div className='col-12 col-md-6'>
                  <div className='position-relative overflow-hidden section-height group'>
                    <img className='img-cover zoom-on-hover' src={'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop'} alt={'أسرار تصوير البورتريه: كيف تلتقط روح الشخصية'} />
                    <div className='overlay-gradient'></div>
                    <div className='cardEnd'>
                      <span className='badge-custom d-inline-flex align-items-center fw-semibold text-white'><i class="fa-solid fa-star "></i>مميز</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className='section-box d-flex justify-content-center flex-column section-box-bg'>
                    <div className='d-flex align-items-center gap-3 mb-4'>
                      <span className='tag-custom fw-semibold'>بورتريه</span>
                      <span className='d-flex align-items-center gap-1 text-s2'><i class="fa-regular fa-clock"></i>6 دقائق للقراءة</span>
                    </div>
                    <h2 className='title-hover fw-bold mb-4'>أسرار تصوير البورتريه: كيف تلتقط روح الشخصية</h2>
                    <p className='text-s-custom mb-5 cl-3'>
                      اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.
                    </p>
                    <div className='d-flex align-items-center justify-content-between mt-auto'>
                      <div className='d-flex align-items-center gap-3'>
                        <div className='position-relative'>
                          <img className='parsonal-img rounded-circle shadow' src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" alt="muhamed ali" />
                          <div className='dot-img'></div>
                        </div>
                        <div>
                          <p className='fs-6 fw-semibold text-white mb-0'>محمد علي </p>
                          <p className='date-s'>12 يناير 2026</p>
                        </div>
                      </div>
                      <span className='d-inline-flex align-items-center fw-semibold text-sm-orange'>اقرأ المقال<i class="fa-solid fa-arrow-left-long pp"></i></span>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
          </div>
          </div>

          <div className="py-4">
            <div className='card-custom position-relative overflow-hidden delay-card3'>
            <Link className='d-block text-decoration-none' to={'/blog/landscape-photography-guide'}>
              <div className='row g-0'>
                <div className='col-12 col-md-6'>
                  <div className='position-relative overflow-hidden section-height group'>
                    <img className='img-cover zoom-on-hover' src={'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop'} alt={'دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف'} />
                    <div className='overlay-gradient'></div>
                    <div className='cardEnd'>
                      <span className='badge-custom d-inline-flex align-items-center fw-semibold text-white'><i class="fa-solid fa-star "></i>مميز</span>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='section-box d-flex justify-content-center flex-column section-box-bg'>
                    <div className='d-flex align-items-center gap-3 mb-4'>
                      <span className='tag-custom fw-semibold'>مناظر طبيعية</span>
                      <span className='d-flex align-items-center gap-1 text-s2'><i class="fa-regular fa-clock"></i>10 دقائق للقراءة</span>
                    </div>
                    <h2 className='title-hover fw-bold mb-4'>دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف</h2>
                    <p className='text-s-custom mb-5 cl-3'>
                      استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.
                    </p>
                    <div className='d-flex align-items-center justify-content-between mt-auto'>
                      <div className='d-flex align-items-center gap-3'>
                        <div className='position-relative'>
                          <img className='parsonal-img rounded-circle shadow' src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" alt="ibrahem Hassan" />
                          <div className='dot-img'></div>
                        </div>
                        <div>
                          <p className='fs-6 fw-semibold text-white mb-0'>إبراهيم حسن</p>
                          <p className='date-s'>10 يناير 2026</p>
                        </div>
                      </div>
                      <span className='d-inline-flex align-items-center fw-semibold text-sm-orange'>اقرأ المقال<i class="fa-solid fa-arrow-left-long pp"></i></span>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
          </div>
          </div>
        </div>
      </section>

      <section className='section-dark-y position-relative'>
        <div className="custom-container mx-auto">
          <div className='text-center mb-5'>
            <span className='section-label3 mb-3'>
              <span className='d-flex position-relative ms-2 dot-3'>
                <span className='position-absolute d-inline-flex ping-circle3'></span>
                <span className='position-relative d-inline-flex rounded-circle dot-orange3'></span>
              </span>
              التصنيفات
            </span>
            <h2 className='section-title text-white'>استكشف حسب الموضوع</h2>
            <p className='section-subtitle mx-auto'>اعثر على محتوى مصمم حسب اهتماماتك</p>
          </div>
          <div className='row g-3 m-auto'>
            <div className="col-md-3 col-6">
              <Link className='card-custom3 delay-card1 text-decoration-none py-3' to={'/blog'}>
            <div className='absolute top-0 start-0 gradient-overlay3'></div>
            <div className='position-relative z-10'>
              <div className='d-flex align-items-center justify-content-center mb-4 icon-box-custom'>
                <i className='fa-solid fa-sun icon-sun'></i>
              </div>
              <h3 className='title-card3 mb-1'>إضاءة</h3>
              <p className='card-desc mb-0'>3 مقالة</p>
              <div className='icon-circle position-absolute'>
                <i class="fa-solid fa-angle-left"></i>
              </div>
            </div>
            </Link>
            </div>
            <div className="col-md-3 col-6">
              <Link className='card-custom3 delay-card22 text-decoration-none py-3' to={'/blog'}>
            <div className='absolute top-0 start-0 gradient-overlay3'></div>
            <div className='position-relative z-10'>
              <div className='d-flex align-items-center justify-content-center mb-4 icon-box-custom'>
                <i className='fa-solid fa-user icon-sun'></i>
              </div>
              <h3 className='title-card3 mb-1'>بورتريه</h3>
              <p className='card-desc mb-0'>3 مقالة</p>
              <div className='icon-circle position-absolute'>
                <i class="fa-solid fa-angle-left"></i>
              </div>
            </div>
            </Link>
            </div>
            <div className="col-md-3 col-6">
              <Link className='card-custom3 delay-card32 text-decoration-none py-3' to={'/blog'}>
            <div className='absolute top-0 start-0 gradient-overlay3'></div>
            <div className='position-relative z-10'>
              <div className='d-flex align-items-center justify-content-center mb-4 icon-box-custom'>
                <i className='fa-solid fa-mountain-sun icon-sun'></i>
              </div>
              <h3 className='title-card3 mb-1'>مناظر طبيعية</h3>
              <p className='card-desc mb-0'>2 مقالة</p>
              <div className='icon-circle position-absolute'>
                <i class="fa-solid fa-angle-left"></i>
              </div>
            </div>
            </Link>
            </div>
            <div className="col-md-3 col-6">
              <Link className='card-custom3 delay-card3 text-decoration-none py-3' to={'/blog'}>
            <div className='absolute top-0 start-0 gradient-overlay3'></div>
            <div className='position-relative z-10'>
              <div className='d-flex align-items-center justify-content-center mb-4 icon-box-custom'>
                <i className='fa-solid fa-sliders icon-sun'></i>
              </div>
              <h3 className='title-card3 mb-1'>تقنيات</h3>
              <p className='card-desc mb-0'>5 مقالة</p>
              <div className='icon-circle position-absolute'>
                <i class="fa-solid fa-angle-left"></i>
              </div>
            </div>
            </Link>
            </div>
            <div className="col-md-3 col-6">
              <Link className='card-custom3 delay-card5 text-decoration-none py-3' to={'/blog'}>
            <div className='absolute top-0 start-0 gradient-overlay3'></div>
            <div className='position-relative z-10'>
              <div className='d-flex align-items-center justify-content-center mb-4 icon-box-custom'>
                <i className='fa-solid fa-sun icon-sun'></i>
              </div>
              <h3 className='title-card3 mb-1'>معدات</h3>
              <p className='card-desc mb-0'>3 مقالة</p>
              <div className='icon-circle position-absolute'>
                <i class="fa-solid fa-angle-left"></i>
              </div>
            </div>
            </Link>
            </div>
            

          </div>
        </div>
      </section>

      <section className='position-relative overflow-hidden section1-dark'>
      <div className="gradient-overlay"></div>
        <div className="position-relative container-custom mx-auto px-3 px-sm-4 px-lg-5">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end gap-4">
            <div>
              <span className='section-label mb-4 gap-2 ps-3'>
                <span className='position-relative d-flex ms-2 dot2 '>
                  <span className='ping-circle2 d-inline-flex rounded-circle opacity-75'></span>
                  <span className='position-relative d-inline-flex rounded-circle dot-orange'></span>
                </span>
                الأحدث
              </span>
              <h2 className='section-title text-white'>أحدث المقالات</h2>
              <p className='section-subtitle'>محتوى جديد طازج من المطبعة</p>
            </div>
            <Link className='d-inline-flex align-items-center fw-semibold text-sm-orange text-decoration-none m-but' to={'/blog'}>عرض جميع المقالات<i class="fa-solid fa-arrow-left-long pp"></i></Link>
          </div>
          <div className='row g-4 mt-3'>
            <div className='col-md-4 col-12'>
              <div className='s4card p-0 overflow-hidden card3 delay-card1'>
              <Link className='d-block text-decoration-none' to={'/blog'}>
              <div className='position-relative overflow-hidden h-50'>
                <img className='w-100 h-100 object-fit-cover img-scale' src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop" alt="أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي" />
                <div className='position-absolute top-0 start-0 w-100 h-100 gradient-overlay4'></div>
                <div className='position-absolute top-0 end-0 p-3'>
                  <span className='px-3 py-1 text-white small rounded-pill custom-badge'>تقنيات</span>
                </div>
              </div>
              <div className='p-3'>
                <div className='d-flex align-items-center gap-3 small mb-3'>
                  <span className='d-flex align-items-center gap-1 text-secondary text-s2'><i class="fa-regular fa-clock text-secondary"></i>7 دقائق للقراءة</span>
                  <span className='rounded-circle bg-secondary dot3'></span>
                  <span className='text-secondary'>8 يناير 2026</span>
                </div>
                <h3 className='fs-4 fw-bold mb-3 title-card4'>أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي</h3>
                <p className='mb-4 small leading-relaxed secp-4'>افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.</p>
                <div className='d-flex align-items-center justify-content-between pt-4 border-custom'>
                  <div className='d-flex align-items-center gap-3'>
                    <img className='rounded-circle object-fit-cover personal-sec4' src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face" alt="داود خالد" />
                    <div>
                      <p className='small fw-medium mb-0 mt-3 text-white'>داود خالد</p>
                      <p className='small text-secondary'>مدرب تصوير</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-center rounded-circle icon4-btn'><i className="fa-solid fa-angle-left"></i></div>
                </div>
              </div>
              </Link>
            </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='s4card px-0 overflow-hidden card3 delay-card22'>
              <Link className='d-block text-decoration-none' to={'/blog'}>
              <div className='position-relative overflow-hidden h-50 w-100'>
                <img className='w-100 h-100 object-fit-cover img-scale' src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=400&fit=crop" alt="قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية" />
                <div className='position-absolute top-0 start-0 w-100 h-100 gradient-overlay4'></div>
                <div className='position-absolute top-0 end-0 p-3'>
                  <span className='px-3 py-1 text-white small rounded-pill custom-badge'>تقنيات</span>
                </div>
              </div>
              <div className='p-3'>
                <div className='d-flex align-items-center gap-3 small mb-3'>
                  <span className='d-flex align-items-center gap-1 text-secondary text-s2'><i class="fa-regular fa-clock text-secondary"></i>9 دقائق للقراءة</span>
                  <span className='rounded-circle bg-secondary dot3'></span>
                  <span className='text-secondary'>5 يناير 2026</span>
                </div>
                <h3 className='fs-4 fw-bold mb-3 title-card4'>قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية</h3>
                <p className='mb-4 small leading-relaxed secp-4'>تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.</p>
                <div className='d-flex align-items-center justify-content-between pt-4 border-custom'>
                  <div className='d-flex align-items-center gap-3'>
                    <img className='rounded-circle object-fit-cover personal-sec4' src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" alt="ليث محمود" />
                    <div>
                      <p className='small fw-medium mb-0 mt-3 text-white'>ليث محمود</p>
                      <p className='small text-secondary'>فنان بصري</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-center rounded-circle icon4-btn'><i className="fa-solid fa-angle-left"></i></div>
                </div>
              </div>
              </Link>
            </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='s4card px-0 overflow-hidden card3 delay-card32'>
              <Link className='d-block text-decoration-none' to={'/blog'}>
              <div className='position-relative overflow-hidden h-50 w-100'>
                <img className='w-100 h-100 object-fit-cover img-scale' src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop" alt="تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك" />
                <div className='position-absolute top-0 start-0 w-100 h-100 gradient-overlay4'></div>
                <div className='position-absolute top-0 end-0 p-3'>
                  <span className='px-3 py-1 text-white small rounded-pill custom-badge'>معدات</span>
                </div>
              </div>
              <div className='p-3'>
                <div className='d-flex align-items-center gap-3 small mb-3'>
                  <span className='d-flex align-items-center gap-1 text-secondary text-s2'><i class="fa-regular fa-clock text-secondary"></i>8 دقائق للقراءة</span>
                  <span className='rounded-circle bg-secondary dot3'></span>
                  <span className='text-secondary'>3 يناير 2026</span>
                </div>
                <h3 className='fs-4 fw-bold mb-3 title-card4'>تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك</h3>
                <p className='mb-4 small leading-relaxed secp-4'>اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.</p>
                <div className='d-flex align-items-center justify-content-between pt-4 border-custom'>
                  <div className='d-flex align-items-center gap-3'>
                    <img className='rounded-circle object-fit-cover personal-sec4' src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face" alt="داود خالد" />
                    <div>
                      <p className='small fw-medium mb-0 mt-3 text-white'>جمال عبدالله</p>
                      <p className='small text-secondary'>مصور ومراجع تقني</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-center rounded-circle icon4-btn'><i className="fa-solid fa-angle-left"></i></div>
                </div>
              </div>
              </Link>
            </div>
            </div>
          </div>
          </div>
      </section>

      <section className='py-6 position-relative overflow-hidden section-dark-y'>
        <div className='position-absolute top-0 start-50 translate-middle-x bg-sec5'></div>
        <div className='position-relative mx-auto px-3 px-md-4 px-lg-5 w-max'>
          <div className='text-center p-4 p-md-5 p-lg-5 sec5-card'>
            <div className='d-flex align-items-center justify-content-center mx-auto mb-4 icon-box'><i class="fa-regular fa-envelope"></i></div>
            <h2 className='fw-bold text-white mb-3 titel-sec5'>اشترك في <span className='style-sec5-h2'>نشرتنا الإخبارية</span></h2>
            <p className='text-secondary text-lg mb-4 text-center b-sec5'>احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>
            <form className='d-flex flex-column flex-sm-row gap-3 mx-auto mb-4 style-form'>
              <input className='flex-grow formsec5-input' placeholder='أدخل بريدك الإلكتروني' type='email'></input>
              <button className='sec5-form-btn' type='submit'>اشترك الآن</button>
            </form>
            <div className='d-flex flex-wrap align-items-center justify-content-center gap-3 style-end-sec5'>
              <div className='d-flex align-items-center gap-3'>
                <div className='d-flex overlap-reverse'>
                  <img className='rounded-circle p-img-c' src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" alt='person'></img>
                  <img className='rounded-circle p-img-c' src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" alt='person'></img>
                  <img className='rounded-circle p-img-c' src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt='person'></img>
                </div>
                <span>
                  انضم لـ <span className='text-white fw-semibold'> +10,000</span>
                  مصور
                </span>
              </div>
              <span className='d-none d-sm-inline texts5-style'>•</span>
              <span>بدون إزعاج</span>
              <span className='d-none d-sm-inline texts5-style'>•</span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
