import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Team from '../Team/Team';

const Home = () => {
    const teamMembers = useLoaderData();
    console.log(teamMembers);
    return (
        <div className=''>
            <Banner></Banner>
            <div className='container w-5/6 md:w-full mx-auto my-5' >
                <h2 className='my-7 text-3xl font-bold text-center' >Our Team</h2>
                <div className='flex justify-between flex-wrap gap-2'>
                    {
                        teamMembers.map(member => <Team
                        key={member.id}
                        member={member}
                        ></Team>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;
