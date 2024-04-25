function Offer() {
    const submit = (e) => { e.preventDefault(); }
    return (
        <div className="bg-dark text-white p-3">
            <h1 className="text-center">Concisely describe your offer</h1>
            <div className="d-flex flex-wrap justify-content-center align-items-center">
                <div className="mw-400">
                    <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/horizons/4cace893-horizons-ebookmockup-v2_10ik0ik0dq0ik02f000028.png" />
                </div>
                <div className="mw-400 w-100">
                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <label htmlFor="firstname" className="form-label">FirstName*</label>
                            <input type="text" className="form-control" id="firstname" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastname" className="form-label">LastName*</label>
                            <input type="text" className="form-control" id="lastname" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email*</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="industry">Industry</label>
                            <select className="form-select" id="industry">
                                {
                                    [...Array(3).keys()].map(k => <option key={k} value={k + 1}>Industry {k + 1}</option>)
                                }
                            </select>
                        </div>
                        <button type="submit" className="btn btn-success w-100">Claim Now</button>
                    </form>
                </div>
            </div>
            <p className="text-center mt-5">No need to get clever. Tell people exactly what you&apos;re offering, then use this space to communicate your key value proposition.</p>
        </div>
    );
}

export default Offer;