import React, { useState } from "react";
import { StyledFaq } from "../elements/faq-styles";
import { useSpring, animated } from "react-spring";
import useResizeAware from "react-resize-aware";

const Faqs = props => {
  const { question, answer } = props;
  const [isOpen, toggleOpen] = useState(false);
  const [resizeListener, { height }] = useResizeAware();
  
  const animProps = useSpring({
    height: isOpen ? height : 0,
    opacity: isOpen ? 1 : 0,
  });

  return (
    <StyledFaq onClick={() => toggleOpen(!isOpen)}>
      <div className="faq-question">
        <span>
          Q: {question}
        </span>
      </div>

      <animated.div className="faq-answer" style={{ ...animProps }}>
        <span style={{ position: "relative" }}>
          {resizeListener}
          A: {answer}
        </span>
      </animated.div>
    </StyledFaq>
  );
};

export default Faqs;