import prep from '../../assets/23-1_prep.jpeg'
import workshop from '../../assets/23-1_workshop.jpg'
import lineup from '../../assets/23-1_lineup.png'
import leftTurn from '../../assets/23-1_leftTurn.png'
import leftTurn2 from '../../assets/23-1_leftTurn2.png'
import workshop2 from '../../assets/workshop2.jpg'
import infield from '../../assets/infield.jpg'
import YoutubeEmbed from '../YoutubeEmbed'

export default function ProjectKookaburra() {
    return (
      <>
        <div className='flex flex-col py-10 items-center bg-sky-100'>
            <div className='pb-10'>
                <h1 className="text-4xl font-bold text-center">Project Kookaburra</h1>
            </div>
            <div id="carouselExampleControls" className="relative w-[300px] h-[180px] lg:w-[720px] lg:h-[420px]" data-te-carousel-init data-te-carousel-slide>
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    <div
                    className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    data-te-carousel-active>
                    <img
                        src={infield}
                        className="w-[300px] h-[180px] lg:w-[720px] lg:h-[420px] object-cover rounded-lg" />
                    </div>
                    <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src={workshop2}
                        className="w-[300px] h-[180px] lg:w-[720px] lg:h-[420px] object-cover rounded-lg" />
                    </div>
                    <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src={workshop}
                        className="w-[300px] h-[180px] lg:w-[720px] lg:h-[420px] object-cover rounded-lg" />
                    </div>
                    
                    <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src={prep}
                        className="w-[300px] h-[180px] lg:w-[720px] lg:h-[420px] object-cover rounded-lg" />
                    </div>
                    <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src={lineup}
                        className="w-[300px] h-[180px] lg:w-[720px] lg:h-[420px] object-cover rounded-lg" />
                    </div>
                    <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src={leftTurn}
                        className="w-[300px] h-[180px] lg:w-[720px] lg:h-[420px] object-cover rounded-lg" />
                    </div>
                    <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src={leftTurn2}
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
                  From September 2022 to April 2023, a large portion of UNSW DBF memebers designed and manufactured multiple iterations
                  of our competition aircraft, 'The Kookaburra', for the international AIAA Design Build Fly competition.
                  The objective for 2023 was to design, build, and test an aircraft to execute electronic warfare (EW) missions. 
                  Flight missions included staging of the aircraft, surveillance, and jamming. Rules and mission requirements can be 
                  read <a className='underline' target="_blank" href='https://www.aiaa.org/docs/default-source/uploadedfiles/aiaadbf/resources/dbf-rules-2023-final.pdf'>here</a>.
                </p>
                <p>
                  Although we weren't able to attend the fly-off in Tuscon, Arizona, we did build a plane
                  that flew within compeition regulations. We also ranked in the top 10% of teams in the design proposal.
                </p>
            </div>
            <YoutubeEmbed embedId="0C00X7vX4n4" />
            <YoutubeEmbed embedId="IewxJm4SYC0" />

        </div>

      </>
    )
}