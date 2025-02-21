function Footer() {
    return (
        <footer className="bg-dark text-white py-5">
            <div className="container text-center text-md-start">
                <div className="row">
                    <div className="col-md-3">
                        <h5 className="fw-bold">About Us</h5>
                        <p className="small">Ecom Store is your go-to online shop for premium products at unbeatable prices. We are dedicated to quality and customer satisfaction.</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="fw-bold">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white text-decoration-none">About</a></li>
                            <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
                            <li><a href="/shop" className="text-white text-decoration-none">Shop</a></li>
                            <li><a href="/faq" className="text-white text-decoration-none">FAQ</a></li>
                            <li><a href="/terms" className="text-white text-decoration-none">Terms & Conditions</a></li>
                            <li><a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="fw-bold">Customer Support</h5>
                        <p className="small">Have questions? Need help with your order? Reach out to our 24/7 support team.</p>
                        <p className="small">Email: support@ecomstore.com</p>
                        <p className="small">Phone: +123 456 7890</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="fw-bold">Follow Us</h5>
                        <div className="d-flex gap-2">
                            <a href="/" className="text-white"><i className="bi bi-facebook"></i></a>
                            <a href="/" className="text-white"><i className="bi bi-twitter"></i></a>
                            <a href="/" className="text-white"><i className="bi bi-instagram"></i></a>
                            <a href="/" className="text-white"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4 border-top border-light pt-3">
                <p className="small">&copy; {new Date().getFullYear()} Ecom Store. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
