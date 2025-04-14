"use client";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Users, CalendarCheck, ChevronRight, Clock, AlertCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function JoinUs() {
  // MOVIS color scheme
  const colors = {
    green: "#4CB986",
    yellow: "#D9D56E",
    orange: "#E79663",
    red: "#E7755B",
    background: "#FFFEF3"
  };

  const recruitmentPhases = [
    {
      id: 1,
      name: "Form Release",
      description: "Application form will be available on our website",
      date: "Coming Soon",
      status: "pending",
      progress: 0
    },
    {
      id: 2,
      name: "Application Period",
      description: "Submit your application before deadline",
      date: "TBD",
      status: "upcoming",
      progress: 0
    },
    {
      id: 3,
      name: "Technical Screening",
      description: "Domain-specific technical assessment",
      date: "TBD",
      status: "upcoming",
      progress: 0
    },
    {
      id: 4,
      name: "Interviews",
      description: "Personal interview with our team leads",
      date: "TBD",
      status: "upcoming",
      progress: 0
    }
  ];

  const domains = [
    {
      id: 1,
      name: "Mechanical Engineering",
      description: "CAD design, prototyping, mechanical systems",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>,
      color: colors.green
    },
    {
      id: 2,
      name: "Electronics & Embedded Systems",
      description: "Circuit design, PCB fabrication, microcontroller programming",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>,
      color: colors.yellow
    },
    {
      id: 3,
      name: "Software Development",
      description: "App development, AI/ML, web development",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>,
      color: colors.orange
    },
    {
      id: 4,
      name: "Research & Strategy",
      description: "Project planning, documentation, outreach",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>,
      color: colors.red
    }
  ];

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = `MOVIS Recruitment Notification Request`;
    const body = `Hello Team MOVIS,%0D%0A%0D%0AI would like to be notified when applications for Team MOVIS open.%0D%0A%0D%0AName: ${name || 'Not provided'}%0D%0AEmail: ${email}%0D%0A%0D%0AThank you!`;
    
    window.location.href = `mailto:movis@vit.ac.in?subject=${subject}&body=${body}`;
    
    alert(`Thanks for your interest! Your email client should open with a pre-filled message to our team.`);
    setEmail('');
    setName('');
  };

  return (
    <div className="container mx-auto px-4 py-12" style={{ backgroundColor: colors.background }}>
      <h1 className="text-5xl font-bold text-center mb-8">
        <span className="text-black">Join </span>
        <span style={{ color: colors.green }}>Te</span>
        <span style={{ color: colors.yellow }}>am </span>
        <span style={{ color: colors.orange }}>MO</span>
        <span style={{ color: colors.red }}>VIS</span>
      </h1>
      
      <div className="max-w-3xl mx-auto text-center mb-12 text-gray-600">
        <p className="text-lg">
          We're preparing to welcome new members! The application form will be released soon. 
          Stay tuned for updates on our recruitment process.
        </p>
      </div>

      {/* Coming Soon Highlight Card */}
      <div className="max-w-4xl mx-auto mb-16">
        <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white">
          <div className="h-2" style={{ backgroundColor: colors.orange }}></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl flex items-center gap-3">
              <Clock className="h-6 w-6" style={{ color: colors.orange }} />
              <span>Application Form Coming Soon</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: `${colors.orange}20` }}>
                  <Clock className="h-16 w-16" style={{ color: colors.orange }} />
                  <div className="absolute inset-0 border-4 border-dashed rounded-full" 
                       style={{ borderColor: colors.orange }}></div>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-3">We're putting the final touches!</h3>
                <p className="text-gray-600 mb-4">
                  Our team is currently preparing the application process for the 2025-26 season. 
                  The form will be available on this page when we launch.
                </p>
                <div className="flex items-center gap-2 text-sm" style={{ color: colors.orange }}>
                  <AlertCircle className="h-4 w-4" />
                  <span>Expected release: August 2025</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="border-0 shadow-md rounded-2xl overflow-hidden bg-white">
          <div className="h-2" style={{ backgroundColor: colors.green }}></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2">
              <Users className="h-5 w-5" style={{ color: colors.green }} />
              <span>Why Join MOVIS?</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mr-3" style={{ color: colors.green }}>
                  <ChevronRight className="h-5 w-5" />
                </div>
                <span>Work on cutting-edge robotics and AI projects</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mr-3" style={{ color: colors.green }}>
                  <ChevronRight className="h-5 w-5" />
                </div>
                <span>Represent VIT at national and international competitions</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mr-3" style={{ color: colors.green }}>
                  <ChevronRight className="h-5 w-5" />
                </div>
                <span>Learn from experienced seniors and industry experts</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mr-3" style={{ color: colors.green }}>
                  <ChevronRight className="h-5 w-5" />
                </div>
                <span>Develop skills that will boost your career</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md rounded-2xl overflow-hidden bg-white">
          <div className="h-2" style={{ backgroundColor: colors.yellow }}></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2">
              <CalendarCheck className="h-5 w-5" style={{ color: colors.yellow }} />
              <span>Recruitment Timeline</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-6">
              {recruitmentPhases.map((phase) => (
                <div key={phase.id} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className={`flex items-center justify-center h-8 w-8 rounded-full ${
                      phase.status === 'pending' ? 'bg-gray-300' : 'bg-gray-100'
                    }`}>
                      {phase.id}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className={`font-medium ${
                        phase.status === 'pending' ? 'text-gray-900' : 'text-gray-500'
                      }`}>{phase.name}</h3>
                      <span className="text-sm" style={{ color: colors.orange }}>{phase.date}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{phase.description}</p>
                    {phase.id === 1 && (
                      <div className="mt-2">
                        <Progress value={20} className="h-2" style={{ backgroundColor: `${colors.yellow}30` }} />
                        <p className="text-xs mt-1 text-right" style={{ color: colors.orange }}>In preparation</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-black">Domains </span>
          <span style={{ color: colors.green }}>We</span>
          <span style={{ color: colors.yellow }}> Rec</span>
          <span style={{ color: colors.orange }}>ruit </span>
          <span style={{ color: colors.red }}>For</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain) => (
            <Card key={domain.id} className="border-0 shadow-md rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-shadow">
              <div className="h-2" style={{ backgroundColor: domain.color }}></div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md" style={{ backgroundColor: `${domain.color}20`, color: domain.color }}>
                    {domain.icon}
                  </div>
                  <CardTitle className="text-lg">{domain.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{domain.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card className="border-0 shadow-md rounded-2xl overflow-hidden bg-white">
          <div className="h-2" style={{ backgroundColor: colors.red }}></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2">
              <Mail className="h-5 w-5" style={{ color: colors.red }} />
              <span>Get Notified When We Launch</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-6">
              <p className="text-gray-600">
                Want to be the first to know when applications open? Fill in your details and we'll notify you.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name (optional)"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 mb-3"
                    style={{ borderColor: colors.orange, focusRingColor: colors.orange }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                    style={{ borderColor: colors.red, focusRingColor: colors.red }}
                    required
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    className="flex-1 flex items-center justify-center gap-2" 
                    style={{ backgroundColor: colors.green }}
                  >
                    Send Notification
                  </Button>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}