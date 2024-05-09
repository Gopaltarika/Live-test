import React from 'react'
import nvidia from "../assets/images/webp/Nvidia_logo.webp";
import bing from "../assets/images/webp/bing-logo.webp";
import aws from "../assets/images/webp/aws-logo.webp";
import palantir from "../assets/images/webp/palantir-logo.webp";
import crowd from "../assets/images/webp/CrowdStrike_logo.webp";
import uipath from "../assets/images/webp/UiPath_logo.webp";
import arista from "../assets/images/webp/arista-logo.webp";
import ellipis4 from "../assets/images/svg/ellipis4.svg";
import ellipis5 from "../assets/images/svg/ellipis5.svg";
import ellipis6 from "../assets/images/svg/ellipis6.svg";
import SevenAiCard from './SevenAiCard';
const SevenAi = () => {
    const cards = [
        {
            id: 1,
            width: 'col-lg-4 pt-63',
            imgs: nvidia,
            size: '186',
            height: '137',
        },
        {
            id: 2,
            width: 'col-lg-8 justify-content-end pt-63',
            max: 'max-w-697',
            head: 'Nvidia - AI GPU 1 year 228% Growth ',
            para: 'NVIDIA Corporation, a powerhouse in GPU technology and AI innovation, offers investors compelling opportunities. With dominance in gaming and data center markets, NVIDIA stands poised for growth. Diversification efforts into AI, autonomous vehicles, and strategic acquisitions further bolster its potential. As a leader in technology and with a strong financial track record, NVIDIA remains a top choice for savvy investors.'
        },
        {
            id: 3,
            width: 'col-lg-8  pt-63',
            max: 'max-w-697',
            head: 'Microsoft - Co-pilot 1 year 64% Growt ',
            para: 'Microsoft A tech giant with diverse solutions for investors, including Azure cloud services. With market dominance in software, cloud, and hardware, Microsoft shows strong growth potential. Its leadership in enterprise software, Azure cloud computing, and innovation make it an attractive investment.'
        },
        {
            id: 4,
            width: 'col-lg-4 pt-63',
            size: '177.78',
            height: '177.78',
            imgs: bing,
        },
        {
            id: 5,
            width: 'col-lg-4 pt-63 ',
            imgs: aws,
            size: '183',
            height: '109',
        },
        {
            id: 6,
            width: 'col-lg-8  justify-content-end pt-63',
            max: 'max-w-697',
            head: 'Amazon AWS - AI 1 year 69% Growth',
            para: 'Amazon A tech juggernaut with AWS cloud services, offering diverse solutions for investors. With market leadership in cloud computing, e-commerce, and more, Amazon shows strong growth potential. Its dominance in AWS cloud services, e-commerce, and innovation make it an attractive investment. Backed by technological prowess, Amazon remains a top choice for investors'
        },
        {
            id: 7,
            width: 'col-lg-8  pt-79',
            max: 'max-w-697',
            head: 'Palantir - AI Analytics 1 year 157% Growth',
            para: 'Palantir Technologies, a leading data analytics company, revolutionizes decision-making with its powerful software platforms. With a track record of serving government agencies and commercial enterprises, Palantir"s innovative solutions and market dominance make it a top choice for investors seeking growth and technological prowess in the AI stock market.',
        },
        {
            id: 8,
            width: 'col-lg-4  pt-79',
            imgs: palantir,
            size: '295',
            height: '73',
        },
        {
            id: 9,
            width: 'col-lg-4  pt-63',
            imgs: crowd,
            size: '261',
            height: '81.95',
        },
        {
            id: 10,
            width: 'col-lg-8 justify-content-end pt-63',
            max: 'max-w-697',
            head: 'Crowd strike - Cyber 1 year 156% Growth  ',
            para: 'CrowdStrike Shaping the Future of Cybersecurity with Advanced AI Solutions. As a trailblazer in threat detection and response, CrowdStrike integrates AI-driven capabilities to fortify defenses against evolving cyber threats. With its innovative technology portfolio, including machine learning and behavioral analytics, CrowdStrike stands as a formidable force in the AI stock market, offering investors unparalleled growth potential and technological excellence.'
        },
        {
            id: 11,
            width: 'col-lg-8 pt-79',
            max: 'max-w-697',
            head:'UI Path - Robotic Automations 1 year 82% Growth ',
            para:'UiPath Powering Automation with Intelligent AI Solutions. As a leader in robotic process automation (RPA), UiPath leverages cutting-edge AI technologies to streamline business processes and drive efficiency. With its innovative AI-driven platform and market dominance, UiPath presents a compelling investment opportunity for investors seeking growth and innovation in the AI stock sector',
        },
        {
            id: 12,
            width: 'col-lg-4 pt-79',
            imgs: uipath,
            size: '261.95',
            height: '92.95',
        },
        {
            id: 13,
            width: 'col-lg-4 pt-79',
            imgs: arista,
            size: '286.27',
            height: '45.65',
        },
        {
            id: 14,
            width: 'col-lg-8 justify-content-end pt-79',
            max: 'max-w-697',
            head: 'Arista Networks - AI Cloud Computing 1 year 111% Growth',
            para: 'Arista Networks: Transforming Networking with AI-Driven Solutions. Leading the charge in cloud networking, Arista harnesses the power of AI to deliver high-performance, scalable solutions. With its innovative AI-driven approach and industry-leading technology, Arista Networks offers investors a prime opportunity to capitalize on the evolution of networking in the AI stock market.'
        },
    ]
    return (
        <div className='mt-167 position-relative'>
            <img className='position-absolute end-0 ellipis4' src={ellipis4} alt="ellipis" />
            <img className='position-absolute start-0 ellipis5' src={ellipis5} alt="ellipis" />
            <img className='position-absolute end-0 ellipis6' src={ellipis6} alt="ellipis" />
            <div className="container position-relative z-1">
                <div className="d-flex align-items-center justify-content-center gap-5">
                    <svg className='me-2' width="291" height="6" viewBox="0 0 291 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M285.333 3.00002C285.333 1.52727 286.527 0.333358 288 0.333358C289.473 0.333359 290.667 1.52727 290.667 3.00003C290.667 4.47278 289.473 5.66669 288 5.66669C286.527 5.66669 285.333 4.47278 285.333 3.00002ZM4.37114e-08 2.5L288 2.50003L288 3.50003L-4.37114e-08 3.5L4.37114e-08 2.5Z" fill="#228B22" />
                    </svg>
                    <h2 className='me-1 m-0 text-white fw-light fs-xl text-nowrap text-center ff-OpenSans'>Top <span className='c-light-green'>seven AI</span> Sock</h2>
                    <svg width="291" height="6" viewBox="0 0 291 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.66666 3.00002C5.66666 1.52727 4.47275 0.333358 3 0.333358C1.52725 0.333359 0.333343 1.52727 0.333344 3.00003C0.333344 4.47278 1.52725 5.66669 3 5.66669C4.47275 5.66669 5.66666 4.47278 5.66666 3.00002ZM291 2.5L3 2.50003L3 3.50003L291 3.5L291 2.5Z" fill="#228B22" />
                    </svg>
                </div>
                <div className="mt-34">
                    <div className="row justify-content-between">
                        {cards.map((p) => <SevenAiCard key={p.id} col={p.width} maxWidth={p.max} Images={p.imgs} size={p.size} height={p.height} para={p.para} heading={p.head} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SevenAi