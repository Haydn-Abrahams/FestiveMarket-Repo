import "../contact/index.css";

function ContactUsComponent() {
    return (
        <div>
            <div className="row bg-light p-4 rounded shadow w-100">
                <div className="col-md-6 mb-3 mb-md-0">
                <iframe
                    title="MorganHoff Wine Estate"
                    src="https://maps.app.goo.gl/VzUyUBxjhV1ALVQ3A"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '10px' }}
                    allowFullScreen=""
                    loading="lazy"
                />
                </div>
                <div className="col-md-6">
                    <div className="form-container">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="3"></textarea>
                            </div>
                            <div className="form-btn-container">
                                <button type="submit" className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsComponent;
