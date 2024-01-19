import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'
import TrackViews from '../components/TrackViews';
import scomo from '../assets/scomo.jpg'
import Profile from '../components/Profile';
import SamT from '../assets/Profiles/SamT2.png'
import AkashL from '../assets/Profiles/AkashL.png'
import AlfredW from '../assets/Profiles/AlfredW.png'
import JamesR from '../assets/Profiles/JamesR.png'
import JenniferW from '../assets/Profiles/JenniferW.png'
import ManhoiL from '../assets/Profiles/ManhoiL.png'
import MuhammadH from '../assets/Profiles/MuhammadH.png'
import PhoebeL from '../assets/Profiles/PhoebeL.png'
import TaylorJ from '../assets/Profiles/TaylorJ.png'
import VictorT from '../assets/Profiles/VictorT.png'
import LongkaiL from '../assets/Profiles/LongkaiL.png'
import DaphneL from '../assets/Profiles/DaphneL.png'
import JeffersonW from '../assets/Profiles/JeffersonW.png'
import MilanT from '../assets/Profiles/MilanT.png'
import MitchellT from '../assets/Profiles/MitchellT.png'
import NickS from '../assets/Profiles/NickS.png'
import TalalT from '../assets/Profiles/TalalT.png'
import Default from '../assets/Profiles/default.jpg'
import SherryZ from '../assets/Profiles/SherryZ.jpg'
import MikeL from '../assets/Profiles/MikeL.jpg'
import RayH from '../assets/Profiles/RayH.jpg'
import SophieW from '../assets/Profiles/SophieW.jpg'
import ConnorD from '../assets/Profiles/ConnorD.jpg'

export default function Team() {
    return (
      <>
        <TrackViews />
        <PageHeader title='Team' />

        <div className='flex flex-col py-10 items-center bg-white'>
            <div className='px-8 text-center'>
                <h1 className="text-5xl font-bold">The Executive</h1>
                {/*<p className="pt-4">The executive is responsible for stuff</p>*/}
            </div>
        </div>
        <div class="flex flex-row flex-wrap items-top justify-center max-w-screen px-24">
            <Profile image={Default} name='Sam T' position='President' bio='To build a plane, you need to learn about manufacturing processes, how to collaborate with team members 
                and external connections, and technical skills and knowledge that a uni course could never teach you.' />
            <Profile image={SophieW} name='Sophie Wu' position='Secretary & Grievance Officer' bio='It takes more than one to build a plane, so success is a team effort' />
            <Profile image={RayH} name='Ray H' position='Treasurer' bio='"Why can&apos;t we attach a rocket booster to the wing?"' />
            <Profile image={ConnorD} name='Connor Duigan' position='Media and Marketing Officer & Grievance Officer' bio='Getting to apply technical knowledge from courses to build a functional vehicle greatly enhances understanding and helps understand nuances, going from theory to reality is always satisfying.' />
            <Profile image={TalalT} name='Talal T' position='Relations & Events Officer' bio='DBF FPV is a great place to get involved in drone racing and connect with likeminded students. The sessions are the best part of my week.' />
            <Profile image={JamesR} name='James R' position='Safety Officer' bio='It is amazing to see everyone&apos;s hard work pay off on fly day, and to know you were a part the plane&apos;s success.' />
        </div>

        <div className='bg-sky-100 py-4'>
            <div className='flex flex-col items-center'>
                <div className='px-8'>
                    <h1 className="text-5xl py-6 font-bold text-center">Project Starling</h1>
                </div>
                <Profile image={PhoebeL} name='Phoebe L' position='Director of Project Starling' bio='We are a society where you can really develop technical skills you wouldn&apos;t normally learn in your typical uni course. Knowledge that I&apos;ve gained from DBF has translated directly into me being more prepared for my internship with Boeing.' />
            </div>
            
            <div className='px-8'>
                <h1 className="text-4xl pb-8 pt-4 font-bold text-center">Project Starling Directors</h1>
            </div>
            <div class="flex flex-row flex-wrap items-top justify-center max-w-screen px-24">
                <Profile image={TaylorJ} name='Taylor J' position='Director of Flight Dynamics' bio='It was a great opportunity to turn theory into practice through teamwork. I could also improve my prototyping and problem-solving skills.' />
                <Profile image={VictorT} name='Victor T' position='Director of Aerostructures' bio='If you like to work on everything, you will enjoy this.' />
                <Profile image={MikeL} name='Mike L' position='Senior Aerodynamics Member' bio='Getting to apply technical knowledge from courses to build a functional vehicle greatly enhances understanding and helps understand nuances, going from theory to reality is always satisfying.' />
            </div>
        </div>
        <div className='bg-white py-4'>
            <div className='flex flex-col items-center'>
                <div className='px-8'>
                    <h1 className="text-5xl py-6 font-bold text-center">Project Elevate</h1>
                </div>
                <Profile image={AkashL} name='Akash L' position='Director of Project Elevate' bio='DBF is close-knit community in which we develop critical engineering and manufacturing skills, 
                  and there is nothing more rewarding than watching a finished plane flying with your mates.' />
            </div>
            
            <div className='px-8'>
                <h1 className="text-4xl pb-8 pt-4 font-bold text-center">Project Elevate Directors</h1>
            </div>
            <div class="flex flex-row flex-wrap items-top justify-center max-w-screen px-24">
                <Profile image={MuhammadH} name='Muhammad H' position='Director of Avionics' bio='Joining Design build fly as R&D gave me valuable hands on experience; designing and prototyping skills; that I didn&apos;t find in my coursework.' />
                <Profile image={MikeL} name='Mike L' position='Senior Aerodynamics Member' bio='Getting to apply technical knowledge from courses to build a functional vehicle greatly enhances understanding and helps understand nuances, going from theory to reality is always satisfying.' />
            </div>
        </div>
        <div className='pb-8 bg-slate-100'>
            <div className='flex flex-col py-10 items-top'>
                <div className='px-8'>
                    <h1 className="text-5xl font-bold text-center">FPV Drone Racing</h1>
                </div>
            </div>
            <div class="flex flex-row flex-wrap items-top justify-center max-w-screen px-24">
                <Profile image={TalalT} name='Talal T' position='FPV Project Director' bio='DBF FPV is a great place to get involved in drone racing and connect with likeminded students. The sessions are the best part of my week.' />
                <Profile image={NickS} name='Nick S' position='Senior Member' bio='You only find out if you fly around.' />
                <Profile image={MitchellT} name='Mitchell T' position='Senior Member' bio='' />
            </div>
        </div>
      </>
    )
}