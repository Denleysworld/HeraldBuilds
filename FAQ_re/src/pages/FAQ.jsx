import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQItem from '../components/FAQItem';
import FAQForm from '../components/FAQForm';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const faqData = [
    {
      question: "What's the minimum budget for building a decent gaming PC?",
      answer: "A decent entry-level gaming PC typically starts around $600-$800 (KES 82,000-110,000). This will get you a system capable of running most games at 1080p with medium to high settings. However, for a more future-proof build with better components, we recommend budgeting $1000-$1200 (KES 137,000-165,000)",
      category: "PC Building"
    },
    {
      question: "Do I need to buy Windows for my new PC build?",
      answer: "While you can install and use Windows 10/11 without activation, you'll have some limitations and a watermark. For a complete experience, we recommend purchasing a legitimate Windows license (approximately $139 or KES 19,000). However, you can start with the unactivated version and upgrade later",
      category: "PC Building"
    },
    {
      question: "How do I know if my components are compatible?",
      answer: "The main compatibility points to check are: <br />- CPU socket matching the motherboard <br />- RAM type and speed supported by the motherboard <br />- Power supply wattage sufficient for all components <br />- Case size accommodating your graphics card and CPU cooler <br /><br />You can use tools like PCPartPicker to verify compatibility automatically",
      category: "Components"
    },
    {
      question: "How often should I clean my PC?",
      answer: "We recommend cleaning your PC every 3-6 months, depending on your environment. If you have pets or live in a dusty area, you might need to clean it more frequently. Regular cleaning helps maintain optimal airflow and prevents overheating",
      category: "Maintenance"
    },
    {
      question: "What's the best CPU and GPU combination for gaming?",
      answer: "This depends on your budget and needs <br /><br />For mid-range gaming: <br />- CPU: AMD Ryzen 5 or Intel i5 <br />- GPU: NVIDIA RTX 3060 or AMD RX 6600 XT <br /><br />For high-end gaming: <br />- CPU: AMD Ryzen 7/9 or Intel i7/i9 <br />- GPU: NVIDIA RTX 4070 Ti or better <br /><br />Always check our build guides for current recommendations!",
      category: "Performance"
    }
  ];
  
  const categories = ['All', 'PC Building', 'Components', 'Troubleshooting', 'Performance', 'Maintenance'];
  
  const filteredFAQs = activeCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  return (
    <div className="faq-page">
      <Header />
      
      <main className="faq-container">
        <section className="hero">
          <h1>Frequently Asked Questions</h1>
          <p className="subtitle">
            Find answers to common questions about PC building and troubleshooting
          </p>
        </section>
        
        <div className="categories">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <section className="faq-list">
          {filteredFAQs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </section>
        
        <FAQForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;