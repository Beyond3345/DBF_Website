import { FaFacebook, FaInstagram, FaLinkedin, FaTree, FaTiktok, FaUniversity, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function SocialMedia() {
    return (
        <>
        <div className='flex flex-col py-10 items-center bg-slate-50'>
            <div className=''>
                <h1 className="text-5xl font-bold text-center">See more</h1>
            </div>

            <div class="flex justify-center py-8">
                <ul class="w-64">
                    <a href='https://www.facebook.com/UNSWDesignBuildFly' target='_blank'>
                        <li
                        class="w-full p-4 hover:rounded-xl hover:bg-slate-200">
                        <a className='text-2xl' href=""><FaFacebook className='inline px-2 text-5xl' />Facebook</a>
                        </li>
                    </a>
                    <a href='https://instagram.com/skylabs.unsw' target='_blank'>
                        <li
                        class="w-full p-4 hover:rounded-xl hover:bg-slate-200">
                        <a className='text-2xl' href=""><FaInstagram className='inline px-2 text-5xl' />Instagram</a>
                        </li>
                    </a>
                    <a href='https://www.linkedin.com/company/unsw-design-build-fly/' target='_blank'>
                        <li
                        class="w-full p-4 hover:rounded-xl hover:bg-slate-200">
                        <a className='text-2xl' href=""><FaLinkedin className='inline px-2 text-5xl' />LinkedIn</a>
                        </li>
                    </a>
                    <a href='https://www.tiktok.com/@skylabs.unsw/' target='_blank'>
                        <li
                        class="w-full p-4 hover:rounded-xl hover:bg-slate-200">
                        <a className='text-2xl' href=""><FaTiktok className='inline px-2 text-5xl' />TikTok</a>
                        </li>
                    </a>
                    <a href='https://youtube.com/@skylabsunsw' target='_blank'>
                        <li
                        class="w-full p-4 hover:rounded-xl hover:bg-slate-200">
                        <a className='text-2xl' href=""><FaYoutube className='inline px-2 text-5xl' />YouTube</a>
                        </li>
                    </a>
                    <a href='https://www.challeng.unsw.edu.au/challeng-projects/aiaa-design-build-fly' target='_blank'>
                        <li
                        class="w-full p-4 hover:rounded-xl hover:bg-slate-200">
                        <a className='text-2xl' href=""><FaUniversity className='inline px-2 text-5xl' />ChallENG</a>
                        </li>
                    </a>
                    <a href='https://linktr.ee/dbfunsw' target='_blank'>
                        <li
                        class="w-full p-4 hover:rounded-xl hover:bg-slate-200">
                        <a className='text-2xl' href=""><FaTree className='inline px-2 text-5xl' />Linktree</a>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
        </>
    )
}

export default SocialMedia