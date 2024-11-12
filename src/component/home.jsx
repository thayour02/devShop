import { useEffect, useRef } from "react";
import Banner from "./banner";
import Service from "./service";
import Testimony from "./testimony.jsx";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Home() {
    const bannerRef = useRef(null);
    const serviceRef = useRef(null);
    const testimonialsRef = useRef(null);

    const bannerInView = useInView(bannerRef, { once: true });
    const serviceInView = useInView(serviceRef, { once: true });
    const testimonialsInView = useInView(testimonialsRef, { once: true });

    const bannerControl = useAnimation();
    const serviceControl = useAnimation();
    const testimonialsControl = useAnimation();

    useEffect(() => {
        if (bannerInView) bannerControl.start("visible");
    }, [bannerControl, bannerInView]);

   

    useEffect(() => {
        if (serviceInView) serviceControl.start("visible");
    }, [serviceControl, serviceInView]);



    useEffect(() => {
        if (testimonialsInView) testimonialsControl.start("visible");
    }, [testimonialsControl, testimonialsInView]);

    const variants = {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
    };
    
    const tvariants = {
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div style={{ position: "relative", overflow: "hidden" }}>
            <motion.div
                ref={bannerRef}
                variants={variants}
                initial="hidden"
                animate={bannerControl}
                transition={{ duration: 0.8, delay: 0.35, type: 'tween', stiffness: 100 }}
            >
                <Banner />
            </motion.div>
            <motion.div
                 ref={serviceRef}
                variants={variants}
               initial="hidden"
               animate={serviceControl}
                transition={{ duration: 0.5, delay: 0.25, type: 'tween', stiffness: 100 }}
            >
                <Service />
            </motion.div> 
             <motion.div
                ref={testimonialsRef}
                variants={tvariants}
                initial="hidden"
                animate={testimonialsControl}
                transition={{ duration: 0.5, delay: 0.25, type: 'tween', stiffness: 100 }}
            >
                <Testimony />
            </motion.div> 
        </div>
    );
}
