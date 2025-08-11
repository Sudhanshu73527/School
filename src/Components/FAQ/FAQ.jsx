import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is the admission process for new students?",
    answer:
      "The admission process involves filling out the application form, submitting required documents, and attending an interview or entrance test as per school policy.",
  },
  {
    question: "What are the school timings?",
    answer:
      "Our school operates from 8:00 AM to 2:00 PM for primary classes, and 8:00 AM to 3:00 PM for secondary classes.",
  },
  {
    question: "Does the school provide transport facilities?",
    answer:
      "Yes, we offer safe and reliable transport facilities covering multiple routes in the city.",
  },
  {
    question: "Are extracurricular activities offered?",
    answer:
      "Yes, we have a wide range of extracurricular activities including sports, arts, music, and debate clubs.",
  },
  {
    question: "How can parents communicate with teachers?",
    answer:
      "Parents can communicate via our school app, email, or by scheduling a meeting through the school office.",
  },
  {
    question: "Does the school have a library facility?",
    answer:
      "Yes, our library is stocked with thousands of books, e-books, and research materials for students of all grades.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-blue-50 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Here are some common questions we receive from parents and students.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-green-200"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium text-blue-700">
                {faq.question}
              </span>
              {openIndex === index ? (
                <FaChevronUp className="text-blue-600" />
              ) : (
                <FaChevronDown className="text-blue-600" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
