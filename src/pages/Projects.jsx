import VTOLaircraft from '../assets/VTOLaircraft.jpg'
import PageHeader from '../components/PageHeader'
import TrackViews from '../components/TrackViews'
import ProjectKookaburra from '../components/projects/ProjectKookaburra.jsx'
import ProjectBumblebee from '../components/projects/ProjectBumblebee'
import ProjectDartan from '../components/projects/ProjectDartan'
import { useState } from 'react'

function Projects() {
    const [project, setProject] = useState('Kookaburra');
    const kookaburra = () => {
      setProject('Kookaburra');
    }
    const bumblebee = () => {
      setProject('Bumblebee');
    }

    const dartan = () => {
      setProject('Dartan');
    }

    function classNames(...args: any[]) {
      return args.filter(Boolean).join(' ')
    }
    return (
      <>
        <TrackViews />
        <PageHeader title='Projects' />

        <div className="hero bg-base-100">
          <div className="hero-content p-12 flex-col lg:flex-row">
            <img src={VTOLaircraft} alt={'UNSW Design Build Fly'} className="max-w-md h-[500px] object-fill rounded-lg shadow-2xl hidden lg:flex" />
            <img src={VTOLaircraft} alt={'UNSW Design Build Fly'} className="max-h-60 rounded-lg shadow-2xl flex lg:hidden" />
            <div className='px-6 lg:px-12 pt-8 lg:pt-0'>
                <h1 className="text-3xl font-bold">Our Projects</h1>
                <div class="flex justify-center">
                    <ul class="w-full py-2 pl-1">
                        <li
                        class="w-full border-y-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                        <h1 className='text-xl font-bold'>🛫 Project Magpie</h1>
                          <p>
                            Project Magpie is designing and manufacturing a plane that will be flown 
                            at the annual AIAA Design Build Fly competition in Wichita, Kansas, in April 
                            2024. Magpie will need to demonstrate 3 Urban Air Mobility (UAM) 
                            missions, where it will fly as a scaled down version of an air ambulance and air taxi. 
                            The team will be competing against 100 other university teams from around the world and 
                            will be awarded points on the basis of the final protoype’s speed and payload capacity.
                          </p>
                        </li>
                        <li
                        class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                        <h1 className='text-xl font-bold'>🚁 Project Elevate</h1>
                          <p>
                            Project Elevate is a long-term project with the goal of building an autonomous 
                            VTOL (vertical takeoff and landing) drone that can deliver medical supplies to 
                            emergency patients in remote locations. The first prototype will takeoff as a 
                            quadcopter, using 4 vertical motors, before transitioning into a fixed wing aircraft in-flight.
                          </p>
                        </li>
                        <li
                        class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                        <h1 className='text-xl font-bold'>🛸 FPV Flight Club 🏁</h1>
                          <p>
                            FPV Flight Club is a drone racing team that meets once a week in Tyree Energy Technologies Building G16
                            from 4:30 - 6:00pm. We teach members to fly small FPV (first-person view) drones indoors and races are held
                            for all skill levels.
                          </p>
                        </li>
                    </ul>
                </div>
                
            </div>
          </div>
        </div>
        <div className='pb-10'>
            <h1 className="text-4xl font-bold text-center">Completed Projects</h1>
        </div>

        <div className="flex flex-col pb-8 items-center">
          <table className="table table-pin-rows w-[300px]">
            <thead>
              <tr>
                <th>2023</th>
              </tr>
            </thead>
            <tbody>
              <tr><td onClick={kookaburra} className={classNames('cursor-pointer hover:bg-orange-100', (project == 'Kookaburra') && 'font-bold bg-orange-100')}>Project Kookaburra</td></tr>
            </tbody>
            <thead>
              <tr>
                <th>2022</th>
              </tr>
            </thead>
            <tbody>
              <tr><td onClick={bumblebee} className={classNames('cursor-pointer hover:bg-orange-100', (project == 'Bumblebee') && 'font-bold bg-orange-100')}>Project Bumblebee</td></tr>
              <tr><td onClick={dartan} className={classNames('cursor-pointer hover:bg-orange-100', (project == 'Dartan') && 'font-bold bg-orange-100')}>Project Dartan</td></tr>
            </tbody>
          </table>
        </div>
        <div>
          {project == 'Kookaburra' ? <ProjectKookaburra /> : <></>}
          {project == 'Bumblebee' ? <ProjectBumblebee /> : <></>}
          {project == 'Dartan' ? <ProjectDartan /> : <></>}
        </div>
      </>
    )
  }
  
  export default Projects