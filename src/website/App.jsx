import Home from "./Home";
import Form from "./Form";
import Navbar from "./Navbar";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';
import {Route , Routes} from 'react-router-dom';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
function App(){

    useGSAP(()=>{
        const tl = gsap.timeline();
        gsap.from("#my-name" , {
            
            delay : 1,
            duration : .8,
            opacity : 0
        })

        tl.from(".my-img-1" , {
            scale : 0,
            delay : 1,
            duration : .4
        })

        tl.to(".my-img-1" , {
            scale : .9,
            repeat : -1,
            yoyo : true,
            duration : .8
        })


    });
    return(
        <>
            <Navbar/>
            <Routes>
                <Route exact path="/react-1" element={<Home/>}/>
                <Route exact path="/react-1/form" element={<Form/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </>
    );
};
export default App;