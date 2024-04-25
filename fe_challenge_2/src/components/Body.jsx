import { useState } from "react";
import Details from "./Details";
import Offer from "./Offer";

function Body() {
    const [mode, setMode] = useState('des');
    const setDes = () => {
        setMode('des')
    }
    const setMob = () => {
        setMode('mob')
    }
    return (
        <>
            <div>
                <button className={`btn btn-light ${mode == 'des' && "text-primary"}`} onClick={setDes}>Desktop View</button>
                <button className={`btn btn-light ${mode == 'mob' && "text-primary"}`} onClick={setMob}>Mobile View</button>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div id="body" className="bg-light" style={{ overflow: 'scroll', animationName: mode == 'des' ? 'body-mob-des' : 'body-des-mob', width: mode == 'des' ? '100%' : '400px', height: mode == 'des' ? 'auto' : '600px' }}>
                    <Offer />
                    <Details />
                </div>
            </div>
        </>
    );
}

export default Body;