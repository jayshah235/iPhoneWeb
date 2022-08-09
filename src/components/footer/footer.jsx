import './footer.css';
import images from '../applelogo.png';



const  Footermarvans = () => {
  return (
      <footer>
    <div className='footermain'>
<div className="top">
    <span className='basis20'>
        <img src={images} alt="" />
        </span>
   <span className='basis40'> <h2> Owned By:- Jay shah </h2></span>

</div>
<div className="mid">
    <span className='start1'>
      <h4>Contact Info</h4>
  <ul className='listcolor'>
      <li>
          <label>Phone:</label>
          <a href="tel: xxxxxxxxxx">+ 91xxxxxxxxxx</a>
      </li>
 
      <li>
          <label>Email:</label>
          <a href="mailto: rjayshah2000@gmail.com ">rjayshah2000@gmail.com</a>
      </li>
  
      <li>
          <label>Address:</label>
          <a href="/">Sangrilla complex, Radhakrishna char rasta , vadodara, gujarat</a>
      </li>

      <li>
          <label>WORKING DAYS / HOURS:</label>
      </li>
      <li>
          <a href="/">Mon - Sat / 11:00 AM - 7:00 PM,<br />
Sun / 12:00 PM- 5:00 PM</a>
      </li>
  </ul>
    </span>
    <span className='start1'>
        <h4>Useful Links</h4>
        <ul  className='listcolor'>
            <li>
                <a href="/">Terms & Condition</a>
            </li>
            <li>
                <a href="/">Privacy Policy</a>
            </li>
            <li>
                <a href="/">Refund Policy</a>
            </li>
            <li>
                <a href="/">Return Policy</a>
            </li>
            <li>
                <a href="/">About Us</a>
            </li>
        </ul>
    </span>
    <span className='start1'>
        <h4>Location</h4>
        <div className='imagemap'>
            <a href="/">
                <img src="https://store.marvansmobile.com/assets_2/images/instagram/inst.png" alt="" />
            </a>
        </div>
    </span>
    <span className='start1'>
        <h4>Experience Our App On Mobile</h4>
        <div className='appstoreimage'>
                <a href="/">
                    <img src="https://store.marvansmobile.com/assets_2/images/app.png" alt="" />
                </a> 
        </div>
       
    </span>


</div>
<div className="bottom">
    <figure>
        <img src="https://store.marvansmobile.com/assets_2/images/payment.png" alt="" />
    </figure>
    <div>
        <p>Shreejal Industries © 2007. All Rights Reserved</p>
    </div>
</div>
    </div>
    </footer>
  )
}

export default Footermarvans