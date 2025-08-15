import Header from "../../components/header/header.jsx";
import "../home/index.css";
import ImageGrid from "../../components/scrollable-image-grid/image-grid.jsx";
import Footer from "../../components/footer/footer.jsx";
import ImageCarousel from "../../components/image-carousel/imageCarousel.jsx";
import ContactUsComponent from "../../components/contact/contact-us.jsx";


function Home() {
    return (
        <>
        <div className="container">
            <section className="header">
                <Header />
            </section>
            <section className="about">
                <div className="section-container">
                    <div className="section-header">
                        <h2 class="display-5">About</h2>
                    </div>
                </div>
            </section>
            <section className="vendors">
                <div className="section-container">
                    <div className="section-header">
                        <h2 class="display-5">Vendors</h2>
                    </div>
                    <ImageGrid />
                    <div className="btn-container">
                        <button type="button" className="btn btn-secondary">Vendor Application</button>
                    </div>
                </div>
            </section>
            <section className="entertainment">
                <div className="section-container">
                    <div className="section-header">
                        <h2 class="display-5">Entertainment</h2>
                    </div>
                    <ImageCarousel />
                </div>
            </section>
            <section className="venue">
                <div className="section-container">
                    <div className="section-header">
                        <h2 class="display-5">Venue</h2>
                    </div>
                    <ImageGrid />
                </div>
            </section>
            <section className="contact">
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