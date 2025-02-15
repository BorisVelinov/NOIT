// src/components/sections/Statistics/Statistics.jsx
import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import './Statistics.css';

const Statistics = () => {
  // Sample data for the brand statistics
  const brandData = [
    { name: 'BMW', value: 3000 },
    { name: 'Mercedes', value: 2500 },
    { name: 'Audi', value: 2200 },
    { name: 'Other', value: 2800 }
  ];

  // Sample data for search accuracy
  const accuracyData = [
    { name: 'BMW', accuracy: 85 },
    { name: 'Mercedes', accuracy: 85 },
    { name: 'Audi', accuracy: 75 },
    { name: 'Other', accuracy: 82 }
  ];

  return (
    <section className="statistics-section">
      <div className="content-container">
        <h2 className="section-title">STATISTICS</h2>
        
        <div className="stats-grid">
          <div className="chart-container">
            <h3 className="subsection-title">MOST CHECKED BRANDS</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={brandData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="accuracy-container">
            <h3 className="subsection-title">SEARCH ACCURACY</h3>
            {accuracyData.map(item => (
              <div className="accuracy-item" key={item.name}>
                <span className="brand-name">{item.name}</span>
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar-fill" 
                    style={{width: `${item.accuracy}%`}}
                  >
                    <span className="progress-text">{item.accuracy}%</span>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="stat-note">
              <p>The statistics has been generated by checking popular brands and models through our product. Verified by comparing the data with our own research and consulting with data analysts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;