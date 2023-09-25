import '../asserts/css/Newdashboard.css'
import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell,
} from 'recharts';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUser, FaFileAlt, FaRegLightbulb, FaUsers } from 'react-icons/fa'; // Import icons
import '../component/dashboard';
import MiniDrawer from '../component/dashboard';
import Dashboard from '../component/dashboard';



const Newdashboard = () => {
  const [userData] = useState({
    numberOfUsers: 96,
    numberOfResumes: 150,
    numberOfTemplates: 100,
    numberOfOnlineUsers: 50,
  });

  const barChartData = [
    { name: 'Active Users', value: userData.numberOfUsers },
    { name: 'Resumes Created', value: userData.numberOfResumes },
    { name: 'Available Templates', value: userData.numberOfTemplates },
    { name: 'Members', value: userData.numberOfOnlineUsers },
  ];

  const pieChartData = [
    { name: 'Active Users', value: userData.numberOfUsers },
    { name: 'Resumes Created', value: userData.numberOfResumes },
    { name: 'Available Templates', value: userData.numberOfTemplates },
    { name: 'Members', value: userData.numberOfOnlineUsers },
  ];

  const COLORS = ['#FF5733', '#33FF5B', '#339AFF', '#FFA500'];

  return (
<div className='change'>
    <Container fluid className="dashboard-container">
      <Dashboard/>
      <div className="dashboard-content">
        <h1> 
        <header className='sedh'>Dashboard</header>
        </h1>

        <Row className="horizontal-cards">
          {barChartData.map((data, index) => (
            <Col key={index} lg={3} md={6} className="mb-4">
              <Card className="dashboard-card">
                <Card.Body>
                  <div className="card-icon">
                    {index === 0 && <FaUser />}
                    {index === 1 && <FaFileAlt />}
                    {index === 2 && <FaRegLightbulb />}
                    {index === 3 && <FaUsers />}
                  </div>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text>{data.value}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="chart-container">
          <div className="chart chart-pie">
            <PieChart width={300} height={350}>
              <Pie
                data={pieChartData}
                cx={145}
                cy={120}
                innerRadius={20}
                outerRadius={127}
                paddingAngle={10}
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend className="chart-legend" />
            </PieChart>
          </div>

          <div className="chart chart-bar">
            <BarChart width={627} height={350} data={barChartData}>
              <XAxis dataKey="name" tick={{ fill: '#333', fontSize: 14 }} />
              <YAxis tick={{ fill: '#333', fontSize: 14 }} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend className="chart-legend" />
              <Bar dataKey="value" fill="#339AFF" barSize={60} />
            </BarChart>
          </div>
        </div>
        
      </div>
    </Container>
    
  </div>
  );
};

export default Newdashboard;