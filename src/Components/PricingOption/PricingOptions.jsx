import React, {use} from 'react';
import PricingCard from "../PricingCard/PricingCard.jsx";
import DaisyPricingCard from "../DaisyPricingCard/DaisyPricingCard.jsx";

const PricingOption = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    console.log(pricingData);
    return (

        <div>
            <h2 className="text-5xl">Get Our MemberShip</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {/*{*/}
                {/*    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing} ></PricingCard>)*/}
                {/*}*/}

                {pricingData.map(pricing => <DaisyPricingCard key={pricing.id} pricing={pricing}></DaisyPricingCard>)
                }
            </div>

        </div>
    );
};

export default PricingOption;
