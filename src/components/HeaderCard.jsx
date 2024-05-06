import React from 'react'

const HeaderCard = (props) => {
    return (
        <div className="col-lg-3 col-sm-6 mt-lg-0 mt-3" data-aos="flip-left">
            <div className="card-body bg-card-gradient w-100 d-flex flex-column align-items-center justify-content-center gap-32">
                <img src={props.Image} alt="images" />
                <h5 dangerouslySetInnerHTML={{__html:props.heading}} className='m-0 ff-OpenSans fw-bold fs-md lh-md text-center text-white'></h5>
            </div>
        </div>
    )
}

export default HeaderCard
