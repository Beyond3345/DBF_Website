import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import cat from '../assets/cat.JPG'
import partitionedPlane from '../assets/partitionedPlane.jpg'

function Footer() {
    const footerYear = new Date().getFullYear()
    return (
      <footer className='footer p-10 bg-sky-800 text-primary-content footer-center'>
        <div>
          <div className='flex flex-row'>
              <a href="https://instagram.com/skylabs.unsw"><FaInstagram className='inline px-1 text-3xl' /></a>
              <a href="https://www.facebook.com/UNSWDesignBuildFly"><FaFacebook className='inline px-1 text-3xl' /></a>
              <a href="https://www.linkedin.com/company/unsw-design-build-fly/"><FaLinkedin className='inline px-1 text-3xl' /></a>
          </div>
          {/* <label htmlFor="my-modal-4" className="">Secret Button</label> {/* The button to open modal */}
          <p>E: <a target="_blank" href="mailto: unswdbf@gmail.com">unswdbf@gmail.com</a></p>
          <p>Copyright &copy; UNSW Design Build Fly {footerYear}</p>
          
          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
              <img src={partitionedPlane} alt={'UNSW Design Build Fly'} />
            </label>
          </label>
        </div>
      </footer>
    )
  }
  
  export default Footer