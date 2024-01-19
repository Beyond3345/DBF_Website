import VTOL from '../../assets/VTOLaircraft.jpg'
import VTOL2 from '../../assets/VTOL2.png'
import VTOL3 from '../../assets/VTOL3.jpg'

export default function ProjectDartan() {
    return (
      <>
        <div className='flex flex-col py-10 items-center bg-sky-100'>
            <div className='pb-10'>
                <h1 className="text-4xl font-bold text-center">Project Dartan</h1>
            </div>
            <div id="carouselExampleControls" className="relative w-[300px] h-[180px] lg:w-[720px] lg:h-[420px]" data-te-carousel-init data-te-carousel-slide>
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    <div
                    className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    data-te-carousel-active>
                    <img
                        src={VTOL}
                        className="w-[300px] h-[180px] lg:w-[720px] lg:h-[420px] object-cover rounded-lg" />
                    </div>
                    <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src={VTOL2}
                        className="w-[300px] h-[180px] lg:w-[720px] lg:h-[420px] object-cover rounded-lg" />
                    </div>
                    <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src={VTOL3}
                        className="w-[300px] h-[180px] lg:w-[720px] lg:h-[420px] object-cover rounded-lg" />
                    </div>
                </div>
                <button
                    className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselExampleControls"
                    data-te-slide="prev">
                    <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    </span>
                    <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Previous</span
                    >
                </button>
                <button
                    className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselExampleControls"
                    data-te-slide="next">
                    <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    </span>
                    <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Next</span
                    >
                </button>
            </div>
            <div className='pt-10 px-12 max-w-[747px] text-center'>
                <p>
                  Between June and September of 2022, between the DBF competition seasons, the team built
                  a foam delta wing plane. During the project, the team also conducted research into
                  the process of converting a fixed-wing plane into a VTOL (vertical takeoff and landing) drone.
                </p>
            </div>
        </div>

      </>
    )
}