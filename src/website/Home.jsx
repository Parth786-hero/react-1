import Img from '../images/img74.svg';
import { NavLink } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <div className="container">
                <section className="header d-flex align-items-center">
                    <div className="row">
                        <div className="col-12 head-box col-md-6 col-xl-6 temp-1 d-flex flex-column justify-content-center order-2 order-lg-1 px-4">
                            <h1 className="fw-bolder fs-1 lh-base lg-heading">React : Famous and Powerful <span>UI Library</span> for frontend</h1>
                            <h4 className="fw-bolder mt-3">I am full stack web <span>developer</span></h4>
                            <p className="sm-text fw-light desc my-3">A Full Stack Web Developer is skilled in both front-end and back-end development, capable of building complete web applications. They work with languages like HTML, CSS, JavaScript, and frameworks like React or Angular, as well as server-side technologies like Node.js, databases, and APIs to create seamless user experiences.</p>
                            <div className="btns d-flex gap-5 mb-5">
                                <NavLink to="/react-1/form">
                                    <button type="button" className="btn fw-normal btn-primary text-capitalize">contact us</button>
                                </NavLink>
                                <NavLink to="/react-1/weather">
                                    <button type="button" className="btn fw-normal btn-primary text-capitalize">Check Weather</button>
                                </NavLink>

                            </div>
                        </div>
                        <div className="col-12 head-img-box col-md-6 col-xl-6 temp-2 text-end order-1 order-lg-2">
                            <img src={Img} className="img-fluid my-img-1" alt="later on" />
                        </div>
                    </div>
                </section>

                <div className="para">
                    <h1 className='fw-normal fs-1 mb-5 px-3 px-lg-0'>We deliver top notch SaaS .Every <span className='fw-bolder'>company needs</span> content marketing to grow organically—and this also holds true for brands offering <span className='fw-bolder'>SaaS</span> products. The SaaS and <span className='fw-bolder'>tech sectors</span> are unique in their nature.</h1>
                </div>
            </div>

            <div className="animated-text mb-4">
                <h1 className='fw-bold lg-text'>Web Developers are the <span className="text-style fw-lighter">fantastic species</span> on Earth .</h1>
                <h1 className='fw-bold lg-text'>Web Developers are the <span className="text-style fw-lighter">fantastic species</span> on Earth .</h1>
                {/* <h1 className='fs-1 fw-lighter lg-text'>Web Developer are the <span className="text-style fw-normal">fantastic species</span> on Earth .</h1> */}
            </div>


            {/* <div className="row my-box p-3 my-5">
                    <div className="col-5 col-lg-12 col-md-12 col-xl-12 mx-auto">
                        <h1 className="fw-lighter fs-4 text-justify">This website is designed just to focus on my concept so that later in future I can build more advanced and good projects Here in this project I am just focusing on the basic concept of React Js and making my fundamentals very strong .And yes In future I will definitely design more advance project , for sure .</h1>
                    </div>
                </div> */}

            <div className="container mb-3">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-11 my-box mx-auto my-3">
                        <h1 className="fw-lighter fs-4 text-justify p-3">This website is designed just to focus on my concept so that later in future I can build more advanced and good projects Here in this project I am just focusing on the basic concept of React Js and making my fundamentals very strong .And yes In future I will definitely design more advance project , for sure .</h1>
                    </div>
                </div>
            </div>

            {/* <p>Lorem ipsum dolor sit amet.</p> */}
        </>
    );
}
export default Home;