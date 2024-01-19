//import logo from '../components/assets/mayTGM.png'
import scomo from '../assets/scomo.jpg'
import AboutPreview from '../components/homePreviews/AboutPreview.jsx'
import MeetTeamPreview from '../components/homePreviews/MeetTeamPreview'
import ProjectPreview from '../components/homePreviews/ProjectPreview'
import SponsorshipPreview from '../components/homePreviews/SponsorshipPreview'
import ImageDivider from '../components/homePreviews/ImageDivider'
import SocialMedia from '../components/homePreviews/SocialMedia'
import TrackViews from '../components/TrackViews'

function Home() {

    return (
      <>
        <TrackViews />
        {/* HERO */}
        <div className="hero min-h-screen bg-mayTGM bg-fixed"> {/* bg-fixed for fixed background */}
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-5xl">
              <h1 className="mb-5 text-5xl font-bold">UNSW Design Build Fly</h1>
              <p className="mb-5">We design, manufacture, and fly UAVs for competitive, 
              research, and humanitarian purposes.</p>
            </div>
          </div>
        </div>
        
        <AboutPreview /> {/* ABOUT SUB-SECTION */}
        <MeetTeamPreview /> {/* MEET THE TEAM */}
        <ProjectPreview />
        <SponsorshipPreview />
        <SocialMedia />
        {/* <ImageDivider /> */}
      </>
    )
  }
  
  export default Home