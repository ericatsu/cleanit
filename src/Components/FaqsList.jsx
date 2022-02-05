import React from "react";
import { StyledFaqsList } from "../elements/faq-styles";
import Faqs from "./Faqs";


const faqsData = [
  { 
    question: "What does FAQ stand for?",
    answer: "Frequently Asked Question"
  },
  {
    question: "What is the best ice cream flavor?",
    answer: "Coffee with fudge ripple, or homemade strawberry."
  }
];

const FaqsList = () => {
  return (
    <StyledFaqsList>
      {faqsData.map((faq, i) => (
        <Faqs key={"faq_" + i} question={faq.question} answer={faq.answer} />
      ))}
    </StyledFaqsList>
  );
};

export default FaqsList;