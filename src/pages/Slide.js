import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Slide = ({ movie, coverImg, setOn, movieList }) => {

    const [slideOn, setSlideOn] = useState(false)

    const s = useRef(null);



    const test = () => {
        if (movieList < 6) {
            setSlideOn(true)
        }


    }

    useEffect(() => {
        test()
    }, [])

    const num = () => {
        Math.floor(Math.random() * 10 + 0)
    }



    const mainSlideOption = {
        slidesToShow: 6,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        cssEase: "linear",

    }


    return (
        <>
            <div className={`mainSlide ${slideOn ? 'on' : ''}`}>
                <div className={`inner ${movie && 'on' || ''}`}>
                    <Slider {...mainSlideOption} className="main_slide" ref={s} >
                        {
                            movie &&
                            movie.map((it, idx) => {
                                return (
                                    <div className={`itm itm0${idx + 1}`} key={it.id}>
                                        <Link to={`/detail/${it.id}`} onClick={() => { setOn(true) }}>
                                            <figure>
                                                <img src={it.medium_cover_image} alt={it.title} onError={coverImg} />
                                            </figure>
                                            <h3>{it.title}</h3>
                                            <p>{it.description_full.substr(0, 60)}</p>
                                            {/* substr 문자 자르기 */}
                                        </Link>
                                    </div>
                                )
                            }).slice(num, 49)
                        }
                    </Slider>
                    {/* <div className="arrows">
                        <BsChevronLeft className="left" onClick={() => { console.log(s.current.slickPrev()) }} />
                        <BsChevronRight className="right" onClick={() => { console.log(s.current.slickNext()) }} />
                    </div> */}
                </div>
            </div>
        </>

    )
}

export default Slide