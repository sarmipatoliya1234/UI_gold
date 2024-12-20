import React, { useRef, useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const FAQSection = () => {
    const contentRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState();
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const faqs = [
    {
      id: "01",
      question:
        "What's the difference between the Old charger and the New charger?",
      answer:
        "Lab-grown or lab-created diamonds are artificially produced in a laboratory, using advanced techniques that replicate the natural  process. the same chemical, physical, and optical characteristics as mined diamonds. The two main methods are High Pressure, High Temperature (HPHT) and Chemical Vapor Deposition (CVD). These diamonds offer an ethical and environmentally friendly alternative to traditional mining, avoiding the associated conflicts and ecological impacts.",
    },
    {
      id: "02",
      question: "What is the sizing kit process?",
      answer:
        "Contact our support team to request a sizing kit. We'll guide you through the measurement process.",
    },
    {
      id: "03",
      question: "How do I purchase an additional charging case?",
      answer:
        "Additional charging cases can be purchased through our online store.",
    },
    {
        id: "04",
        question: "How long does the HART Ring battery last?",
        answer:
          "The HART Ring is equipped with a long-lasting battery that can last up to 8 days on a single charge, allowing you to use it without frequent recharging.",
      },
      {
        id: "05",
        question: "Which devices and operating systems (OS) is the HART app compatible with?",
        answer:
          "The HART app is compatible with both iOS and Android devices. You can download it from the Apple App Store or Google Play Store.",
      },
      {
        id: "06",
        question: "How does syncing the HART Ring with my smartphone work?",
        answer:
          "To sync your HART Ring with your smartphone, keep the ring within 2 meters of your phone, open the HART app, and follow the on-screen instructions for seamless syncing and accurate data collection.",
      },
      {
        id: "07",
        question: "Can the HART Ring sync with other apps?",
        answer:
          "Currently, the HART Ring only syncs with the HART app. However, you can also view your HART data in the FITTR app. Stay tuned for future updates on additional app integrations.",
      },
      {
        id: "08",
        question: "Can I wear my HART Ring only at night?",
        answer:
          "Yes, you can wear your HART Ring only at night if you prefer. However, to gain a comprehensive understanding of your daily activities and health metrics, we recommend wearing it throughout the day.",
      },
      {
        id: "09",
        question: "Can I wear my HART Ring while working out?",
        answer:
          "Absolutely! The HART Ring is designed to be worn during workouts and other physical activities. It's built to withstand your active lifestyle and accurately track your performance. However, if you're working out with equipment, the ring may get scratched. We recommend using a silicone cover to protect it from damage.",
      },
      {
        id: "10",
        question: "Is the HART Ring waterproof?",
        answer:
          "Yes, the HART Ring is waterproof up to a depth of 30 meters, making it suitable for swimming, showering, and other water-based activities.",
      },
  ];

  const displayedFAQs = showAll ? faqs : faqs.slice(0, 7);

  return (
    <div className="text-black md:p-20 lg:p-20 p-8">
      <div className="max-w-5xl mx-auto"  data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="3000" data-aos-once="true">
        <h1 className="text-[35px] manrope-font mb-12 text-center font-bold unna-regular">
          Have any Questions?
        </h1>

        <div className="space-y-6">
          {displayedFAQs.map((faq, index) => (
            <div key={faq.id} className="border-b border-gray-800 pb-6">
              <div
                className="flex justify-between items-start cursor-pointer group"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex gap-6">
                  <span className="text-gray-500 group-hover:text-black">
                    {faq.id}
                  </span>
                  <h3 className="text-[20px] font-bold manrope-font group-hover:text-black">
                    {faq.question}
                  </h3>
                </div>
                <button className="p-3 rounded-full border border-[#3E4A52] group-hover:bg-white group-hover:text-black">
                  {activeIndex === index ? (
                    <FaAngleDown className="w-4 h-4" />
                  ) : (
                    <FaAngleUp className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="transition-all duration-500 ease-in-out overflow-hidden"
                style={{
                  maxHeight:
                    activeIndex === index
                      ? contentRefs.current[index]?.scrollHeight + "px"
                      : "0px",
                }}
              >
                <div className="mt-4 ml-14 text-black text-[16px] manrope-font font-normal tracking-wider">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
