import React from 'react';

const CarouselDetails = ({testiMonialDetail}) => {
    const {name, customer, description, img} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <>
        <div class="item single-client white-bg">
        <img class="img-circle" src={img} />
            <div class="client-info d-inline-block d-sm-flex justify-content-between">
                <div class="info">
                    <h6>{name}</h6>
                    <span>{customer}</span>
                </div>
                <div class="star">
                    <ul>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                    </ul>
                </div>
            </div>
            <p>{description}</p>
        </div>
        </>
    );
};

export default CarouselDetails;