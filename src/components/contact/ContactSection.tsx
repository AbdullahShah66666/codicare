"use client";

import { Mail, MapPin, Phone, SendHorizonal } from "lucide-react";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

type ContactFormValues = {
  fullname: string;
  email: string;
  company: string;
  message: string;
};

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data: ContactFormValues) => {
    const response = await fetch("/api/contact", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      setIsSubmitted(true);
      reset();
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <section className="bg-surface-secondary py-20 lg:py-28">
      <Container className="space-y-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Contact us
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            Let&apos;s build a smoother care experience together.
          </h1>
          <p className="mt-5 text-lg leading-8 text-secondary">
            Whether you are exploring a new workflow, refining an existing
            process, or need a faster path to better coordination, our team is
            ready to help.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-subtle bg-surface p-8 shadow-card">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-primary">
                Speak with the CodiCare team
              </h2>
              <p className="mt-3 text-base leading-7 text-secondary">
                Share a few details and we will reach out to discuss your goals,
                timelines, and the right fit for your organization.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="rounded-2xl border border-subtle bg-surface-secondary p-5 transition-colors hover:border-primary-light hover:bg-primary-light"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="mt-4 pl-1 text-sm font-semibold text-primary">
                  Email
                </p>
                <p className="mt-1 pl-1 text-sm text-secondary">
                  {siteConfig.contact.email}
                </p>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="rounded-2xl border border-subtle bg-surface-secondary p-5 transition-colors hover:border-primary-light hover:bg-primary-light"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <p className="mt-4 pl-1 text-sm font-semibold text-primary">
                  Phone
                </p>
                <p className="mt-1 pl-1 text-sm text-secondary">
                  {siteConfig.contact.phone}
                </p>
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-subtle bg-surface-secondary p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Office</p>
                  <p className="mt-1 text-sm leading-7 text-secondary">
                    {siteConfig.contact.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-primary-light bg-primary-light p-6">
              <h3 className="font-semibold text-primary">What to expect</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-secondary">
                <li>• A response within one business day.</li>
                <li>• A consultative conversation around your operations.</li>
                <li>
                  • A tailored recommendation based on your team size and goals.
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-[2rem] border border-subtle bg-surface p-8 shadow-card">
            <form onSubmit={handleSubmit(onSubmit)} className="pt-3 space-y-6">
              {isSubmitted ? (
                <div className="rounded-2xl border border-primary-light bg-primary-light p-4 text-sm text-success">
                  Thanks for reaching out. We will be in touch shortly.
                </div>
              ) : null}

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-sm font-medium text-primary">
                  Full name
                  <input
                    {...register("fullname", { required: "Name is required" })}
                    className="mt-2 w-full rounded-2xl border border-subtle bg-surface-secondary px-4 py-3 text-sm text-primary outline-none transition focus:border-accent"
                    placeholder="Alex Morgan"
                  />
                  {errors.fullname ? (
                    <span className="mt-2 block text-sm text-accent">
                      {errors.fullname.message}
                    </span>
                  ) : null}
                </label>

                <label className="block text-sm font-medium text-primary">
                  Work email
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email",
                      },
                    })}
                    className="mt-2 w-full rounded-2xl border border-subtle bg-surface-secondary px-4 py-3 text-sm text-primary outline-none transition focus:border-accent"
                    placeholder="alex@company.com"
                    type="email"
                  />
                  {errors.email ? (
                    <span className="mt-2 block text-sm text-accent">
                      {errors.email.message}
                    </span>
                  ) : null}
                </label>
              </div>

              <label className="block text-sm font-medium text-primary">
                Organization
                <input
                  {...register("company")}
                  className="mt-2 w-full rounded-2xl border border-subtle bg-surface-secondary px-4 py-3 text-sm text-primary outline-none transition focus:border-accent"
                  placeholder="Northwell Health"
                />
              </label>

              <label className="block text-sm font-medium text-primary">
                How can we help?
                <textarea
                  {...register("message", {
                    required: "A message is required",
                  })}
                  className="mt-2 min-h-36 w-full rounded-2xl border border-subtle bg-surface-secondary px-4 py-3 text-sm text-primary outline-none transition focus:border-accent"
                  placeholder="Tell us about your team, current challenges, and the support you need."
                />
                {errors.message ? (
                  <span className="mt-2 block text-sm text-accent">
                    {errors.message.message}
                  </span>
                ) : null}
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition-all duration-200 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send message"}
                <SendHorizonal className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
