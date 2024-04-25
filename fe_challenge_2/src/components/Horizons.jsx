const categories = [
    'Agency Lead Generation', 'Books', 'Consulting', 'Ebook', 'Ecourse', 'Education', 'Events', 'Featured', 'Lead Generation', 'Minimalist', 'Real Estate', 'Restaurant', 'SaaS', 'Webinar', 'WordPress'
]

function Horizons() {
    return (
        <div className="d-flex justify-content-between m-5">
            <div className="w-50">
                <h3>HORIZONS</h3>
                <p>This quick-start template is great for capturing leads with any offer, whether it’s a webinar, ebook, or promotional coupon.</p>
                <button className="btn btn-success rounded-0">Make It Yours</button>
            </div>
            <div className="w-25">
                <h5>Category</h5>
                <div>
                    {
                        categories.map(c => <><a key={c} href="#">{c}</a> {c != "WordPress" && " | "}</>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Horizons;