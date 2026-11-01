const Return = () => {
    const highlights = [
        { value: "30 days", label: "Return window" },
        { value: "48 hrs", label: "Damage reporting" },
        { value: "5-10 days", label: "Refund processing" },
    ];

    const policySections = [
        {
            title: "Return window & eligibility",
            text: "You may return eligible products within 30 days of delivery for a refund or exchange. To qualify, every item must be in its original, undamaged packaging with all included accessories, manuals, power adapters, and cables intact.",
            items: [
                "Original packaging and labels still present",
                "No visible damage, liquid spills, or misuse",
                "Laptop data fully wiped before return shipping",
            ],
        },
        {
            title: "Non-returnable items",
            text: "The following items are not eligible for return unless they arrived damaged or defective:",
            items: [
                "Downloaded software or activated digital licenses",
                "Opened consumables such as thermal paste or screen protectors",
                "Custom-configured or heavily modified workstation builds",
            ],
        },
        {
            title: "Restocking fees & shipping",
            text: "Opened or non-defective items may be subject to a restocking fee of up to 15% to cover inspection, testing, and repackaging. Return shipping is the customer’s responsibility unless the item was incorrect, defective, or damaged in transit.",
            items: [
                "Change-of-mind returns: customer pays shipping",
                "Defective or damaged items: prepaid return label provided",
                "Missing original accessories may reduce your refund",
            ],
        },
        {
            title: "Refund processing",
            text: "Once your item is received and inspected, we will notify you about the outcome of the refund request. Approved refunds are returned to the original payment method within 5 to 10 business days after approval.",
            items: [
                "Inspection and approval can take a few business days",
                "Refunds are processed to the original payment method",
                "Any restocking fee, if applicable, will be deducted before refund",
            ],
        },
    ];

    return (
        <div className="policy-page">
            <div className="policy-hero">
                <div className="container">
                    <div className="policy-badge">Customer Care</div>
                    <h1>Return &amp; Refund Policy</h1>
                    <p>
                        We want every order to feel effortless and worry-free. If something
                        isn’t right, our support team is here to help make the return process quick
                        and transparent.
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

                            {policySections.map((section, index) => (
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
                            <div className="aside-icon">↩</div>
                            <h4>Need help with a return?</h4>
                            <p>
                                Reach out to our team with your order number and a quick summary of the issue.
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

export default Return;