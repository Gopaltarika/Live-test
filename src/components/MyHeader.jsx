import React from 'react'
import stocks from "../assets/images/svg/stocks.svg";
import revolution from "../assets/images/svg/revolution.svg";
import technological from "../assets/images/svg/technological.svg";
import intelligence from "../assets/images/svg/intelligence.svg";
import ellipis1 from "../assets/images/svg/ellipis1.svg";
import ellipis2 from "../assets/images/svg/ellipis3.svg";
import ellipis3 from "../assets/images/svg/ellipis2.svg";
import HeaderCard from './HeaderCard';
const MyHeader = () => {
  const cards = [
    {
      id: 1,
      imgs: stocks,
      heading: `Artificial <br/> Intelligence Stocks`,
    },
    {
      id: 2,
      imgs: revolution,
      heading: "AI Revolution!",
    },
    {
      id: 3,
      imgs: technological,
      heading: "Technological Breakthroughs",
    },
    {
      id: 4,
      imgs: intelligence,
      heading:`Artificial <br/> Intelligence`,
    },
  ]
  return (
    <div className='pt-191 position-relative'>
      <img className='position-absolute ellipis1 end-0' src={ellipis1} alt="ellipis" />
      <img className='position-absolute ellipis3 start-0' src={ellipis2} alt="ellipis" />
      <img className='position-absolute ellipis2 start-0' src={ellipis3} alt="ellipis" />
      <div className="container">
        <h1 className='text-white ff-OpenSans fw-light text-center fs-xl lh-xl m-0' data-aos="zoom-in">How to Benefit By Investing In <br className='d-md-block d-none' /> AI Stocks For <span className='c-light-green'>High Returns</span></h1>
        <p className='text-center text-white opacity-75 ff-OpenSans fw-normal lh-lg-custom fs-md m-0 pt-17' data-aos="zoom-in">As per our research and data evaluation from experts, the <br className='d-md-block d-none' /> price of these AI Stocks will rise over time. Today's <br className='d-md-block d-none' /> Investment can give a return of more than 130.66% in 2024.</p>
        <div className="row pt-64">
          {cards.map((k) => <HeaderCard key={k.id} Image={k.imgs} heading={k.heading} />)}
        </div>
      </div>
    </div>
  )
}

export default MyHeader
