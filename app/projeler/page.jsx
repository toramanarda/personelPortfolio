import Image from 'next/image';
import ecommerce from '@/assets/projects/ecommerce.png';
import memorygame from '@/assets/projects/memorygame.png';
import mortgage from '@/assets/projects/mortgage.png';
import pomodoro from '@/assets/projects/pomodoro.png';
import tictactoe from '@/assets/projects/ticTacToe.png';
import tipCalc from '@/assets/projects/tipCalc.png';

import React from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Ticaret Projesi',
    description: 'E-Ticaret platformu için oluşturulmuş bir proje.',
    link: 'https://e-commerce-mu-sandy-58.vercel.app/',
    image: ecommerce 
  },
  {
    id: 2,
    title: 'Bahşiş Hesaplayıcı',
    description: 'Restoranlarda bahşiş hesaplamak için bir uygulama.',
    link: 'https://tip-calc-react-rho.vercel.app/',
    image: tipCalc 

  },
 
  {
    id: 3,
    title: 'Mortgage Hesaplayıcı',
    description: 'Konut kredisi hesaplamaları için bir araç.',
    link: 'https://mortgage-repayment-calc.vercel.app/',
    image: mortgage 
  },
  {
    id: 4,
    title: 'Pomodoro Zamanlayıcı',
    description: 'Pomodoro tekniğiyle zaman yönetimi için bir uygulama.',
    link: 'https://pomodoro-app-gules-omega.vercel.app/',
    image: pomodoro 
  },
  {
    id: 5,
    title: 'Tic Tac Toe',
    description: 'Klasik Tic Tac Toe oyunu.',
    link: 'https://tictactoe-sage-seven.vercel.app/',
    image: tictactoe 
  },
  {
    id: 6,
    title: 'Hafıza Oyunu',
    description: 'Zihinsel becerileri geliştiren bir hafıza oyunu.',
    link: 'https://memorygamereact-wine.vercel.app/',
    image: memorygame 
  }

];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projelerim</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.image}
                alt={project.title}
                className="project-image"
                layout="responsive"
                width={500}
                height={300}
              
              />
            </a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Daha Fazla Bilgi
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
