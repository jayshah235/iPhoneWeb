import './phones.css';
import image1 from '../images/double13pro.png';
import image2 from '../images/doubleiwatch.png';
import image3 from '../images/airpodspro.png';
import image4 from '../images/stand.png';

const Phones = () => {
  return (
  <>
<div className="topdiv">
    <h3>Our Categories</h3>
    <div className="flexdiv">
<section className='flexbasis'>
    <img src={image1} alt="" />
    <p className='paraposition'>Phones</p>
</section>
<section className='flexbasis'>
    <img src={image2} alt="" />
    <p className='paraposition'>Iwatches</p>
</section>
<section className='flexbasis'>
    <img src={image3} alt="" />
    <p className='paraposition'>Airpods pro</p>
</section>
<section className='flexbasis'>
    <img src={image4} alt="" />
    <p className='paraposition'>Accessories</p>
</section>

    </div>
</div>
  </>
  )
}

export default Phones;