import React from 'react'
import { NavLink , Link} from 'react-router-dom'
import Logo from './logo-GdqARQRt.png';
import "./navbar.css"

export default function Navbar() {
  return (
    <div className='d-flex flex-column bg-slate'>
<nav className="navbar navbar-expand-lg bgbody position-fixed top-0 start-0 end-0 z-1000000 bg-opacity-95">
  <div className="container-fluid px-5">
    <div className="navbar-brand d-flex " >
        <div className='style-logo'>
          <img className='w-100' src={Logo} alt="Adassa-logo" />
          </div>
        <div className='w-50'>
          <h3 className='mb-0 color-text'>عدسة</h3>
        <p className='smallp color-second'>عالم التصوير الفوتوغرافي</p>
        </div>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="m-auto d-flex align-items-center rounded-pill border px-3 py-2 badge-dark">
        <li className="nav-item rounded-pill">
                    <NavLink className={({isActive}) =>
                    isActive ? 'nav-link btn btn-gradient-orange text-white rounded-pill px-4 py-2 fw-medium small'
                    : 'nav-link btn-neutral px-3 py-2 fw-medium small rounded-pill'
                    } 
                    aria-current="page" to="/">الرئيسية</NavLink>
                </li>
                <li className="nav-item rounded-pill ">
                    <NavLink className={({isActive})=>
                    isActive ? 'nav-link btn btn-gradient-orange text-white rounded-pill px-4 py-2 fw-medium small'
                    : 'nav-link btn-neutral px-3 py-2 fw-medium small rounded-pill'
                    }
                    aria-current="page" to="/blog">المدونة</NavLink>
                </li>
                <li className="nav-item rounded-pill">
                    <NavLink className={({isActive})=>
                    isActive ? 'nav-link btn btn-gradient-orange text-white rounded-pill px-4 py-2 fw-medium small'
                    : 'nav-link btn-neutral px-3 py-2 fw-medium small rounded-pill'
                    }
                    aria-current="page" to="/about">من نحن</NavLink>
                </li>
      </ul>
      <div className="d-flex" role="search">
        <button className='icon-btn p-2 ms-2 rounded-3 bg-transparent'>
          <i class="fa-solid fa-magnifying-glass ">
            </i>
            </button>
        <Link className="btn btn-orange text-sm" to="/blog">ابدأ القراءة</Link>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}
