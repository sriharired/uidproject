
import React from 'react';
import MemberCard from './membercard';
import './Section2.css';

const members = [
  {
    name: 'Srinivas Amla',
    title: 'Full Stack Developer',
    description: 'Expert in full-stack development using java.',
    image: 'https://via.placeholder.com/300',
    bgColor: '#1b1b1b'
  },
  {
    name: 'Putha Sri Hari Reddy',
    title: 'Front End Developer using React',
    description: 'Specializes in React, Figma and web design.',
    image: 'https://via.placeholder.com/300',
    bgColor: '#1b1b1b'
  },
  {
    name: 'Srinivas Amla',
    title: 'Full Stack Developer',
    description: 'Expert in full-stack development using java.',
    image: 'https://via.placeholder.com/300',
    bgColor: '#1b1b1b'
  },
  {
    name: 'Srinivas Amla',
    title: 'Full Stack Developer',
    description: 'Expert in full-stack development using java.',
    image: 'https://via.placeholder.com/300',
    bgColor: '#1b1b1b'
  },
];

const TeamMembers = () => {
  return (
    <div className='team-container'>
        <div className='team-heading'>
          <h5>Team Members</h5> 
        </div>
        <div className="teammembers">  
           {members.map((member, index) => (
                <MemberCard
                  key={index}
                  name={member.name}
                  title={member.title}
                  description={member.description}
                  image={member.image}
                  bgColor={member.bgColor}
                />
            ))}
        </div>
    </div>
  )
};

export default TeamMembers;
