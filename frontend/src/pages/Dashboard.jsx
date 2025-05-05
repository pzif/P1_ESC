import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Bem-vindo ao Painel</h1>
      <nav style={{ marginTop: '20px' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/cursos">Cursos</Link>
          </li>
          {/* Adicione mais links aqui se quiser */}
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
