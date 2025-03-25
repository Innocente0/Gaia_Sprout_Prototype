const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// Contact us page route (GET shows the form)
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

// Contact form POST route (to process form submissions)
router.post('/contact', (req, res) => {
  // Here you would typically save the form data to your database or send an email.
  console.log('Contact Form Data:', req.body);
  res.redirect('/contact');
});

// Services page route
router.get('/services', (req, res) => {
  // Sample data for services; in production, you may load this from your database.
  const services = [
    {
      title: 'Mental Health Support Appointment',
      description: 'Access mental health support through expert consultations.'
    },
    {
      title: 'Chronic Disease Management with Wearable Device Integration',
      description: 'Monitor and manage chronic diseases with state-of-the-art wearables.'
    },
    {
      title: 'Home Based Nursing and Remote Patient Monitoring',
      description: 'Receive professional nursing care and real-time health monitoring at home.'
    },
    {
      title: 'Meal Planning and Weight Management',
      description: 'Get personalized meal plans and weight management advice.'
    },
    {
      title: 'Rescheduling Online Appointment',
      description: 'Easily reschedule appointments with your doctor or nurse.'
    }
  ];
  res.render('services', { title: 'Services', services });
});

// Login page route
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

// Register page route
router.get('/register', (req, res) => {
  res.render('register', { title: 'Register' });
});

module.exports = router;
