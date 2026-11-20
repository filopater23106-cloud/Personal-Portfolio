import { useState } from "react";
import { FiMapPin, FiMail, FiBriefcase } from "react-icons/fi";

// Messages are delivered to this inbox through FormSubmit (no backend needed).
const RECEIVER_EMAIL = "filopater23106@gmail.com";
const ENDPOINT = `https://formsubmit.co/ajax/${RECEIVER_EMAIL}`;

const NAME_MAX = 30;
const MESSAGE_MAX = 1000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9\s\-()]{7,20}$/;

const EMPTY = { name: "", email: "", phone: "", message: "", website: "" };

function validate(v) {
    const e = {};
    if (!v.name.trim()) e.name = "Please enter your name";
    else if (v.name.trim().length < 2) e.name = "Name is too short";

    if (!v.email.trim()) e.email = "Please enter your email";
    else if (!EMAIL_RE.test(v.email.trim())) e.email = "Enter a valid email address";

    if (v.phone.trim() && !PHONE_RE.test(v.phone.trim()))
        e.phone = "Enter a valid phone number";

    if (!v.message.trim()) e.message = "Please write a message";
    else if (v.message.trim().length < 10)
        e.message = "Message should be at least 10 characters";
    return e;
}

function Contact() {
    const [values, setValues] = useState(EMPTY);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues((v) => ({ ...v, [name]: value }));
        if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
        if (status === "success" || status === "error") setStatus("idle");
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (status === "sending") return;

        // Honeypot: bots fill the hidden field, humans never see it
        if (values.website) return;

        const found = validate(values);
        setErrors(found);
        if (Object.keys(found).length) return;

        setStatus("sending");
        try {
            const res = await fetch(ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: values.name.trim(),
                    email: values.email.trim(),
                    phone: values.phone.trim() || "—",
                    message: values.message.trim(),
                    _subject: `Portfolio message from ${values.name.trim()}`,
                    _replyto: values.email.trim(),
                    _template: "table",
                    _captcha: "false",
                }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || data.success === "false" || data.success === false)
                throw new Error(data.message || "Request failed");

            setValues(EMPTY);
            setStatus("success");
        } catch {
            setStatus("error");
        }
    };

    const fieldClass = (hasError) => `
        w-full bg-[#181827] border rounded-xl px-5 py-4 outline-none
        ${hasError ? "border-red-500 focus:border-red-500" : "border-gray-700 focus:border-indigo-500"}
    `;

    return (
        <section
            id="contact"
            className="min-h-screen text-white py-24 px-6 flex flex-col gap-8"
        >
            {/* Header */}

            <div className="text-center">

                <p className="uppercase tracking-[4px] text-cyan-400 text-sm font-medium">
                    Say Hello
                </p>

                <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                    Get In Touch
                </h2>

                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mx-auto mt-5"></div>

                <p className="mt-6 text-gray-400 max-w-xl mx-auto leading-8">
                    Open to freelance projects, internships, and full-time
                    opportunities.
                    <br />
                    Let's build something great together.
                </p>

            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">


                {/* Info Card */}
                <div
                    className="
                    rounded-3xl
                    border border-indigo-900
                    bg-gradient-to-br from-[#211653] to-[#151127]
                    p-8
                    shadow-xl
                    "
                >
                    <div className="text-4xl mb-6">
                        👩‍💻
                    </div>

                    <h3 className="text-2xl font-bold">
                        Filopater Shehata
                    </h3>

                    <p className="text-gray-400 mt-4 leading-7">
                        Front-End Developer based in Egypt. I love building
                        elegant, responsive web applications and am always open
                        to new opportunities.
                    </p>


                    <div className="mt-8 space-y-6">


                        <div className="flex gap-4 items-center">
                            <FiMapPin className="text-pink-400 text-xl" />

                            <div>
                                <p className="text-gray-500 text-sm">
                                    Location
                                </p>

                                <p className="text-gray-200">
                                    Giza, Egypt
                                </p>
                            </div>
                        </div>



                        <div className="flex gap-4 items-center">
                            <FiMail className="text-blue-400 text-xl" />

                            <div>
                                <p className="text-gray-500 text-sm">
                                    Email
                                </p>

                                <p className="text-gray-200">
                                    filopater23106@gmail.com
                                </p>
                            </div>
                        </div>




                        <div className="flex gap-4 items-center">
                            <FiBriefcase className="text-purple-400 text-xl" />

                            <div>
                                <p className="text-gray-500 text-sm">
                                    Focus
                                </p>

                                <p className="text-gray-200">
                                    Front-End Development
                                </p>
                            </div>
                        </div>


                    </div>

                </div>




                {/* Form */}
                <div
                    className="
                    rounded-3xl
                    border border-gray-700
                    bg-[#0d0d1b]
                    p-8
                    "
                >

                    <h3 className="text-xl font-bold mb-8">
                        Send a Message
                    </h3>


                    <form className="space-y-5" onSubmit={onSubmit} noValidate>

                        <div className="grid sm:grid-cols-2 gap-4">

                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    onChange={onChange}
                                    maxLength={NAME_MAX}
                                    placeholder="Your Name"
                                    autoComplete="name"
                                    aria-invalid={!!errors.name}
                                    className={fieldClass(errors.name)}
                                />
                                {errors.name && <p className="field-error">{errors.name}</p>}
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={values.phone}
                                    onChange={onChange}
                                    maxLength={20}
                                    placeholder="Phone No. (optional)"
                                    autoComplete="tel"
                                    aria-invalid={!!errors.phone}
                                    className={fieldClass(errors.phone)}
                                />
                                {errors.phone && <p className="field-error">{errors.phone}</p>}
                            </div>

                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={onChange}
                                maxLength={100}
                                placeholder="Email Address"
                                autoComplete="email"
                                aria-invalid={!!errors.email}
                                className={fieldClass(errors.email)}
                            />
                            {errors.email && <p className="field-error">{errors.email}</p>}
                        </div>

                        <div>
                            <textarea
                                rows="5"
                                name="message"
                                value={values.message}
                                onChange={onChange}
                                maxLength={MESSAGE_MAX}
                                placeholder="Your message..."
                                aria-invalid={!!errors.message}
                                className={`${fieldClass(errors.message)} resize-none`}
                            />
                            <div className="flex justify-between gap-4">
                                {errors.message ? (
                                    <p className="field-error">{errors.message}</p>
                                ) : <span />}
                                <p className="text-gray-500 text-xs mt-1.5">
                                    {values.message.length}/{MESSAGE_MAX}
                                </p>
                            </div>
                        </div>

                        {/* Honeypot (hidden from users) */}
                        <input
                            type="text"
                            name="website"
                            value={values.website}
                            onChange={onChange}
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                            className="hidden"
                        />

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="
                            w-full
                            py-4
                            rounded-xl
                            bg-indigo-600
                            hover:bg-indigo-500
                            disabled:opacity-60 disabled:cursor-not-allowed
                            text-white
                            transition
                            font-semibold
                            shadow-lg
                            "
                        >
                            {status === "sending" ? "Sending..." : "Send Message"}
                        </button>

                        <div aria-live="polite">
                            {status === "success" && (
                                <p className="text-center text-sm font-medium text-green-400">
                                    ✓ Message sent! I'll get back to you soon.
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-center text-sm font-medium text-red-400">
                                    Something went wrong. Please try again, or email me
                                    directly at {RECEIVER_EMAIL}.
                                </p>
                            )}
                        </div>

                    </form>

                </div>


            </div>

        </section>
    );
}

export default Contact;