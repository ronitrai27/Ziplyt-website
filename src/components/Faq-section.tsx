"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How is Ziplyt better than other service platforms?",
    answer:
      "Ziplyt stands out with faster service response, transparent pricing, and a carefully vetted worker network. Our focus is on quality, trust, and customer satisfaction, making us a smarter choice for your everyday service needs.",
  },
  {
    question: "Can I withdraw ZipCoins?",
    answer:
      "No, ZipCoins are not withdrawable as cash. However, you can redeem them to get exclusive discounts and offers on future bookings through Ziplyt.",
  },
  {
    question: "How can I earn ZipCoins?",
    answer:
      "You can earn ZipCoins by booking services, referring friends. These coins can be applied toward discounts on future services.",
  },
  {
    question: "Does a worker always arrive within 10 minutes?",
    answer:
      "In most cases, yes. We prioritize rapid response and aim to dispatch a nearby professional within 10 minutes. However, during high demand or limited availability, there might be slight delays—but we always keep you updated and strive to reach you as soon as possible.",
  },
  {
    question: "Are there any cancellation charges?",
    answer:
      "Cancellation charges may apply depending on how close to the appointment time you cancel. We clearly display any applicable fees during the cancellation process to maintain fairness for both users and workers.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto mt-14 select-none"
      id="faq"
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <div>
          <h2 className="text-[20px] font-medium mb-2 tracking-tight text-light font-inter">
            Still Doubts ?
          </h2>
          <h1 className="text-[42px] font-poppins font-medium leading-tight bg-[linear-gradient(to_right,#1E2A44,#2B3A5A,#005EFF,#4DA8FF)] text-transparent bg-clip-text [-webkit-background-clip:text]">
            Frequently Asked
            <br /> Questions
          </h1>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-3">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex justify-between items-center text-left py-4 focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg md:text-xl font-medium font-inter">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex-shrink-0 ml-4"
                >
                  <Plus className="h-6 w-6" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 text-gray-600 font-roboto">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
