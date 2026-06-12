import emailjs from "@emailjs/browser";
import { Linkedin, Mail, Send } from "lucide-react";
import { useRef, useState } from "react";
import { profile } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const startedAt = useRef(Date.now());

  // EmailJS setup:
  // 1. Create an EmailJS service connected to the email that receives messages.
  // 2. Create a template that sends to khloe.ose@gmail.com.
  // 3. Paste the IDs/keys into .env using:
  //    VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID,
  //    VITE_EMAILJS_PUBLIC_KEY.
  // Template variables used here:
  // from_name, from_email, reply_to, subject, message, to_email, sent_at,
  // time_on_page_seconds.
  const emailJsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function validateForm() {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!isValidEmail(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!form.subject.trim()) nextErrors.subject = "Subject is required.";
    if (!form.message.trim()) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (status.type === "loading") return;

    setStatus({ type: "idle", message: "" });

    if (form.website) {
      setForm(initialForm);
      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      return;
    }

    if (!validateForm()) return;

    const missingCredentials = [
      ["VITE_EMAILJS_SERVICE_ID", emailJsConfig.serviceId],
      ["VITE_EMAILJS_TEMPLATE_ID", emailJsConfig.templateId],
      ["VITE_EMAILJS_PUBLIC_KEY", emailJsConfig.publicKey],
    ]
      .filter(([, value]) => !value)
      .map(([name]) => name);

    if (missingCredentials.length > 0) {
      setStatus({
        type: "error",
        code: "missing-config",
        message:
          "Contact form setup is incomplete. Please add the EmailJS credentials in your environment variables.",
        details: `Missing: ${missingCredentials.join(", ")}`,
      });
      return;
    }

    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      const templateParams = {
        from_name: form.name.trim(),
        from_email: form.email.trim(),
        reply_to: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
        to_email: profile.email,
        sent_at: new Date().toLocaleString(),
        time_on_page_seconds: Math.round((Date.now() - startedAt.current) / 1000),
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setForm(initialForm);
      setErrors({});
      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      startedAt.current = Date.now();
    } catch (error) {
      setStatus({
        type: "error",
        code: "send-failed",
        message:
          "Sorry, something went wrong. Please try again or email me directly at ",
      });
    }
  }

  return (
    <section id="contact" className="bg-paper-soft">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <p className="section-kicker">Contact</p>
            <h2 className="section-heading">Let's talk about internship fit.</h2>
            <p className="section-copy">
              Recruiters and teams can use this form to reach me directly for
              internship opportunities, interviews, technical coordination
              roles, and project conversations.
            </p>

            <div className="mt-10 space-y-3">
              <ContactLink
                href={`mailto:${profile.email}`}
                icon={Mail}
                label="Email"
                detail={profile.email}
              />
              <ContactLink
                href={profile.linkedIn}
                icon={Linkedin}
                label="LinkedIn"
                detail="View professional profile"
                external
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="editorial-card p-6 sm:p-8" noValidate>
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex="-1"
                  autoComplete="off"
                  value={form.website}
                  onChange={updateField}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  value={form.name}
                  error={errors.name}
                  onChange={updateField}
                  placeholder="Your name"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  error={errors.email}
                  onChange={updateField}
                  placeholder="you@example.com"
                />
              </div>

              <div className="mt-5">
                <Field
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  error={errors.subject}
                  onChange={updateField}
                  placeholder="Internship opportunity"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  required
                  value={form.message}
                  onChange={updateField}
                  placeholder="Write your message here..."
                  className={`w-full resize-y rounded-[1.25rem] border bg-white/85 px-4 py-3 text-base text-ink outline-none transition placeholder:text-muted/60 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 ${
                    errors.message ? "border-red-400" : "border-line"
                  }`}
                />
                {errors.message && (
                  <p className="mt-2 text-sm font-medium text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              {status.message && (
                <p
                  className={`mt-5 rounded-[1.25rem] border px-4 py-3 text-sm font-medium ${
                    status.type === "success"
                      ? "border-green-200 bg-green-50 text-green-700"
                      : status.type === "error"
                        ? "border-red-200 bg-red-50 text-red-700"
                        : "border-brand-100 bg-brand-50 text-brand-700"
                  }`}
                  role="status"
                >
                  {status.message}
                  {status.code === "send-failed" && (
                    <a href={`mailto:${profile.email}`} className="font-semibold underline">
                      {profile.email}
                    </a>
                  )}
                  {status.code === "send-failed" && "."}
                  {status.details && (
                    <span className="mt-1 block text-xs">{status.details}</span>
                  )}
                </p>
              )}

              <button
                type="submit"
                disabled={status.type === "loading"}
                className="primary-button mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status.type === "loading" ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

              <p className="mt-4 text-xs leading-6 text-muted">
                Protected with required fields, email validation, a honeypot
                field, and EmailJS browser keys stored in environment variables.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", value, error, onChange, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-full border bg-white/85 px-4 py-3 text-base text-ink outline-none transition placeholder:text-muted/60 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 ${
          error ? "border-red-400" : "border-line"
        }`}
      />
      {error && <p className="mt-2 text-sm font-medium text-red-600">{error}</p>}
    </div>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
  detail,
  external = false,
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex items-center gap-4 rounded-[1.4rem] border border-line bg-white/80 p-4 transition hover:border-brand-100 hover:bg-brand-50"
    >
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-100 bg-white text-brand-700">
        <Icon size={19} />
      </span>
      <span>
        <span className="block text-sm font-semibold text-ink">{label}</span>
        <span className="text-sm text-muted">{detail}</span>
      </span>
    </a>
  );
}

export default Contact;
