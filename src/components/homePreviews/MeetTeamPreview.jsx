import { Link } from 'react-router-dom';
import scomo from '../../assets/scomo.jpg'
import Profile from '../../components/Profile';
import TalalT from '../../assets/Profiles/TalalT.png'
import PhoebeL from '../../assets/Profiles/PhoebeL.png'
import SamT from '../../assets/Profiles/SamT2.png'
import Default from '../../assets/Profiles/default.jpg'
import AkashL from '../../assets/Profiles/AkashL.png'


function MeetTeamPreview() {
    return (
        <div className="flex flex-col py-10 items-center bg-white">
          <div className='pb-4'>
            <h1 className="text-5xl font-bold">Meet the team</h1>
          </div>
          
          <div className='flex flex-row flex-wrap items-top justify-center max-w-screen'>
            {/*
            <div class="px-12 py-4 w-[350px] text-center">
                <div class="mb-6 flex justify-center">
                    <img
                    src={Default}
                    class="w-48 max-h-48 object-cover rounded-full shadow-lg dark:shadow-black/30" />
                </div>
                <h5 class="mb-2 text-xl font-semibold">Sam T</h5>
                <h6 class="mb-2 font-semibold text-primary dark:text-primary-500">
                    President
                </h6>
                <p class="mb-4">
                To build a plane, you need to learn about manufacturing processes, how to collaborate with team members 
                and external connections, and technical skills and knowledge that a uni course could never teach you.
                </p>
            </div>
    */}
            
            <div class="px-12 py-4 w-[350px] text-center">
                <div class="mb-6 flex justify-center">
                    <img
                    src={PhoebeL}
                    class="w-48 max-h-48 object-cover rounded-full shadow-lg dark:shadow-black/30" />
                </div>
                <h5 class="mb-2 text-xl font-semibold">Phoebe L</h5>
                <h6 class="mb-2 font-semibold text-primary dark:text-primary-500">
                    Director of Project Magpie
                </h6>
                <p class="mb-4">
                  We are a society where you can really develop technical skills you wouldn't normally learn in
                  your typical uni course. Knowledge that I've gained from DBF has 
                  translated directly into me being more prepared for my internship with Boeing.
                </p>
            </div>
            <div class="px-12 py-4 w-[350px] text-center">
                <div class="mb-6 flex justify-center">
                    <img
                    src={AkashL}
                    class="w-48 max-h-48 object-cover rounded-full shadow-lg dark:shadow-black/30" />
                </div>
                <h5 class="mb-2 text-xl font-semibold">Akash L</h5>
                <h6 class="mb-2 font-semibold text-primary dark:text-primary-500">
                    Director of Project Elevate
                </h6>
                <p class="mb-4">
                  DBF is close-knit community in which we develop critical engineering and manufacturing skills, 
                  and there is nothing more rewarding than watching a finished plane flying with your mates.
                </p>
            </div>

            <div class="px-12 py-4 w-[350px] text-center">
                <div class="mb-6 flex justify-center">
                    <img
                    src={TalalT}
                    class="w-48 max-h-48 object-cover rounded-full shadow-lg dark:shadow-black/30" />
                </div>
                <h5 class="mb-2 text-xl font-semibold">Talal T</h5>
                <h6 class="mb-2 font-semibold text-primary dark:text-primary-500">
                    Director of FPV Flight Club
                </h6>
                <p class="mb-4">
                To build a plane, you need to learn about manufacturing processes, how to collaborate with team members 
                and external connections, and technical skills and knowledge that a uni course could never teach you.
                </p>
            </div>

          </div>
          <Link to='team'>
            <div className=''>
              <button className="btn btn-outline">The Team</button>
            </div>
          </Link>
        </div>
    )
}

export default MeetTeamPreview