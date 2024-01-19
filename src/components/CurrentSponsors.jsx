import unswlogo from '../assets/unsw.png'
import arclogo from '../assets/arc.png'
import playwithcarbon from '../assets/playwithcarbon.jpg'
import ansys from '../assets/ansys2.jpg'
import leap from '../assets/leap1.png'
import quickstep from '../assets/Sponsors/Quickstep.png'
import onshape from '../assets/Sponsors/onshape.jpeg'

export default function CurrentSponsors() {
    return(
    <>
    <p className='text-center text-3xl font-bold pt-6'>Our Sponsors</p>
    <div className='flex flex-col items-center pb-10 bg-white'>
        <div className='flex flex-row flex-wrap items-center justify-center px-12 max-w-[1000px]'>
            <img
            src={leap}
            alt=''
            class="w-52 m-5 p-2" />
            <img
            src={ansys}
            alt=''
            class="w-64 m-5 p-2" />
            <img
            src={quickstep}
            alt=''
            class="w-64 m-5 p-2" />
            <img
            src={onshape}
            alt=''
            class="w-52 m-5 p-2" />
            <img
            src={unswlogo}
            alt=''
            class="w-48 rounded-lg m-5 p-2" />
            <img
            src={arclogo}
            alt=''
            class="w-40 m-5 p-2" />
            <img
            src={playwithcarbon}
            alt=''
            class="w-64 m-5 p-2" />
        </div>
    </div>
    </>
)}