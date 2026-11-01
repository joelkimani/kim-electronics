const Terms = () => {
    const highlights = [
        { value: "14 days", label: "Return window" },
        { value: "Secure", label: "Checkout" },
        { value: "24/7", label: "Support" },
    ];

    const sections = [
        {
            title: "General conditions",
            text: "These Terms of Service govern your access to and use of our website and any purchase of laptops, monitors, accessories, or related services from Kim Electronics. By placing an order or using our website, you agree to be bound by these terms and conditions.",
            items: [
                "You must be at least the age of majority in your region to use this website or place an order.",
                "You are responsible for keeping your account details, password, and payment information secure.",
                "You agree not to misuse the website or any product for unlawful or unauthorized activity.",
            ],
        },
        {
            title: "Product information",
            text: "We do our best to provide accurate product descriptions, specs, images, and pricing. However, screen colors, brightness levels, and display output can vary based on hardware settings and environment.",
            items: [
                "Product images and specifications are intended to be representative and may vary slightly from the final item delivered.",
                "Monitors and laptops may contain standard manufacturing pixel variations under normal tolerance levels.",
                "Inventory and product availability may change without notice while stock lasts.",
            ],
        },
        {
            title: "Pricing & payments",
            text: "All prices are subject to change without notice. Taxes, shipping, duties, or other fees may be added at checkout depending on your location and order details.",
            items: [
                "We reserve the right to cancel any order if fraud, stock issues, or pricing errors are detected.",
                "You agree to provide accurate billing and shipping information for each order.",
                "Orders must be paid in full through approved and secure payment gateways before dispatch.",
            ],
        },
        {
            title: "Shipping & delivery",
            text: "Delivery dates are estimated and should be treated as approximate rather than guaranteed. We are not liable for delays caused by courier disruptions, weather, local customs, or other external issues.",
            items: [
                "Risk of loss transfers to the customer once the parcel is handed to the delivery carrier.",
                "Please inspect the packaging on arrival and report visible damages with photographic evidence promptly.",
                "We reserve the right to limit purchase quantities or discontinue items without prior notice.",
            ],
        },
        {
            title: "Returns, refunds & warranties",
            text: "Our return policy applies to eligible products in original condition and packaging. Defective items may be refunded, exchanged, or repaired according to the relevant product and warranty terms.",
            items: [
                "Returned items must include all accessories, manuals, adapters, and original packaging where applicable.",
                "Products returned with missing accessories, signs of misuse, or damaged packaging may be subject to additional fees.",
                "Manufacturer warranties remain subject to the terms provided by the relevant hardware supplier or brand.",
            ],
        },
        {
            title: "Liability & governing law",
            text: "Kim Electronics shall not be liable for indirect, incidental, consequential, or punitive damages arising from product use, delays, data loss, or service interruption, except where required by law.",
            items: [
                "Our liability is limited to the amount paid for the relevant product or service in question.",
                "These terms are governed by the laws of Kenya, without prejudice to any mandatory consumer protections.",
                "Any dispute should be resolved in good faith before legal escalation or formal claims.",
            ],
        },
    ];

    return (
        <div className="policy-page">
            <div className="policy-hero">
                <div className="container">
                    <div className="policy-badge">Legal</div>
                    <h1>Terms of Service</h1>
                    <p>
                        These terms keep your shopping experience clear, fair, and protected.
                        Please read them carefully before purchasing from our store.
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
                            <div className="policy-meta">Last Updated: October 25, 2026</div>

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
                            <div className="aside-icon">✓</div>
                            <h4>Need help interpreting these terms?</h4>
                            <p>
                                Our support team can clarify anything about orders, warranties,
                                returns, or product usage before you complete checkout.
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

export default Terms;