import React, { useId, useState } from "react";
import './accordion.css';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  headingLevel?: number;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, headingLevel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemId = useId();
  const Heading = `h${headingLevel}` as keyof React.JSX.IntrinsicElements;

  return (
    <div className="accordion-item">
      <Heading>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          id={`btn-${itemId}`}
          aria-controls={`panel-${itemId}`}
          >
            {title}
        </button>
      </Heading>
      <div id={`panel-${itemId}`} aria-labelledby={`btn-${itemId}`} role="region" data-open={isOpen}>
        {children}
      </div>
    </div>
  );
};

type AccordionItemElementType = React.ReactElement<AccordionItemProps, typeof AccordionItem>

interface AccordionProps {
  headingLevel?: number;
  children: AccordionItemElementType[] | AccordionItemElementType;
}

export const Accordion: React.FC<AccordionProps> = ({ children, headingLevel = 2 }) => {
  return (
    <div className="accordion">
      {React.Children.map(children, (child, index) => (
        React.cloneElement(child, { key: index, headingLevel })
      ))}
    </div>
  );
};