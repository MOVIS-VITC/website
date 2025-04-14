"use client";
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Calendar, Trophy, Flag } from 'lucide-react';

export default function Project() {
  const [activeTab, setActiveTab] = useState('conducted');

  // MOVIS color scheme
  const colors = {
    green: "#4CB986",
    yellow: "#D9D56E",
    orange: "#E79663",
    red: "#E7755B",
    background: "#FFFEF3"
  };

  const conductedEvents = [
    {
      id: 1,
      name: "Drone Challenge",
      description: "Conducted event for TechnoVIT'22",
      date: "September 2022",
      type: "Event"
    },
    {
      id: 2,
      name: "Fastest Line Follower",
      description: "Conducted event for TechnoVIT'22",
      date: "September 2022",
      type: "Event"
    },
    {
      id: 3,
      name: "Robotics 101",
      description: "Conducted workshop for TechnoVIT'22",
      date: "September 2022",
      type: "Workshop"
    },
    {
      id: 4,
      name: "STEM Sessions",
      description: "17 STEM Engagements sessions conducted at multiple educational institutions across India",
      date: "September 2022 - March 2023",
      type: "Workshop"
    },
    {
      id: 5,
      name: "Exploration X",
      description: "Conducted a STEM session on the event of HERC",
      date: "February 2023",
      type: "Workshop"
    }
  ];

  const participatedEvents = [
    {
      id: 1,
      name: "Together 2022",
      place: "Top 100 at Together 2022",
      date: "January 2022",
      achievement: "Top 100"
    },
    {
      id: 2,
      name: "DISQcovery Bootcamp",
      place: "19th position across India",
      date: "January 2022",
      achievement: "19th Position"
    },
    {
      id: 3,
      name: "Electrifying Transportation",
      place: "2nd Place overall",
      date: "January 2022",
      achievement: "2nd Place"
    },
    {
      id: 4,
      name: "Kartavyam 2.0",
      place: "Semifinalists at Kartavyam 2.0",
      date: "February 2022",
      achievement: "Semifinalist"
    },
    {
      id: 5,
      name: "NASA Human Exploration Rover Challenge 2023",
      place: "Participation in Excursion and top performing Indian team for the year 2023",
      date: "April 2023",
      achievement: "Top Indian Team"
    },
    {
      id: 6,
      name: "HX-Synthetix 23 Makeathon",
      place: "2nd place in Mechanical Design",
      date: "May 2023",
      achievement: "2nd Place"
    },
    {
      id: 7,
      name: "HX-Synthetix 23 Makeathon",
      place: "2nd place in Electronics Design",
      date: "May 2023",
      achievement: "2nd Place"
    },
    {
      id: 8,
      name: "Technoxian",
      place: "Top 15 overall",
      date: "Aug 2024",
      achievement: "Top 15"
    }
  ];

  const ongoingCompetitions = [
    {
      id: 1,
      name: "GenAI Hackathon",
      status: "Round 1",
      duration: "(Feb 2025) Ongoing",
      color: colors.green
    },
    {
      id: 2,
      name: "Iroc",
      status: "Round 2",
      duration: "December 2024-August 2025",
      color: colors.yellow
    },
    {
      id: 3,
      name: "Nasa Herc 2024",
      status: "In Progress",
      duration: "2024-2025",
      color: colors.orange
    }
  ];

  const getBadgeVariant = (type) => {
    switch (type) {
      case "Event": return "default";
      case "Workshop": return "outline";
      default: return "secondary";
    }
  };

  const getAchievementColor = (achievement) => {
    if (achievement.includes("2nd Place")) return colors.yellow;
    if (achievement.includes("Top")) return colors.green;
    return colors.orange;
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-[#FFFEF3]">
      <h1 className="text-6xl font-bold text-center mb-10">
        <span className="text-black">Our </span>
        <span style={{ color: colors.green }}>Pro</span>
        <span style={{ color: colors.yellow }}>je</span>
        <span style={{ color: colors.orange }}>c</span>
        <span style={{ color: colors.red }}>ts</span>
      </h1>
      
      <div className="max-w-4xl mx-auto text-center mb-12 text-gray-600">
        <p className="text-xl">
          Explore our journey through various competitions, workshops, and events that showcase 
          our innovation and technical expertise aligned with the Sustainable Development Goals.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button 
              onClick={() => setActiveTab('conducted')}
              className={`px-8 py-4 text-lg font-medium rounded-l-lg ${activeTab === 'conducted' 
                ? 'bg-black text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              Events Conducted
            </button>
            <button 
              onClick={() => setActiveTab('participated')}
              className={`px-8 py-4 text-lg font-medium ${activeTab === 'participated' 
                ? 'bg-black text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              Events Participated
            </button>
            <button 
              onClick={() => setActiveTab('ongoing')}
              className={`px-8 py-4 text-lg font-medium rounded-r-lg ${activeTab === 'ongoing' 
                ? 'bg-black text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              Ongoing Competitions
            </button>
          </div>
        </div>

        {activeTab === 'conducted' && (
          <Card className="border-0 shadow-md rounded-2xl overflow-hidden bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-3xl flex items-center gap-2">
                <Calendar className="h-6 w-6" style={{ color: colors.green }} />
                <span>Events & Workshops Conducted by Team MOVIS</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16 text-lg">Sr. No.</TableHead>
                      <TableHead className="text-lg">Activities</TableHead>
                      <TableHead className="text-lg">Description</TableHead>
                      <TableHead className="text-lg">Date</TableHead>
                      <TableHead className="w-24 text-lg">Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {conductedEvents.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell className="font-medium text-lg">{event.id}</TableCell>
                        <TableCell className="font-medium text-lg">{event.name}</TableCell>
                        <TableCell className="text-gray-600 text-lg">{event.description}</TableCell>
                        <TableCell className="text-lg">{event.date}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={getBadgeVariant(event.type)}
                            className="text-base px-3 py-1"
                            style={{ 
                              backgroundColor: event.type === "Event" ? colors.green : "transparent",
                              color: event.type === "Event" ? "white" : colors.green,
                              borderColor: colors.green
                            }}
                          >
                            {event.type}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}
        
        {activeTab === 'participated' && (
          <Card className="border-0 shadow-md rounded-2xl overflow-hidden bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-3xl flex items-center gap-2">
                <Trophy className="h-6 w-6" style={{ color: colors.yellow }} />
                <span>Events Participated in by Team MOVIS</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16 text-lg">Sr. No.</TableHead>
                      <TableHead className="text-lg">Event Name</TableHead>
                      <TableHead className="text-lg">Place/Achievement</TableHead>
                      <TableHead className="text-lg">Date</TableHead>
                      <TableHead className="w-28 text-lg">Achievement</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {participatedEvents.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell className="font-medium text-lg">{event.id}</TableCell>
                        <TableCell className="font-medium text-lg">{event.name}</TableCell>
                        <TableCell className="text-gray-600 text-lg">{event.place}</TableCell>
                        <TableCell className="text-lg">{event.date}</TableCell>
                        <TableCell>
                          <Badge 
                            variant="outline"
                            className="text-base px-3 py-1"
                            style={{ 
                              backgroundColor: "transparent",
                              color: getAchievementColor(event.achievement),
                              borderColor: getAchievementColor(event.achievement)
                            }}
                          >
                            {event.achievement}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}
        
        {activeTab === 'ongoing' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ongoingCompetitions.map((competition) => (
              <Card key={competition.id} className="border-0 shadow-md rounded-2xl overflow-hidden bg-white">
                <div className="h-3" style={{ backgroundColor: competition.color }}></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl">
                    {competition.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-lg">
                      <span className="text-gray-500">Current Status:</span>
                      <span className="font-medium">{competition.status}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span className="text-gray-500">Timeline:</span>
                      <span className="font-medium">{competition.duration}</span>
                    </div>
                    <div className="pt-3">
                      <div className="w-full bg-gray-100 rounded-full h-3">
                        <div 
                          className="h-3 rounded-full" 
                          style={{ 
                            width: competition.id === 1 ? '30%' : competition.id === 2 ? '65%' : '45%',
                            backgroundColor: competition.color
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}