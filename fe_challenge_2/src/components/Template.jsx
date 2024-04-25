/* eslint-disable react/prop-types */
function Template({ template }) {
    return (
        <div className="template bg-light">
            <div className="view">
                <img src={template.img} />
                <div className="txt">
                    LANDING PAGE TEMPLATE
                </div>
            </div>
            <div className="p-3">
                <div>
                    <h3>{template.title}</h3>
                    <p>{template.data}</p>
                </div>
                <a href="#">
                    <button className="btn btn-outline-primary rounded-0 w-100">VIEW TEMPLATE</button>
                </a>
            </div>
        </div>
    );
}

export default Template;