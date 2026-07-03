"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Container } from "@/components/ui/Container";

const faqs = [
  {
    question: "What types of healthcare organizations is CodiCare designed for?",
    answer:
      "CodiCare is built for providers, care teams, and healthcare organizations that need a structured and scalable operational foundation.",
  },
  {
    question: "Can the platform support both clinical and business workflows?",
    answer:
      "Yes. The solution structure is designed to support clinical operations, business processes, and care-focused programs within a single ecosystem.",
  },
  {
    question: "Does CodiCare support AI-enabled workflows?",
    answer:
      "Yes. The platform includes an AI solution area intended to help reduce manual work and improve decision-making support.",
  },
  {
    question: "Is the solution customizable for different care programs?",
    answer:
      "Yes. The architecture is intended to support a range of care programs and future expansion as requirements evolve.",
  },
  {
    question: "How does CodiCare help improve operational visibility?",
    answer:
      "By organizing key workflows into clear solution areas, teams can more easily see what is happening and where attention is needed.",
  },
  {
    question: "How do I get started with CodiCare?",
    answer:
      "Use the contact CTA to speak with our team about your goals, and we can help map the right solution approach for your organization.",
  },
] as const;

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-surface-secondary" aria-labelledby="faq-section-heading">
      <Container className="py-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            FAQ
          </p>
          <h2
            id="faq-section-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-primary lg:text-4xl"
          >
            Common questions about CodiCare solutions.
          </h2>
          <p className="mt-4 text-lg leading-8 text-secondary">
            Find quick answers to the most common questions healthcare teams ask when evaluating CodiCare.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
};

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <article className="overflow-hidden rounded-2xl border border-subtle bg-surface shadow-sm">
      <button
        id={buttonId}
        type="button"
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="text-base font-semibold text-primary">{question}</span>
        <ChevronDown
          className={`size-5 shrink-0 text-muted transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid overflow-hidden px-6 transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] pb-0 opacity-0"
        }`}
      >
        <div className="min-h-0">
          <p className="text-sm leading-6 text-secondary">{answer}</p>
        </div>
      </div>
    </article>
  );
}
