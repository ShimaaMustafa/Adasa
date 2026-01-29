import React from 'react'
import './blogDetails.css';
import blogData from "../src/data/blogs.json";
import { Link } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
const formatDateDM = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
  });
};
export default function BlogDetails() {
    const { slug } = useParams();
    const post = blogData.posts.find((p) => p.slug === slug);
    if (!post) {
    return <h2 className="text-center py-5">المقال غير موجود</h2>;
    }
    let sectionIndex = 0;
    const hightHeadings = post?.content 
    ? post.content.split('\n').filter((line) => line.trim().startsWith('##')).map((line) => line.replace('##' , '').trim()) 
    : [];
    const postsArray = blogData.posts;
    // const currentPosts = postsArray.find((postCard)=> postCard.slug === slug);
    const relatedPosts = postsArray.filter((postCard) => postCard.slug !== slug).slice(0,3);

    return (
    <main className="flex-grow pt7 blog-main">
        <article className="blog-article">
        {/* HERO */}
        <div className="position-relative blog-hero">
        <img
            alt={post.title}
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
            src={post.image}
        />

          {/* overlays */}
        <div className="position-absolute top-0 start-0 w-100 h-100 blog-hero-overlay-t"></div>
        <div className="position-absolute top-0 start-0 w-100 h-100 blog-hero-overlay-r"></div>

          {/* breadcrumb */}
        <div className="position-absolute top-0 start-0 end-0 blog-hero-breadcrumb">
            <nav className="d-inline-flex align-items-center gap-2 px-3 py-2 blog-breadcrumb">
            <Link className="blog-breadcrumb-link" to="/">
                <i className="fa-solid fa-home"></i>
            </Link>

            <i className="fa-solid fa-chevron-left blog-breadcrumb-sep"></i>

            <Link className="blog-breadcrumb-link" to="/blog">
                المدونة
            </Link>

            <i className="fa-solid fa-chevron-left blog-breadcrumb-sep"></i>

            <span className="blog-breadcrumb-active text-truncate">
            {post.category}
            </span>
            </nav>
        </div>

          {/* bottom content */}
        <div className="position-absolute bottom-0 start-0 end-0 blog-hero-bottom">
            <div className="container">
            <div className="mx-auto blog-max-5xl">
                <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                <Link
                    className="blog-category-btn text-decoration-none"
                    to={`/blog?category=${post.category}`}
                >
                    {post.category}
                </Link>

                <div className="d-flex align-items-center gap-4 blog-meta">
                    <span className="d-flex align-items-center gap-2">
                    <i className="fa-regular fa-calendar"></i>
                    {formatDate(post.date)}
                    </span>

                    <span className="d-flex align-items-center gap-2">
                    <i className="fa-regular fa-clock"></i>{post.readTime}
                    </span>
                </div>
                </div>

                <h1 className="blog-title">
                {post.title}
                </h1>

                <div className="d-flex align-items-center gap-3 p-3 blog-author-card">
                <img
                    alt={post.author.name}
                    className="blog-author-img"
                    src={post.author.avatar}
                />

                <div>
                    <p className="mb-0 fw-bold text-white">{post.author.name}</p>
                    <p className="mb-0 small blog-author-role">{post.author.role}</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        {/* CONTENT */}
        <div className="container py-5">
        <div className="row g-5">
            {/* LEFT (ARTICLE) */}
            <div className="col-lg-8 order-2 order-lg-1">
            <div className="p-4 p-md-5 blog-quote-box mb-4">
                <p className="mb-0 blog-quote-text">
                {post.excerpt}
                </p>
            </div>

            <div className="blog-prose">
                <ReactMarkdown
                    components={{
                    h2: ({...props }) => {
                    const id = `section-${sectionIndex}`;
                    sectionIndex++;

                    return (
                    <h2 id={id} className="blog-h2 scroll-mt-24" {...props}>
                    <span className="blog-h2-icon">
                    <i className="fa-solid fa-camera"></i>
                    </span>
                    {props.children}
                    </h2>
                    );
                    },
                    p: ({...props }) => <p className="blog-p" {...props} />,
                    }}
                    >
                    {post.content}
                    </ReactMarkdown>
                    </div>

              {/* TAGS */}
            <div className="mt-5 p-4 blog-box">
                <div className="d-flex align-items-center gap-3 mb-3">
                <div className="blog-mini-icon">
                    <i className="fa-solid fa-tags"></i>
                </div>
                <h3 className="mb-0 fw-bold text-white">الوسوم</h3>
                </div>

                <div className="d-flex flex-wrap gap-2">
                    <span className="blog-tag">#{post.tags[0]}</span>
                    <span className="blog-tag">#{post.tags[1]}</span>
                    <span className="blog-tag">#{post.tags[2]}</span>
                </div>
            </div>

              {/* SHARE */}
            <div className="mt-4 p-4 blog-box">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div className="d-flex align-items-center gap-3">
                    <div className="blog-mini-icon">
                    <i className="fa-solid fa-share-nodes"></i>
                    </div>
                    <h3 className="mb-0 fw-bold text-white">شارك المقال</h3>
                </div>

                <div className="d-flex gap-2">
                    <button className="blog-share-btn blog-share-x" type="button">
                    <i className="fa-brands fa-x-twitter"></i>
                    </button>

                    <button
                    className="blog-share-btn blog-share-ln"
                    type="button"
                    >
                    <i className="fa-brands fa-linkedin-in"></i>
                    </button>

                    <button
                    className="blog-share-btn blog-share-wa"
                    type="button"
                    >
                    <i className="fa-brands fa-whatsapp"></i>
                    </button>

                    <button
                    className="blog-share-btn blog-share-link"
                    type="button"
                    >
                    <i className="fa-solid fa-link"></i>
                    </button>
                </div>
                </div>
            </div>

              {/* AUTHOR BOX */}
                <div className="mt-4 p-4 p-md-5 blog-author-box">
                <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-4">
                    <img
                    alt={post.author.name}
                    className="blog-author-big-img"
                    src={post.author.avatar}
                    />

                    <div className="text-center text-sm-end flex-grow-1">
                    <span className="blog-author-badge">كاتب المقال</span>
                    <h3 className="mt-1 mb-1 fw-bold text-white">{post.author.name}</h3>
                    <p className="mb-2 small blog-muted">{post.author.role}</p>
                    <p className="mb-0 small blog-muted-2">
                    مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                    الفوتوغرافي.
                    </p>
                    </div>
                </div>
                </div>
            </div>

            {/* RIGHT (SIDEBAR) */}
            <aside className="col-lg-4 order-1 order-lg-2">
            <div className="blog-sticky">
                {/* TOC */}
                <div className="p-4 blog-box mb-4">
                <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="blog-mini-icon">
                    <i className="fa-solid fa-list"></i>
                    </div>
                    <h3 className="mb-0 fw-bold text-white">محتويات المقال</h3>
                </div>

                <nav className="d-flex flex-column gap-2">
                    {hightHeadings.length > 0 ? ( hightHeadings.map((title , index) => (
                        <a key={index} href={`#section-${index}`} className="blog-toc-link">
                        <span className="blog-toc-num">{index + 1}</span>
                        <span className="small">{title}</span>
                    </a>
                    )))
                    :(<p className="text-secondary small mb-0">لا يوجد محتويات لهذا المقال</p>
                    )}
                    </nav>
                </div>

                {/* STATS */}
                <div className="p-4 blog-box mb-4">
                <div className="row g-3">
                    <div className="col-6">
                    <div className="text-center p-3 blog-stat">
                        <i className="fa-regular fa-clock blog-stat-icon"></i>
                        <p className="mb-0 fw-bold text-white">
                        {post.readTime}
                        </p>
                        <p className="mb-0 blog-stat-sub">وقت القراءة</p>
                    </div>
                    </div>

                    <div className="col-6">
                    <div className="text-center p-3 blog-stat">
                        <i className="fa-regular fa-calendar blog-stat-icon"></i>
                        <p className="mb-0 fw-bold text-white small">{formatDateDM(post.date)}</p>
                        <p className="mb-0 blog-stat-sub">تاريخ النشر</p>
                    </div>
                    </div>
                </div>
                </div>

                {/* CTA */}
                <div className="p-4 blog-cta">
                <div className="text-center">
                    <div className="blog-cta-icon mx-auto mb-3">
                    <i className="fa-solid fa-envelope"></i>
                    </div>

                    <h3 className="fw-bold text-white mb-2">لا تفوّت جديدنا</h3>
                    <p className="small blog-muted-2 mb-3">
                    اشترك للحصول على أحدث المقالات
                    </p>

                    <Link className="blog-cta-btn w-100 text-decoration-none" to="/blog">
                        تصفح المزيد
                    </Link>
                    </div>
                </div>
            </div>
            </aside>
        </div>

          {/* RELATED */}
        <div className="mt-5 pt-5 blog-related">
            <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="d-flex align-items-center gap-3">
                <span className="blog-related-icon">
                <i className="fa-solid fa-images"></i>
                </span>

                <div>
                <h2 className="h3 fw-bold text-white mb-1">مقالات قد تعجبك</h2>
                <p className="small blog-muted mb-0">
                    استكشف المزيد من المحتوى المميز
                </p>
                </div>
            </div>

            <Link className="d-none d-sm-flex align-items-center gap-2 blog-view-all" to="/blog">
                عرض الكل
                <i className="fa-solid fa-arrow-left blog-view-all-icon"></i>
            </Link>
            </div>

            <div className="row g-4">
                {relatedPosts.map((post) => (
                    <div key={post.slug} className="col-sm-6 col-lg-4">
                <Link
                className="blog-card d-block text-decoration-none"
                to={`/blog/${post.slug}`}
                >
                <div className="position-relative blog-card-img">
                    <img
                    alt={post.title}
                    className="w-100 h-100 object-fit-cover blog-card-img-inner"
                    src={post.image}
                    />

                    <div className="position-absolute top-0 start-0 w-100 h-100 blog-card-grad"></div>

                    <span className="position-absolute top-0 end-0 blog-card-badge">
                    {post.category}
                    </span>
                </div>

                <div className="p-4">
                    <h3 className="blog-card-title">
                    {post.title}
                    </h3>

                    <div className="d-flex align-items-center justify-content-between small blog-muted">
                    <span className="d-flex align-items-center gap-2">
                        <img
                        alt={post.author?.name}
                        className="blog-mini-avatar"
                        src={post.author?.avatar}
                        />
                        {post.author?.name}
                    </span>
                    <span>{post.readTime}</span>
                    </div>
                </div>
                </Link>
            </div>
                ))}
            </div>
        </div>
        </div>
    </article>
    </main>
);
}

