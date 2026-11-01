const Help = () => {
    const highlights = [
        { value: "24/7", label: "Support" },
        { value: "1-2 days", label: "Response time" },
        { value: "100%", label: "Customer care" },
    ];

    const sections = [
        {
            title: "How can we help?",
            text: "Whether you need help with an order, a delivery question, or a product issue, our team is ready to guide you through the next step quickly and clearly.",
            items: [
                "Track your order status, shipping updates, or delivery ETA.",
                "Request help with a damaged, missing, or incorrect item.",
                "Ask about product compatibility, specifications, or setup support.",
            ],
        },
        {
            title: "Before contacting us",
            text: "To help us serve you faster, keep a few details ready before you reach out. This helps us resolve any issue accurately on the first contact.",
            items: [
                "Your order number or purchase email address.",
                "A short description of the problem or question.",
                "Any photos, screenshots, or reference details if the issue involves damaged goods or setup problems.",
            ],
        },
        {
            title: "Popular support topics",
            text: "These are the most common issues we help customers with across our electronics store.",
            items: [
                "Order confirmation and delayed dispatch questions.",
                "Returns, exchanges, and refund status updates.",
                "Laptop or monitor warranty and troubleshooting guidance.",
                "Product selection help for work, gaming, or business setups.",
            ],
        },
    ];

    return (
        <div className="policy-page">
            <div className="policy-hero">
                <div className="container">
                    <div className="policy-badge">Support</div>
                    <h1>Help Center</h1>
                    <p>
                        We’re here to make shopping, delivery, and after-sales support feel easy,
                        friendly, and stress-free.
                    </p>

                    <div className="policy-stat-row">
                        {highlights.map((item) => (
                            <div key={item.label} className="policy-stat">
                                <strong>{item.value}</strong>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row g-4 align-items-start">
                    <div className="col-lg-8">
                        <div className="policy-content">
                            <div className="policy-meta">Customer assistance</div>

                            {sections.map((section, index) => (
                                <section key={section.title} className="policy-section">
                                    <div className="section-header">
                                        <span className="section-number">0{index + 1}</span>
                                        <h3>{section.title}</h3>
                                    </div>
                                    <p>{section.text}</p>
                                    <ul className="policy-list">
                                        {section.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </section>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <aside className="policy-aside">
                            <div className="aside-icon">?</div>
                            <h4>Contact support</h4>
                            <p>
                                Reach out to our care team for help with orders, product issues,
                                or general support questions.
                            </p>

                            <div className="support-card">
                                <span>Email</span>
                                <strong>support@computehub.gmail.com</strong>
                            </div>
                            <div className="support-card">
                                <span>Phone</span>
                                <strong>+254 700 000 000</strong>
                            </div>
                            <div className="support-card">
                                <span>Hours</span>
                                <strong>Mon - Sat / 9:00 AM - 7:00 PM</strong>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
