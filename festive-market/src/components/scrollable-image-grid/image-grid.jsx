import "./index.css";
// import grid1 from "../../assets/grid-image-template.svg";

function ImageGrid({ items }) {
    return (
        <div>
            <div className="row">
                {items.map((item, index) => (
                <div className="col" key={index}>
                    <div className="content-container">
                        <div className="image-container">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="info-container"> 
                            <h7>{item.name}</h7>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default ImageGrid;