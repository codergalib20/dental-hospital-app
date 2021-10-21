import React from 'react';

const Banner = () => {
    const homeBannarSection = {
        background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(https://i.ibb.co/4RtxfYF/1366252.jpg) no-repeat center center`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        minHeight: '100vh'
    }
    return (
        <div className="d-flex mt-5 pt-5 align-items-center justify-content-center" style={homeBannarSection}>
            <div className=" px-4">
                <h1 className="display-4 fw-normal text-white">
                    We have qualified
                    <br />
                    dentists Surgeon
                </h1>
                <p className="h5 text-white py-4">
                    We provides always our best services for our clients and <br />  always try to achieve our client's trust and satisfaction.
                    always try to achieve our client's trust and satisfaction.
                </p>
                <button className="btn btn-success">Learn more <i class="fas fa-long-arrow-alt-right"></i> </button>
            </div>
        </div>
    );
};

export default Banner;
							