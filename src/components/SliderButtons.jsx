import { useSwiper } from "swiper/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
function SliderButtons() {
    const swiper = useSwiper();

    return (
        <>
            <button
                onClick={() => swiper.slidePrev()}
                className="nav-btn absolute left-0 top-[100px] z-20"
            >
                <FiArrowLeft />
            </button>

            <button
                onClick={() => swiper.slideNext()}
                className="nav-btn absolute right-0  top-[100px] z-20"
            >
                <FiArrowRight />
            </button>
        </>
    );
}
export default SliderButtons;