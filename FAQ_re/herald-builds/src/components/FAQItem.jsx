import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' active' : ''}`}>
      <div className="faq-question" onClick={() => setOpen(!open)}>
        <h3>{question}</h3>
        <span className="faq-icon">{open ? '▲' : '▼'}</span>
      </div>
      <div className="faq-answer" style={{ display: open ? 'block' : 'none' }}>
        <p dangerouslySetInnerHTML={{ __html: answer }} />
      </div>
    </div>
  );
};

export default FAQItem;
