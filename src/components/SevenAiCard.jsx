import React from 'react'

const SevenAiCard = (props) => {
    return (
        <div className={`${props.col} d-flex`} data-aos="fade-down">
            <div className={`card-sevenAi w-100 bg-card-gradient d-flex justify-content-center align-items-center ${props.maxWidth}`}>
                {props.Images && <img src={props.Images} alt="Logo-Images" width={props.size} height={props.height} />}
              <div className='d-flex flex-column gap-14'>
                  {props.heading &&  <h5 className='text-white ff-OpenSans fw-bold fs-lg lh-2lg m-0'>{props.heading}</h5>}
                  {props.para &&  <p className='m-0 text-white opacity-80 ff-OpenSans fw-normal fs-sm'>{props.para}</p>}
              </div>
            </div>
        </div>
    )
}

export default SevenAiCard
