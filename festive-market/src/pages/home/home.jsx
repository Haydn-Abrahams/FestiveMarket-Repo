import Header from "../../components/header/header.jsx";
import "../home/index.css";
import ImageGrid from "../../components/scrollable-image-grid/image-grid.jsx";
import Footer from "../../components/footer/footer.jsx";
import ImageCarousel from "../../components/image-carousel/imageCarousel.jsx";
import ContactUsComponent from "../../components/contact/contact-us.jsx";


function Home() {

    const vendors = [
        {
          name: "Vendor 1",
          description: "This is vendor 1",
          image: "/images/vendor1.png",
        },
        {
          name: "Vendor 2",
          description: "This is vendor 2",
          image: "/images/vendor2.png",
        },
        {
          name: "Vendor 3",
          description: "This is vendor 3",
          image: "/images/vendor3.png",
        },
        {
          name: "Vendor 4",
          description: "This is vendor 4",
          image: "/images/vendor4.png",
        },
        {
          name: "Vendor 5",
          description: "This is vendor 5",
          image: "/images/vendor5.png",
        },
      ];
      const venues = [
        {
          name: "",
          description: "",
          image: "/images/venue1.png",
        },
        {
          name: "",
          description: "",
          image: "/images/venue2.png",
        },
        {
          name: "",
          description: "",
          image: "/images/venue3.png",
        },
        {
          name: "",
          description: "",
          image: "/images/venue4.png",
        },
        {
          name: "",
          description: "",
          image: "/images/venue5.png",
        },
      ];

    return (
        <>
        <div className="container">
            <section className="header">
                <Header />
            </section>
            <section className="about" id="about-section">
                <div className="section-container">
                    <div className="section-header">
                        <h2 class="display-5">About</h2>
                    </div>
                </div>
            </section>
            <section className="vendors" id="vendors-section">
                <div className="section-container">
                    <div className="section-header">
                        <h2 class="display-5">Vendors</h2>
                    </div>
                    <ImageGrid items={vendors} />
                    <div className="btn-container">
                        <button type="button" className="btn btn-secondary">Vendor Application</button>
                    </div>
                </div>
            </section>
            <section className="entertainment" id="entertainment-section">
                <div className="section-container">
                    <div className="section-header">
                        <h2 class="display-5">Entertainment</h2>
                    </div>
                    <ImageCarousel />
                </div>
            </section>
            <section className="venue" id="venue-section">
                <div className="section-container">
                    <div className="section-header">
                        <h2 class="display-5">Venue</h2>
                    </div>
                    <ImageGrid items={venues}/>
                </div>
            </section>
            <section className="contact" id="contact-section">
                <div className="section-container">
                    <div className="section-header">
                        <h2 class="display-5">Contact</h2>
                    </div>
                    <ContactUsComponent />
                </div>
            </section>
            <section className="footer">
                <Footer />
            </section>
        </div>
        </>
    );
}

export default Home;