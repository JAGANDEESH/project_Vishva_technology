import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [NgFor],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Chief Technology Officer',
      bio: 'Rajesh leads our engineering team with 15+ years of experience in enterprise software and cloud architecture.',
      img: 'assets/img/team/doctors-1.jpg',
      twitter: '#', facebook: '#', linkedin: '#', instagram: '#'
    },
    {
      name: 'Priya Sharma',
      role: 'Lead UI/UX Designer',
      bio: 'Priya crafts beautiful, user-centric experiences with a background in cognitive science and digital product design.',
      img: 'assets/img/team/doctors-2.jpg',
      twitter: '#', facebook: '#', linkedin: '#', instagram: '#'
    },
    {
      name: 'Arun Patel',
      role: 'Full Stack Developer',
      bio: 'Arun specializes in Angular, Node.js and cloud technologies, having delivered 80+ successful projects.',
      img: 'assets/img/team/doctors-3.jpg',
      twitter: '#', facebook: '#', linkedin: '#', instagram: '#'
    },
    {
      name: 'Meera Iyer',
      role: 'AI/ML Engineer',
      bio: 'Meera brings cutting-edge machine learning solutions, with research publications in computer vision and NLP.',
      img: 'assets/img/team/doctors-4.jpg',
      twitter: '#', facebook: '#', linkedin: '#', instagram: '#'
    }
  ];
}
