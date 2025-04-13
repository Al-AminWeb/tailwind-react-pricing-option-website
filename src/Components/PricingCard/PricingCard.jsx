import React from 'react';
import PricingFeature from "./PricingFeature.jsx";

const PricingCard = ({pricing}) => {
    const {title, price, info, features} = pricing;
    return (<div className='border bg-sky-600 rounded-lg p-4'>
        {/*Card header*/}
        <div>
            <h1 className="text-4xl">
                {title}
            </h1>
            <h4 className="text-3xl">
                {price}
            </h4>
        </div>
        {/*    card-body */}
        <div className='bg-amber-400 p-4 mt-10 rounded-2xl '>
            <p>{info}</p>
            {features.map((feature, index) => <PricingFeature
                key={index}
                feature={feature}></PricingFeature>)}
        </div>
        <button className="btn w-full mt-4">Buy Now</button>
    </div>);
};

export default PricingCard;
