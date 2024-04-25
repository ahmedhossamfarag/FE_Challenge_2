import Products from "./Products"
import SearchForm from "./SearchForm"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon-dark-new.svg?v=1" data-src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon-dark-new.svg?v=1" alt="unbounce" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Products />
                        <li className="nav-item">
                            <a className="nav-link bi bi-caret-down" href="#">Solutions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link bi bi-caret-down" href="#">Learn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center gap-1">
                        <SearchForm />
                        <button className='btn btn-outline-primary rounded-0'>Log In</button>
                        <button className='btn btn-primary rounded-0'>Start My Free Trial</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default NavBar