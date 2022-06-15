import * as React from "react"
import Marquee from "react-fast-marquee";

import img1 from "../images/logos/acoustic.png"
import img2 from "../images/logos/amb.png"
import img3 from "../images/logos/amw.png"
import img4 from "../images/logos/avante.png"
import img5 from "../images/logos/wojcik.png"
// import img6 from "../images/logos/elkop.png"
import img7 from "../images/logos/elstar.svg"
import img8 from "../images/logos/eurotter.png"
import img9 from "../images/logos/falkon.png"
import img10 from "../images/logos/kram.png"
import img11 from "../images/logos/metalzbyt.png"
import img12 from "../images/logos/pieco.png"
import img13 from "../images/logos/proxmus.png"
import img14 from "../images/logos/przembud.png"
import img15 from "../images/logos/broker.png"
import img16 from "../images/logos/zamel.png"


const CompaniesSlider = () => {
    const images = [
        { src: img1, alt: 'Acoustic' },
        { src: img2, alt: 'AMB' },
        { src: img3, alt: 'AMW' },
        { src: img4, alt: 'Avante' },
        { src: img5, alt: 'Wojcik' },
        // { src: img6, alt: 'AMB' },
        { src: img7, alt: 'Elstar' },
        { src: img8, alt: 'Eurotter'  },
        { src: img9, alt: 'Falkon' },
        { src: img10, alt: 'Kram' },
        { src: img11, alt: 'Metalzbyt' },
        { src: img12, alt: 'Pieco' },
        { src: img13, alt: 'Proxmus' },
        { src: img14, alt: 'Przembud' },
        { src: img15, alt: 'Broker' },
        { src: img16, alt: 'Zamel' },
    ];
    return(
        <Marquee pauseOnHover={true} reverse={true} className="image-slider">
            {images.map(function(imageProps) {
                return (
                    <img key={ imageProps.src } height={60} src={ imageProps.src } alt={ imageProps.alt } />
                );
            })}
        </Marquee>
    )
}

export default CompaniesSlider
