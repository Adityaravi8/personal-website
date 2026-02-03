import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("sent");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-800 text-white">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="100">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, feel free to reach out.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-left"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="input-glow p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="input-glow p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="input-glow p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition-all"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-3d btn-shine bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded transition-colors"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-green-400 text-center">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>

      </div>
    </section>
  );
}
