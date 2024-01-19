import dbf211 from '../../assets/DBF21-1/21-1.JPG'
import dbf212 from '../../assets/DBF21-1/21-2.JPG'
import dbf213 from '../../assets/DBF21-1/21-3.JPG'
import dbf214 from '../../assets/DBF21-1/21-4.JPG'
import dbf215 from '../../assets/DBF21-1/21-5.JPG'
import dbf216 from '../../assets/DBF21-1/21-6.JPG'
import dbf217 from '../../assets/DBF21-1/21-7.jpg'
import dbf218 from '../../assets/DBF21-1/21-8.JPG'
import YoutubeEmbed from '../YoutubeEmbed'

export default function ProjectBumblebee() {
    return (
      <>
        <div className='flex flex-col py-10 items-center bg-sky-100'>
            <div className='pb-10'>
                <h1 className="text-4xl font-bold text-center">Project Bumblebee</h1>
            </div>
            <div id="carouselExampleControls" className="relative w-[300px] h-[180px] lg:w-[720px] lg:h-[420px]" data-te-carousel-init data-te-carousel-slide>
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    <div
                    className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    data-te-carousel-active>
                    <img
                        src={dbf211}
                        className="w-[300px] h-[180px] lg:w-[720px] lg:h-[420px] object-cover rounded-lg" />
                    </div>
                    <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src={dbf212}
                        className="w-[300px] h-[180px] lg:w-[720px] lg:h-[420px] object-cover rounded-lg" />
                    </div>
                    <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src={dbf213}
                        className="w-[300px] h-[180px] lg:w-[720px] lg:h-[420px] object-cover rounded-lg" />
                    </div>
                    <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src={dbf214}
                        className="w-[300px] h-[180px] lg:w-[720px] lg:h-[420px] object-cover rounded-lg" />
                    </div>
                    <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src={dbf215}
                        className="w-[300px] h-[180px] lg:w-[720px] lg:h-[420px] object-cover rounded-lg" />
                    </div>
                    <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src={dbf216}
                        className="w-[300px] h-[180px] lg:w-[720px] lg:h-[420px] object-cover rounded-lg" />
                    </div>
                    <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src={dbf217}
                        className="w-[300px] h-[180px] lg:w-[720px] lg:h-[420px] object-cover rounded-lg" />
                    </div>
                    <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src={dbf218}
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
                  During 2021 and early 2022, the Design Build Fly team built the Bumblebee.
                  The plane was built according to the AIAA Design Build Fly competition rules
                  but was not taken to the competition fly-off due to difficulties and restrictions 
                  caused by the coronavirus pandemic.
                </p>
            </div>
            <YoutubeEmbed embedId="Pcnz-adgI50" />
        </div>

      </>
    )
}