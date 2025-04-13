
import './App.css'
import Navbar from "./Components/Navbar/Navbar.jsx";
import {Suspense} from "react";
import loading from "daisyui/components/loading/index.js";
import PricingOption from "./Components/PricingOption/PricingOptions.jsx";

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
    </>
  )
}

export default App
