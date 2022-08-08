import React from 'react';

const CarouselDetails = ({testiMonialDetail}) => {
    const {name, customer, description, img} = testiMonialDetail;
    return (
        <>
        <div className="item single-client white-bg active">
        <img className="img-circle" src={img} alt="img"/>
            <div className="client-info d-inline-block d-sm-flex justify-content-between">
                <div className="info">
                    <h6>{name}</h6>
                    <span>{customer}</span>
                </div>
                <div className="star">
                    <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                    </ul>
                </div>
            </div>
            <p>{description}</p>
        </div>
        </>
    );
};

export default CarouselDetails;