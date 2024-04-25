import { useState } from "react";

const items = [
    {
        icon: 'bi bi-pc-display',
        href: '#',
        title: 'Landing pages',
        data: 'Build pages with smart features that get more sales and signups.'
    },
    {
        icon: 'bi bi-pc-display',
        href: '#',
        title: 'Popups and sticky bars',
        data: "Create popups and sticky bars that grab your visitors' attention."
    },
    {
        icon: 'bi bi-pc-display',
        href: '#',
        title: 'Apps and integrations',
        data: 'Connect your favorite marketing tools and add extra functionality.'
    },
]

const side = {
    img: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://unbounce.com/photos/pro-serv-image.png",
    title: "Scale even faster with Professional Services",
    data: "Our add- on Professional Services can help you solve complex integrations, recreate existing landing pages, and develop higher-performing campaigns."
}

function Products() {
    const [show, setShow] = useState({ ul: "", caret: "down" });
    const toggleShow = () => {
        setShow({ ul: "show", caret: "up" })
    }
    const toggleHide = () => {
        setShow({ ul: "", caret: "down" })
    }

    return (
        <li className="nav-item" onMouseOver={toggleShow} onMouseLeave={toggleHide}>
            <a className={`nav-link bi bi-caret-${show.caret}`} href="#">Products</a>
            <ul className={`dropdown-menu p-0 rounded-0 nav-menu ${show.ul}`}>
                <div className="row">
                    <div className="d-flex flex-wrap col-8">
                        {
                            items.map(it =>
                                <div key={it.title} className="d-flex p-3 gap-3 col-6">
                                    <i className={it.icon}></i>
                                    <div>
                                        <a href={it.href}>
                                            <h5>{it.title}</h5>
                                        </a>
                                        <p>{it.data}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="col-4 p-2 bg-light">
                        <h2>{side.title}</h2>
                        <p>{side.data}</p>
                        <p>
                            <a href="#">
                                <h5>Learn More</h5>
                            </a>
                        </p>
                        <div>
                            <img src={side.img} />
                        </div>
                    </div>
                </div>
            </ul>

        </li>
    );
}

export default Products;