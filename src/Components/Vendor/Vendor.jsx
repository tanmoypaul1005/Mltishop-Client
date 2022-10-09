import React from 'react';
import { ivendor1, ivendor2, ivendor3, ivendor4, ivendor5, ivendor6, ivendor7, ivendor8 } from '../../Utility/Sources';

const Vendor = () => {
    return (
        <div class="container-fluid py-5">
        <div class="row px-xl-5">
            <div class="col">
                <div class="owl-carousel vendor-carousel">
                    <div class="bg-light p-4">
                        <img src={ivendor1} alt=""/>
                    </div>
                    <div className="bg-light p-4">
                        <img src={ivendor2} alt=""/>
                    </div>
                    <div className="bg-light p-4">
                        <img src={ivendor3} alt=""/>
                    </div>
                    <div className="bg-light p-4">
                        <img src={ivendor4} alt=""/>
                    </div>
                    <div className="bg-light p-4">
                        <img src={ivendor5} alt=""/>
                    </div>
                    <div className="bg-light p-4">
                        <img src={ivendor6} alt=""/>
                    </div>
                    <div className="bg-light p-4">
                        <img src={ivendor7} alt=""/>
                    </div>
                    <div className="bg-light p-4">
                        <img src={ivendor8} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Vendor;