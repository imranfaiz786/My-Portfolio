import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import client1 from '../assets/images/client1.jpg';
import client2 from '../assets/images/client2.jpg';
import client3 from '../assets/images/client3.jpg';

const Customer = () => {
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Array of testimonials
  const testimonials = [
    {
      name: 'John R.',
      role: 'CEO',
      testimonial: '“Imran’s expertise transformed our project. His passion for coding and flawless execution was exactly what we needed. Highly recommended!”',
      img: client1,
    },
    {
      name: 'Emma K',
      role: 'Lead Designer',
      testimonial: '“A seamless experience from start to finish. Imran’s approach to understanding our needs and delivering a perfect solution was impressive. Truly outstanding work.”',
      img: client2,
    },
    {
      name: 'Elizabeth Anne',
      role: 'Fashion Designer',
      testimonial: '“Imran’s creativity and technical skills brought my vision to life. His attention to detail and dedication to quality made the project a success. Would gladly collaborate again.”',
      img: client3,
    },
    
  ];

  // Set interval for cycling testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000); // Testimonial changes every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div style={styles.container}>
      <section style={styles.textSection}>
        {/* Text Content and Button Section */}
        <div style={styles.textContent}>
        <div style={styles.textContent1}>
          <h1 style={styles.title}>What My Customers <br /> Says About Me</h1>
          <p style={styles.description}>
            Creating impactful solutions with every project. My clients appreciate my <br />
            ability to bring their visions to life using the latest technologies. <br />
            See what they have to say about our work together.
          </p>
        </div>
        <div style={styles.contactButtonWrapper}>
          <Link
            to="/home"
            style={{
              ...styles.btn,
              ...(isBtnHovered ? styles.btnHover : {}),
            }}
            onMouseEnter={() => setIsBtnHovered(true)}
            onMouseLeave={() => setIsBtnHovered(false)}
          >
            See All My Works
          </Link>
          </div>
        </div>

        {/* Testimonial Section */}
        <div style={styles.testimonialContainer}>
          <div style={styles.testimonialBox}>
            <div style={styles.testimonialContent}>
              <img 
                src={testimonials[currentTestimonialIndex].img} 
                alt={testimonials[currentTestimonialIndex].name} 
                style={styles.profileImg} 
              />
              <div style={styles.textContent}>
                <h3 style={styles.name}>{testimonials[currentTestimonialIndex].name}</h3>
                <p style={styles.role}>{testimonials[currentTestimonialIndex].role}</p>
                <p style={styles.testimonial}>{testimonials[currentTestimonialIndex].testimonial}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px',
    height: '486px',
    backgroundColor: '#040402',
  },
  textSection: {
    display: 'flex',
    flexDirection: 'row',
    gap: '60px', // Adds space between the text and testimonial
    alignItems: 'flex-start',
  },
  textContent1: {
  display: 'flex',
  flexDirection: 'column',
  },
  textContent: {
    color: '#fff',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '15px',
    color: '#e2b479',
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.6',
  },
  contactButtonWrapper: {
    display: 'flex',
    marginTop: '40px',
  },
  btn: {
    padding: '16px 36px',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    borderRadius: '50px',
    border: '2px solid #e2b479',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    cursor: 'pointer',
  },
  btnHover: {
    backgroundColor: '#e2b479',
    transform: 'scale(1.05)',
  },
  testimonialContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  testimonialBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: '8px',
    border: '1px solid #fff',
    width: '520px',
    height: '300px',
  },
  testimonialContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  profileImg: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '140px',
    border: '1px solid #fff',
    marginLeft: '30px',
    padding: '4px',
  },
  name: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#e2b479',
  },
  role: {
    fontSize: '1rem',
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  testimonial: {
    fontSize: '1rem',
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: '1.5',
    marginLeft: '-100px',
    width: '450px',
  },
};

export default Customer;
