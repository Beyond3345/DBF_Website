import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'
import TrackViews from '../components/TrackViews';

export default function About() {
    return (
      <>
        <TrackViews />
        <PageHeader title='About Us' />

        <div className='flex flex-col py-10 items-center bg-base-100'>

            <div className='px-12 max-w-[747px]'>
                <p>
                Since 2018, a team of UNSW students have competed in the AIAA Design Build Fly competition, 
                held annually in America. In 2022, our society was officially established. Whilst we continue 
                to compete in the competition of our namesake, we now comprise of additional projects focused on:
                </p>
                <ul class="list-disc list-inside">
                    <li>Autonomous aerial medical delivery.</li>
                    <li>FPV (first person view) drone racing.</li>
                    <li>Research and development.</li>
                </ul>
                <p>
                    And as a relatively young society, we are continually looking to expand into new areas.
                </p>
                <br></br>
                <h1 className='text-xl font-bold pb-2'>Leadership</h1>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th><a className='text-indigo-800'>Project Manager (PM)</a></th>
                                <th><a className='text-red-600'>Technical Lead</a></th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>2019-2020</td>
                            <td>Alex Hirsch</td>
                            <td>Daniel Wong</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td>2020-2021</td>
                            <td>Daniel Sharp</td>
                            <td>Longkai Li</td>
                        </tr>
                        </tbody>
                    </table>
                    <br></br>
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th><a className='text-indigo-800'>President</a></th>
                                <th><a className='text-yellow-600'>Project Directors</a></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2021-2022</td>
                                <td>Longkai Li</td>
                                <td>Competition: Longkai Li</td>
                            </tr>
                            <tr>
                                <td>2022-2023</td>
                                <td>Jasjit Ghataure</td>
                                <td><p>Competition: Jasjit Ghataure</p><p>FPV: Talal Tariq</p></td>
                            </tr>
                            <tr>
                                <td>2023</td>
                                <td>Akash Lakshman</td>
                                <td><p>Competition: Phoebe Loughhead</p><p>FPV: Talal Tariq</p></td>
                            </tr>
                            <tr>
                                <td>2023-2024</td>
                                <td>Sam Trustrum</td>
                                <td><p>Starling: Phoebe Loughhead</p><p>Elevate: Akash Lakshman</p><p>FPV: Talal Tariq</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </>
    )
}