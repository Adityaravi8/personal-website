import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY);

    try {
      const res  = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) { setStatus("sent"); e.target.reset(); }
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#16162a]">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 title-3d" data-aos="fade-up">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-[#94a3b8] text-sm mb-10 mt-8" data-aos="fade-up" data-aos-delay="100">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out.
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
            className="input-glow p-3.5 text-sm w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="input-glow p-3.5 text-sm w-full"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="input-glow p-3.5 text-sm w-full resize-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-3d btn-shine py-3.5 rounded-[10px] text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed w-full"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-[#2dd4bf] text-sm text-center mt-1">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center mt-1">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
