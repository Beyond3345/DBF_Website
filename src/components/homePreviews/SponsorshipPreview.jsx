import { Link } from "react-router-dom"
import CurrentSponsors from "../CurrentSponsors"

function SponsorshipPreview() {
    return (
        <>
        <div className='flex flex-col py-10 items-center bg-white'>
            <div className='px-8'>
                <h1 className="text-5xl font-bold text-center">Sponsor Us</h1>
            </div>
            <div className='pt-10 px-12 max-w-[747px]'>
                <p>
                    As a sponsor, you will be supporting and connecting with a community of students from Australia's highest ranking engineering faculty.
                </p>
                <br></br>
                <p>
                    Through sponsorship, you could see your brand on:
                </p>
                <ul class="list-disc list-inside">
                    <li>Our aircraft</li>
                    <li>Student merchandise (worn by members around campus)</li>
                    <li>Our LinkedIn, Instagram, and Facebook pages</li>
                </ul>
            </div>
            <Link to='sponsorus'>
            <div className='pt-8'>
                <button className="btn btn-outline">Sponsor Us</button>
            </div>
            </Link>
        </div>
        <CurrentSponsors />
        </>
    )
}

export default SponsorshipPreview