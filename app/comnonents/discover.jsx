"use client"
import ImageSlider from "./swiper";

const Discover=()=>{
    return(
        <>
          <div className="title-bar gap-3 justify-center items-center hidden md:flex">
                <span className="title-slox"></span>
                <h2 className="page-heading text-black relative uppercase">discover</h2>
          </div>
          <ImageSlider/>
        </>
    )
}

export default Discover;