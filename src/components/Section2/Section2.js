
import React from 'react';
import MemberCard from './membercard';
import './Section2.css';

const members = [
  {
    name: 'Srinivas Amla',
    title: 'Full Stack Developer',
    description: 'Expert in full-stack development using java & React-JS.',
    image: 'member1.jpg',
    bgColor: '#1b1b1b'
  },
  {
    name: 'Putha Sri Hari Reddy',
    title: 'Front End Developer using React',
    description: 'Specializes in React, Figma , Git and web design.',
    image: 'member2.jpg',
    bgColor: '#1b1b1b'
  },
  {
    name: 'Keerthi',
    title: 'Front End Developer and designer',
    description: 'Specializes in Html,Css,Js.',
    image: 'member3.jpg',
    bgColor: '#1b1b1b'
  },
  {
    name: 'Janshi',
    title: 'Web designer',
    description: 'Expertizes in Figma, Bootcamp, Canva.',
    image: 'member4.jpg',
    bgColor: '#1b1b1b'
  },

];

const TeamMembers = () => {
  return (
    <div className='team-container' id='teammembers'>
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
