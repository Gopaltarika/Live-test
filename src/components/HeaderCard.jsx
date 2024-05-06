import React from 'react'

const HeaderCard = (props) => {
    return (
        <div className="col-3">
            <div className="card-body bg-card-gradient w-100 d-flex flex-column align-items-center justify-content-center gap-32">
                <img src={props.Image} alt="images" />
                <h5 dangerouslySetInnerHTML={{__html:props.heading}} className='m-0 ff-OpenSans fw-bold fs-md lh-md text-center text-white'></h5>
            </div>
        </div>
    )
}

export default HeaderCard
