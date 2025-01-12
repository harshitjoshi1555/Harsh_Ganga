import React from 'react';
import ServiceCard from '../components/ServiceCard';





const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <ServiceCard title="CSC Center" description="Comprehensive CSC services to cater to your needs." />
      <ServiceCard title="T-shirt Printing" description="Custom T-shirt printing services with vibrant designs." />
      <ServiceCard title="Wedding Car Decoration" description="Elegant and stylish wedding car decoration." />
    </div>
  );
};

export default Services;
