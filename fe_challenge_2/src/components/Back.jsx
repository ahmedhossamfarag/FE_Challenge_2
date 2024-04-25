/* eslint-disable react/prop-types */
function Back({ top = false }) {
    return (
        <div className="d-flex justify-content-between m-3">
            <a className="bi bi-caret-left" href="#">BACK TO TEMPLATES</a>
            {top &&
                <a className="bi bi-caret-up" href="#">BACK TO TOP</a>
            }
        </div>
    );
}

export default Back;