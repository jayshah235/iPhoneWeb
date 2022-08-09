import React from 'react'
import './style.css';
import image1 from '../images/image3.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image5.jpg';



const  Collab = () => {
  return (
      <>
      <div className="headcollab">
          <h3>Top Products</h3>
  <div className="card">
      <span className='spanflex'>
<img src={image1} alt="" />
</span>
<span className='spanflex'>
<img src={image2} alt="" />
</span>
<span className='spanflex'>
<img src={image3} alt="" />
</span>
  </div>
  </div>
  </>
  )
}

export default Collab