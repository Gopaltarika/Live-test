import React from 'react'
import StatisticsCard from './StatisticsCard'
import ellipis7 from "../assets/images/svg/ellipis7.svg";
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
        <div className='mt-289 pb-319 position-relative'>
            <img className='position-absolute ellipis7 start-0' src={ellipis7} alt="ellipis" />
            <div className="container position-relative z-1">
                <h2 className='me-1 m-0 text-white fw-light fs-xl text-center ff-OpenSans'>Statistics For Today</h2>
                <div className="row pt-98 justify-content-center">
                    {cards.map((g) => <StatisticsCard key={g.id} head={g.heading} count={g.count} />)}
                </div>
            </div>
        </div>
    )
}

export default Statistics
