/* eslint-disable react/prop-types */
function FooterList({ title, links }) {
    return (
        <div className="list p-3">
            <h4 className="fh bi bi-chevron-down" data-bs-toggle="collapse" href={`#${title}`} role="button" aria-expanded="false">{title}</h4>
            <div id={title} className="collapse">
                <ul className="list-group">
                    {links.map(l => <li key={l}><a href="#"><label>{l}</label></a></li>)}
                </ul>
            </div>
        </div>
    );
}

export default FooterList;