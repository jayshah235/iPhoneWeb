import './menu.css';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

const Dropmenu = () => {
  return (
  <>
  <div className="mainmenu">
      <div className="menu">
          <span>Home</span>
          <span className='afterclass'>Iphone</span>
          <span className='afterclass2'>Iwatches
         {/* <div className="dropmenu">
           <div>
             <p>watch</p>
             <p>watch</p>
             <p>watch</p>
             <p>watch</p>
           </div>
         </div> */}
          
          </span>
          <span className='afterclass'>Airpods</span>
          <span>
          <NavLink to="iphoneweb/airpods" className='afterclass'>Accessories</NavLink>
          </span>
          <span>About us</span>
          <span>Special discount</span>
      </div>
  </div>
  
  </>
  )
}

export default Dropmenu;