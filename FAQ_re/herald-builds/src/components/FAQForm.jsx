import '../styles/faq-styles.css';
import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const FAQForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [submissions, setSubmissions] = useLocalStorage('faqSubmissions', []);
  const maxChars = 500;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validation
    if (question.length < 10) {
      setMessage({ text: 'Your question is too short', type: 'error' });
      setIsSubmitting(false);
      return;
    }
    
    // Store submission
    const newSubmission = {
      name,
      email,
      category,
      question,
      timestamp: new Date().toISOString()
    };
    
    setSubmissions([...submissions, newSubmission]);
    
    // Reset form
    setName('');
    setEmail('');
    setCategory('');
    setQuestion('');
    setMessage({ 
      text: 'Thank you for your question!', 
      type: 'success' 
    });
    
    setIsSubmitting(false);
    
    // Clear message after 5s
    setTimeout(() => setMessage({ text: '', type: '' }), 5000);
  };

  return (
    <section className="ask-question">
      <h2>Ask a Question</h2>
      <p>Can't find what you're looking for? Submit your question below.</p>
      
      <form onSubmit={handleSubmit} className="question-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            minLength={2}
            maxLength={50}
            pattern="[A-Za-z\s\-']+"
            title="Please enter a valid name using letters, spaces, hyphens, or apostrophes"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="PC Building">PC Building</option>
            <option value="Components">Components</option>
            <option value="Troubleshooting">Troubleshooting</option>
            <option value="Performance">Performance</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="question">Your Question:</label>
          <div className="textarea-container">
            <textarea
              id="question"
              name="question"
              rows={4}
              value={question}
              onChange={e => setQuestion(e.target.value)}
              required
              maxLength={maxChars}
              minLength={10}
            />
            <span className="char-counter">{question.length} / {maxChars}</span>
          </div>
        </div>
        <button 
          type="submit" 
          className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
          disabled={isSubmitting}
        >
          <span className="btn-text">Submit Question</span>
          {isSubmitting && <div className="loader"></div>}
        </button>
      </form>
      
      {message.text && (
        <div className={`submission-message ${message.type} show`}>
          {message.text}
        </div>
      )}
    </section>
  );
};

export default FAQForm;
