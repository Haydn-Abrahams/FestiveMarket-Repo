import "bootstrap/dist/css/bootstrap.min.css";
import bannerTemplate from "../../assets/banner-image-template.svg";
import bannerTemplate2 from "../../assets/banner-image-template-2.svg";
import bannerTemplate3 from "../../assets/banner-image-template-3.svg";
function ImageCarousel() {
    return (
        <div>
            <div id="imageCarousel" className="carousel slide" data-ride="carousel" data-pause="hover">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={bannerTemplate} alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={bannerTemplate2} alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={bannerTemplate3} alt="Slide 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}   
export default ImageCarousel;