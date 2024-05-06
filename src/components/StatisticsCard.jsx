import React from 'react'

const StatisticsCard = (props) => {
    return (
        <div className='col-lg-4 mt-lg-0 mt-3 col-sm-6 d-flex justify-content-center flex-column align-items-center'>
            <div className="count-box w-100 d-flex justify-content-center bg-card-gradient align-items-center">
                <span className='fs-xxl lh-xxl count ff-roboto fw-bold'>{props.count}</span>
            </div>
            <h5 className='m-0 text-white ff-OpenSans fw-semibold text-center fs-md lh-sm pt-38 text-nowrap'>{props.head}</h5>
        </div>
    )
}

export default StatisticsCard
