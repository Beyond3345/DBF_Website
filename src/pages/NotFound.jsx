import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'
import TrackViews from '../components/TrackViews'

function NotFound() {
    return (
      <>
        <TrackViews />
        <PageHeader title='Oopsie Daisy' />
        <div className='flex flex-col py-10 items-center bg-base-100'>
            <div className='px-8'>
                <h1 className="text-5xl font-bold text-center">Page Not Found</h1>
            </div>
            <div className='pt-10 px-12 max-w-[747px] text-center'>
                <p>
                    Seems like you are lost. There isn't a page with the path '{window.location.pathname}'.
                </p>
            </div>    
            <Link to='/'>
                <div className='pt-8'>
                    <button className="btn">Home</button>
                </div>
            </Link>
        </div>
      </>
    )
  }
  
  export default NotFound