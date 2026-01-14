import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is the admission process for new students?",
    answer:
      "The admission process includes filling out the application form, submitting the required documents, and attending an interaction or entrance assessment as per school guidelines.",
  },
  {
    question: "What are the school timings?",
    answer:
      "The school operates from 8:00 AM to 2:00 PM for primary classes and from 8:00 AM to 3:00 PM for secondary classes.",
  },
  {
    question: "Does the school provide transportation facilities?",
    answer:
      "Yes, we provide safe and reliable transportation facilities covering nearby areas with trained staff and secure routes.",
  },
  {
    question: "Are extracurricular activities included?",
    answer:
      "Absolutely. Students can participate in sports, music, art & craft, debates, cultural programs, and other co-curricular activities.",
  },
  {
    question: "How can parents communicate with teachers?",
    answer:
      "Parents can connect with teachers through scheduled meetings, the school office, or official communication channels.",
  },
  {
    question: "Does the school have a well-equipped library?",
    answer:
      "Yes, our library offers a rich collection of academic books, storybooks, reference materials, and digital learning resources.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-white via-green-50 to-white py-14 md:py-20 px-4 sm:px-6 lg:px-20">
      
      {/* Background Glow */}
      <div className="absolute -top-24 left-0 w-72 h-72 bg-green-300 blur-[120px] opacity-20 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-400 blur-[120px] opacity-20 rounded-full"></div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-green-700 font-semibold mb-2">
            FAQs
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Clear answers to common questions to help parents and students
            understand our school better.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center p-5 sm:p-6 text-left"
                >
                  <span className="text-base sm:text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-green-600"
                  >
                    <FaChevronDown />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 sm:px-6 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;





// text-[#2E1C14]