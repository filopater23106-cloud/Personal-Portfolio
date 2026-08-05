import { FiMapPin, FiMail, FiBriefcase } from "react-icons/fi";

function Contact() {
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
                        👨‍💻
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


                    <form className="space-y-5">


                        <div className="grid grid-cols-2 gap-4">

                            <input
                                type="text"
                                placeholder="First Name"
                                className="
                                bg-[#181827]
                                border border-gray-700
                                rounded-xl
                                px-5 py-4
                                outline-none
                                focus:border-indigo-500
                                "
                            />

                            <input
                                type="text"
                                placeholder="Last Name"
                                className="
                                bg-[#181827]
                                border border-gray-700
                                rounded-xl
                                px-5 py-4
                                outline-none
                                focus:border-indigo-500
                                "
                            />

                        </div>



                        <div className="grid grid-cols-2 gap-4">

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="
                                bg-[#181827]
                                border border-gray-700
                                rounded-xl
                                px-5 py-4
                                outline-none
                                focus:border-indigo-500
                                "
                            />


                            <input
                                type="text"
                                placeholder="Phone No. (optional)"
                                className="
                                bg-[#181827]
                                border border-gray-700
                                rounded-xl
                                px-5 py-4
                                outline-none
                                focus:border-indigo-500
                                "
                            />

                        </div>




                        <textarea
                            rows="5"
                            placeholder="Your message..."
                            className="
                            w-full
                            bg-[#181827]
                            border border-gray-700
                            rounded-xl
                            px-5 py-4
                            outline-none
                            resize-none
                            focus:border-indigo-500
                            "
                        />



                        <button
                            className="
                            w-full
                            py-4
                            rounded-xl
                            bg-indigo-600
                            hover:bg-indigo-500
                            transition
                            font-semibold
                            shadow-lg
                            "
                        >
                            Send Message
                        </button>


                    </form>

                </div>


            </div>

        </section>
    );
}

export default Contact;
