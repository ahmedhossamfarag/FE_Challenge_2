import FooterList from "./FooterList";

const lists = [
    {
        title: "Product",
        links: [
            'Smart Builder',
            'Smart Traffic',
            'Smart Copy',
            'Apps and Integrations',
            'Landing Pages',
            'Popups and Sticky Bars',
            'Landing Page Templates',
            'Smart Copy Templates',
            'Product Security',
            'How We Compare',
        ]
    },
    {
        title: "Solutions",
        links: [
            'Ecommerce',
            'SaaS',
            'Agency',
            'Small Businesses',
            'B2B Marketing',
            'Professional Services',
            'PPC',
            'Social Ads',
            'Email Marketing',
            'Lead Generation',
        ]
    }
]

function Footer() {
    return (
        <footer id="footer">
            {lists.map(l => <FooterList key={l.title} title={l.title} links={l.links} />)}
        </footer>
    );
}

export default Footer;