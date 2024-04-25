import Template from "./Template";

const templets = [
    {
        img: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_272,h_254/https://unbounce.com/photos/Thumbnail-272x254.jpg",
        title: "Multor",
        data: "Schedule more virtual appointments, online classes, and video consultations with this high-converting lead capture template."
    },
    {
        img: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_272,h_253/https://unbounce.com/photos/O-Saas-272x253.jpg",
        title: "O-SaaS",
        data: "A theme that’s designed to show off your SaaS product. There’s plenty of contrast, space for key benefits, a pricing grid, and more."
    },
]

function Templates() {
    return (
        <div className="d-flex justify-content-center flex-wrap gap-3 mt-5">
            {
                templets.map(t => <Template key={t.title} template={t} />)
            }
        </div>
    );
}

export default Templates;