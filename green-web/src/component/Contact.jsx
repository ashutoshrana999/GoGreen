import React from "react";


const Contact = () => {
  return (
    <div className="bg-[#f7faf7] font-serif">

      {/* Hero */}
      <section className="px-5 md:px-10 pt-12 md:pt-20 pb-10">
        <div className="max-w-5xl mx-auto text-center">

          <span className="inline-block px-4 py-2 mb-5 rounded-full bg-green-100 text-green-700 text-sm font-medium">
            We'd love to hear from you 🌿
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-green-900 leading-tight">
            Let's Grow
            <span className="text-green-500"> Together</span>
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600 text-sm md:text-lg leading-relaxed">
            Have a question about our plants, your order, or need help
            choosing the perfect green companion? We're here to help.
          </p>

        </div>
      </section>


      {/* Contact Section */}
      <section className="px-5 md:px-10 pb-16">

        <div
          className="
            max-w-6xl mx-auto
            rounded-[2rem]
            bg-gradient-to-br
            from-[#dff8e7]
            via-[#c5efd2]
            to-[#a5dfb9]
            p-5 md:p-10
            shadow-sm
          "
        >

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left Side */}
            <div className="bg-green-900 rounded-3xl p-7 md:p-10 text-white flex flex-col justify-between">

              <div>
                <p className="text-green-300 text-sm uppercase tracking-widest mb-3">
                  Contact Us
                </p>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Bring a little more
                  <br />
                  <span className="text-green-300">
                    green into your life.
                  </span>
                </h2>

                <p className="mt-5 text-green-100/80 text-sm md:text-base leading-relaxed">
                  Whether you're looking for your first houseplant or
                  building your own indoor jungle, our team is always
                  happy to help.
                </p>
              </div>


              {/* Contact Details */}
              <div className="mt-10 space-y-5">

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                    📍
                  </div>

                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-sm text-green-100/70 mt-1">
                      GoGreen Plant Studio
                      <br />
                      Jaipur, Rajasthan, India
                    </p>
                  </div>
                </div>


                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                    📞
                  </div>

                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-sm text-green-100/70 mt-1">
                      +91 98765 43210
                    </p>
                  </div>
                </div>


                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                    ✉️
                  </div>

                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-sm text-green-100/70 mt-1 break-all">
                      hello@greennest.com
                    </p>
                  </div>
                </div>

              </div>

            </div>


            {/* Right Side */}
            <div className="bg-white rounded-3xl p-7 md:p-10">

              <h2 className="text-2xl md:text-3xl font-bold text-green-900">
                Visit or reach out
              </h2>

              <p className="text-gray-500 mt-2 text-sm">
                We're available during these hours.
              </p>


              {/* Working Hours */}
              <div className="mt-8">

                <div className="flex items-center justify-between py-5 border-b border-gray-100">
                  <div>
                    <p className="font-semibold text-gray-800">
                      Monday – Saturday
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Open every day
                    </p>
                  </div>

                  <p className="font-medium text-green-700">
                    9:00 AM – 7:00 PM
                  </p>
                </div>


                <div className="flex items-center justify-between py-5 border-b border-gray-100">
                  <div>
                    <p className="font-semibold text-gray-800">
                      Sunday
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Weekend hours
                    </p>
                  </div>

                  <p className="font-medium text-green-700">
                    10:00 AM – 5:00 PM
                  </p>
                </div>

              </div>


              {/* CTA */}
              <div className="mt-8 p-5 rounded-2xl bg-green-50">

                <div className="flex items-start gap-4">

                  <div className="text-2xl">
                    🌱
                  </div>

                  <div>
                    <h3 className="font-bold text-green-900">
                      Need help choosing a plant?
                    </h3>

                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                      Tell us about your space and we'll help you find
                      a plant that fits perfectly.
                    </p>
                  </div>

                </div>

                <button
                  className="
                    mt-5
                    w-full
                    rounded-full
                    bg-green-800
                    py-3
                    text-white
                    font-medium
                    transition
                    hover:bg-green-700
                    hover:shadow-lg
                  "
                >
                  Get in Touch
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


     

    </div>
  );
};

export default Contact;