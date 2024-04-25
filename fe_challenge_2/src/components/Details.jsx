const details = [
    "This is a great space to further clarify your offer, whether it’s additional benefits or need-to-know details.",
    "For example, you could call out some of the specific, actionable learnings from your ebook or webinar."
]

function Details() {
    return (
        <div className="d-flex flex-column align-items-center p-3">
            <h3 className="text-center">Some more details of your offer</h3>
            <div className="mw-800 mt-5">
                {
                    details.map((d, i) =>
                        <div key={i}>
                            <h6 className="fw-bold font-monospace">Detail {i + 1}</h6>
                            <p>{d}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Details;