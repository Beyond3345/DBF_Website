import PageHeader from '../components/PageHeader'
import TrackViews from '../components/TrackViews';
import CurrentSponsors from '../components/CurrentSponsors'

export default function SponsorUs() {
    return (
      <>
        <TrackViews />
        <PageHeader title='Sponsor Us' />

        <div className='flex flex-col py-10 items-center bg-base-100'>
            <div className='px-12 max-w-[747px]'>
                {/*<div className=''>
                    <h1 className="text-5xl pb-8 px-8 font-bold text-center">Students Taking Flight With DBF</h1>
    </div>*/}
                <p>
                    If your organisation is interested in becoming a sponsor, please contact us at:
                </p>
                <p className='text-xl font-bold py-4 text-center underline text-orange-500'>
                    <a target="_blank" href="mailto: unswdbf@gmail.com">unswdbf@gmail.com</a>
                </p>
                <p>
                    As a sponsor, you will be supporting and connecting with a community of students from Australia's highest ranking engineering faculty.
                    Our membership also includes business, science, arts, and design students.
                </p>
                <p>
                    Additionally, your brand will gain exposure on society aircraft, merchandise and social media accounts.
                </p>
                <p>
                    The opportunity to be the subject of collaborative on-campus events is also negotiable.
                </p>
                <br></br>
                <h5 className='underline'>In-kind Sponsorship</h5>
                <p>
                    If you would prefer to support us through alternative means, the team highly values supplies 
                    and services such as material, tools, software, machinery, workshops and facilities. 
                </p>
                <p>
                    All monetary and in-kind sponsorships will be used to fund our competition and humanitarian projects 
                    to propel the society forward.
                </p>
            </div>
        </div>
        <CurrentSponsors />
      </>
    )
}