import React from 'react'
import StatisticsCard from './StatisticsCard'

const Statistics = () => {
    const cards = [
        {
            id: 1,
            count: '01',
            heading: 'Places left to register',
        },
        {
            id: 2,
            count: '135',
            heading: 'Average Registrations per day',
        },
        {
            id: 3,
            count: '5X',
            heading: 'The Average Earnings Increase',
        },
    ]
    return (
        <div className='mt-289 pb-319'>
            <div className="container">
                <h2 className='me-1 m-0 text-white fw-light fs-lg text-center ff-OpenSans'>Statistics For Today</h2>
                <div className="row pt-98">
                    {cards.map((g) => <StatisticsCard key={g.id} head={g.heading} count={g.count} />)}
                </div>
            </div>
        </div>
    )
}

export default Statistics
