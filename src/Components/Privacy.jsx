const Privacy = () => {
    const highlights = [
        { value: "Protected", label: "Customer data" },
        { value: "Secure", label: "Payment handling" },
        { value: "Transparent", label: "Privacy practices" },
    ];

    const sections = [
        {
            title: "Information we collect",
            text: "We collect personal information needed to complete your orders, improve your experience, and support your shopping journey. This includes information you provide directly as well as data collected during site usage.",
            items: [
                "Personal identifiers such as name, billing address, delivery address, email, and phone number.",
                "Payment details processed securely through approved gateways; we do not store full card information locally.",
                "Technical information like IP address, browser type, device details, and browsing behavior to help optimize website performance and security.",
            ],
        },
        {
            title: "How we use your information",
            text: "The information we collect helps us deliver your order, support your account, and protect the shopping experience for every customer.",
            items: [
                "Process and fulfill hardware orders, including shipping updates and delivery coordination.",
                "Provide customer support for warranty, technical questions, and product assistance.",
                "Improve our website layout, product recommendations, and service quality.",
                "Prevent fraud, secure the platform, and maintain reliable store operations.",
            ],
        },
        {
            title: "Sharing of information",
            text: "We do not sell or rent your personal data. We only share information when necessary to support the services behind your purchase or to comply with legal obligations.",
            items: [
                "Shipping partners and delivery carriers to coordinate order fulfillment and tracking.",
                "Payment processors to securely complete transactions and verify payment authenticity.",
                "Legal authorities when required to comply with applicable laws or protect our legal rights.",
            ],
        },
        {
            title: "Data security",
            text: "We use administrative, technical, and physical safeguards to protect personal information from unauthorized access, misuse, alteration, or loss.",
            items: [
                "Encryption and secure connections for sensitive data and transactions.",
                "Restricted internal access to personal information on a need-to-know basis.",
                "Regular operational review of systems and processes to strengthen website security.",
            ],
        },
        {
            title: "Your rights & choices",
            text: "Depending on your jurisdiction, you may have rights related to the personal data we hold about you, including access, correction, deletion, or communication preferences.",
            items: [
                "You may request correction or deletion of your personal information where legally applicable.",
                "You can opt out of marketing emails at any time using the unsubscribe link in our messages.",
                "You may contact us to ask questions about how your information is handled.",
            ],
        },
    ];

    return (
        <div className="policy-page">
            <div className="policy-hero">
                <div className="container">
                    <div className="policy-badge">Privacy</div>
                    <h1>Privacy Policy</h1>
                    <p>
                        Your trust matters. We protect your data with the same care and attention
                        we apply to every order and customer interaction.
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
                            <div className="aside-icon">🔒</div>
                            <h4>Questions about your privacy?</h4>
                            <p>
                                We’re here to answer your questions about personal data, account
                                settings, order records, and communication preferences.
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
                                <span>Address</span>
                                <strong>Nairobi, Kenya</strong>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;