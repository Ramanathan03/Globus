import Link from 'next/link'
const Header_top = ()=>(
	<div className="">
      <div className="row">
      <div className="col-md-5">
         <a className="logo"></a>
        </div>
      <div className="col-md-3">
          <p className="tag-line">We are Cleaning Experts!</p>
        </div>
      <div className="col-md-2">
      <div className="head-opening-hours">
      <div>
        <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-clock-fill clock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
          </svg>
          <p className="head-opening-hours-p">8:00am - 10:00pm <br/> Mon - Sun</p>
        </div>
        </div>
        </div>
      <div className="col-md-2">
      <div style={{position:"relative", left:"-20px"}}>
        <p className="head-contact-info">Call us on: <br/> 
        <span className="head-contact-info-span">02048790218</span></p>
        </div>
        </div>
      </div>

      <hr className="header-line"/>
      
      <div className="row">
       <ul className="nav-ul">
       	<li className="col-md-3 nav-text" >
       	<Link href="/">
       	 <a>Home</a>
       	</Link>
       	</li>
       	<li className="col-md-3 nav-text">
       	<Link href="/about"> 
       	   <a>About Us</a>
        </Link>
       	</li>
       	<li className="col-md-3 nav-text">
       	<Link href="/services"> 
       	<a>Our Services</a>
       	</Link>
       	</li>
       	<li className="col-md-3 nav-text"><Link href="/contact">Contact</Link></li>
       </ul>
      </div>
     
    </div>
)
export default Header_top