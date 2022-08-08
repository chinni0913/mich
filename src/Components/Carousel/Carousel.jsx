import React from 'react';
import Client1 from '../../images/client-1.png';
import Client2 from '../../images/client-2.png';
import Client3 from '../../images/client-3.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import CarouselDetails from './CarouselDetails'

const Carousel = () => {

    const carousel = [
        {
            name: 'Louis Prewitt',
            description: 'Reached the design gm away, on write stopped are weather. Approached will we legs the designers, have conduct recommended. laid poeople of smaller',
            customer: 'Envato Customer',
            img: Client2
        },
        {
            name: 'Andrew Hillard',
            description: 'Reached the design gm away, on write stopped are weather. Approached will we legs the designers, have conduct recommended. laid poeople of smaller',
            customer: 'Envato Customer',
            img: Client3
        },
        {
            name: 'Louis Prewitt',
            description: 'Reached the design gm away, on write stopped are weather. Approached will we legs the designers, have conduct recommended. laid poeople of smaller',
            customer: 'Envato Customer',
            img: Client2
        },
        {
            name: 'Anie Gomez',
            description: 'Reached the design gm away, on write stopped are weather. Approached will we legs the designers, have conduct recommended. laid poeople of smaller',
            customer: 'Envato Customer',
            img: Client1
        },
    ]

        //Owl Carousel Settings
        const options = {
            loop: true,
            center: true,
            items: 3,
            margin: 0,
            autoplay: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        };

    return (
        <section id="testimonial" className="carousel client-area pt-50 pb-70">
        <div className="container mt-5 pt-5">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="section-title">
                        <h3 className="title">my client’s saying</h3>
                        <p>Far any name to and can go yet seven pattern. The client wanted big could part. Answering has turn of on feedback of evils and all careful like is wasn't to their wanting, </p>
                    </div>
                </div>
            </div>
            <div className="row" id='testimonial-row2'>
                <div className="col-md-12">
                    <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                        {
                            carousel.length === 0 ?
                            <div className="item single-client white-bg">
                                <img className="img-circle" src={Client1} alt="" />
                                    <div className="client-info d-inline-block d-sm-flex justify-content-between">
                                        <div className="info">
                                            <h6>Rajon Rony</h6>
                                            <span>ITALY</span>
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
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </div> :
                                
                                carousel.map(testiMonialDetail => {
                                    return (
                                        <CarouselDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />
                                    )
                                })
                        }
                    </OwlCarousel>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Carousel
