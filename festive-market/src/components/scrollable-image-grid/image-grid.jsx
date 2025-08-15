import "./index.css";
// import grid1 from "../../assets/grid-image-template.svg";

function ImageGrid() {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="content-container">
                        <div className="image-container">
                        </div>
                        <div className="info-container"> 
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="content-container">
                        <div className="image-container">

                        </div>
                        <div className="info-container">  
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="content-container">
                        <div className="image-container">

                        </div>
                        <div className="info-container">  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageGrid;