import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import TrackViews from '../components/TrackViews';

function Join() {
    return (
      <>
        <TrackViews />
        <PageHeader title='Join' />
        <div className='flex flex-col py-10 items-center bg-base-100'>
            <div className='px-8'>
                <h1 className="text-4xl font-bold text-center">📸 Media & Marketing Subcommittee 🎨</h1>
            </div>
            <div className='pt-10 px-12 max-w-[747px]'>
                <p>
                    We are currently looking for students from all faculties to join our media & marketing subcommittee. 
                    Specifially, we are looking for photographers and students interested in content creation and graphic 
                    design. No prior experience is necessary; if you are interested in this
                    opportunity, please email <a target="_blank" href="mailto: unswdbf@gmail.com" className='font-bold text-orange-500'>unswdbf@gmail.com</a>.
                </p>
            </div>
            {/*<Link to='https://forms.office.com/r/hQW912SxGw'>
                <div className='pt-8'>
                    <button className="btn btn-outline">Media & Marketing EOI</button>
                </div>
    </Link>*/}
        </div>
        <div className='flex flex-col py-10 items-center bg-sky-100'>
            <div className='px-8'>
                <h1 className="text-4xl font-bold text-center">🏁 Join FPV Drone Racing 🚁</h1>
            </div>
            <div className='pt-10 px-12 max-w-[747px]'>
                <p>
                    FPV (first-person view) Flight Club is a drone racing team that meets <a className='font-bold'>every Friday 
                    from 4:30pm - 6:00pm in G16 Tyree Energy Technologies Building. </a>
                    We teach beginners to fly and hold races for all skill levels.
                    Drones, goggles and controllers are provided by the club, however you are welcome to bring your own.
                </p>
                <br></br>
                <p>
                    To join, simply fill out the form below and turn up to one of our weekly sessions.
                </p>
                
            </div>
            <Link to='https://forms.office.com/r/ERAjD5Ffxe'>
                <div className='pt-8'>
                    <button className="btn btn-outline">Join FPV Flight Club</button>
                </div>
            </Link>
        </div>
        <div className='flex flex-col py-10 items-center bg-base-100'>
            <div className='px-8'>
                <h1 className="text-4xl font-bold text-center">📐 Technical Membership 👩‍💻</h1>
            </div>
            <div className='pt-10 px-12 max-w-[747px]'>
                <p>
                    Technical members meet at least once a week to work on a variety of projects.
                    As a member, you will have opportunities to learn new skills, expand your social network,
                    travel overseas, become a more proficient practical engineer and maybe even lead a team of 
                    undergraduate engineers!
                </p>
                <br></br>
                <p>
                    Inductions for prospective technical members will be held from week 1 to week 5 during every term in 2024.
                    If you wish to join our T1 2024 induction, please complete the form below.

                </p>
            </div>
            <Link to='https://forms.office.com/r/QdBfjD7h9x'>
                <div className='pt-8'>
                    <button className="btn btn-outline">T1 2024 Induction EOI</button>
                </div>
            </Link>
        </div>
      </>
    )
  }
  
  export default Join