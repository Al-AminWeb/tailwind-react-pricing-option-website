
import './App.css'
import Navbar from "./Components/Navbar/Navbar.jsx";
import {Suspense} from "react";

import PricingOption from "./Components/PricingOption/PricingOptions.jsx";
import ResultChart from "./Components/ResultChart/ResultChart.jsx";

const pricingPromise = fetch('pricingData.json')
.then(res => res.json())

function App() {


  return (
    <>
        <Navbar></Navbar>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>
        }>
            <PricingOption pricingPromise={pricingPromise} />
        </Suspense>
        <ResultChart></ResultChart>
    </>
  )
}

export default App
