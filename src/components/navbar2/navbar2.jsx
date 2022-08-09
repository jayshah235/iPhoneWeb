import './navbar2.css';
import images from '../applelogo.png'
import { NavLink } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <>
    <div className="margin">

        
        <div className="imgleft">
            
        <NavLink to="/iphoneweb">
            <img src={images} alt="" />
            </NavLink>
        </div>
        <div className="buyright">
            <div className='border-right'>
                <span className='topfont'>Track </span>
                <span  className='bottomfont'>your order</span>
            </div>
            <div className='flex-column'>
                <span  className='topfont'>Shopping </span>
                <span  className='bottomfont'>₹0.00</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar2;