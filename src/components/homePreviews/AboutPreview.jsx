import { Link } from 'react-router-dom'
import prep from '../../assets/23-1_prep.jpeg'

function AboutPreview() {
    return (
        <div className="hero bg-slate-50">
          <div className="hero-content p-12 flex-col lg:flex-row">
            <img src={prep} alt={'UNSW Design Build Fly'} className="max-w-md rounded-lg shadow-2xl hidden lg:flex" />
            <img src={prep} alt={'UNSW Design Build Fly'} className="max-h-60 rounded-lg shadow-2xl flex lg:hidden" />
            <div className='px-6 lg:px-12 pt-8 lg:pt-0'>
              <h1 className="text-5xl font-bold">About us</h1>
              <p className="py-6">Since 2018, a team of UNSW students have competed in the AIAA Design Build Fly competition, 
              held annually in America. In 2022, our society was officially established. Whilst we continue to compete in the 
              competition, we now comprise of additional projects focused on autonomous aerial medical delivery, 
              drone racing, and research & development.</p>
              <Link to='about'>
                <button className="btn btn-outline">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
    )
}

export default AboutPreview