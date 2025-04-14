"use client";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Send, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function ContactUs() {
  // MOVIS color scheme
  const colors = {
    green: "#4CB986",
    yellow: "#D9D56E",
    orange: "#E79663",
    red: "#E7755B",
    background: "#FFFEF3"
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    
    window.location.href = `mailto:movis@vit.ac.in?subject=${subject}&body=${body}`;
    
    alert(`Thanks for your message, ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-12" style={{ backgroundColor: colors.background }}>
      <h1 className="text-5xl font-bold text-center mb-8">
        <span className="text-black">Contact </span>
        <span style={{ color: colors.green }}>Te</span>
        <span style={{ color: colors.yellow }}>am </span>
        <span style={{ color: colors.orange }}>MO</span>
        <span style={{ color: colors.red }}>VIS</span>
      </h1>
      
      <div className="max-w-3xl mx-auto text-center mb-12 text-gray-600">
        <p className="text-lg">
          Have questions or want to collaborate? Reach out to us through any of these channels.
          We'd love to hear from you!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Contact Information Card */}
        <Card className="border-0 shadow-md rounded-2xl overflow-hidden bg-white">
          <div className="h-2" style={{ backgroundColor: colors.green }}></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2">
              <MapPin className="h-5 w-5" style={{ color: colors.green }} />
              <span>Our Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 rounded-md" style={{ backgroundColor: `${colors.green}20`, color: colors.green }}>
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600 text-sm">
                    Vellore Institute of Technology<br />
                    Kelambakkam - Vandalur Rd, Chennai, Tamil Nadu - 600127
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 rounded-md" style={{ backgroundColor: `${colors.yellow}20`, color: colors.yellow }}>
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600 text-sm">
                    movis@vit.ac.in<br />

                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 rounded-md" style={{ backgroundColor: `${colors.orange}20`, color: colors.orange }}>
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600 text-sm">
                    +91 XXXXX XXXXX <br />
                    +91 XXXXX XXXXX 
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-medium mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/movisvitcc/"  target="_blank" className="p-2 rounded-md hover:bg-gray-50" style={{ color: colors.red }}>
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/movisvitcc/" target="_blank"  className="p-2 rounded-md hover:bg-gray-50" style={{ color: colors.red }}>
                    <Linkedin className="h-5 w-5" />
                  </a>
                  
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form Card */}
        <Card className="border-0 shadow-md rounded-2xl overflow-hidden bg-white">
          <div className="h-2" style={{ backgroundColor: colors.red }}></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2">
              <Send className="h-5 w-5" style={{ color: colors.red }} />
              <span>Send Us a Message</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: colors.green, focusRingColor: colors.green }}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: colors.yellow, focusRingColor: colors.yellow }}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: colors.orange, focusRingColor: colors.orange }}
                  required
                ></textarea>
              </div>

              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-2"
                  style={{ backgroundColor: colors.red, hoverBg: `${colors.red}D0` }}
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Location Map Section */}
      <div className="max-w-6xl mx-auto">
        <Card className="border-0 shadow-md rounded-2xl overflow-hidden bg-white">
          <div className="h-2" style={{ backgroundColor: colors.orange }}></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2">
              <MapPin className="h-5 w-5" style={{ color: colors.orange }} />
              <span>Find Us at VIT</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 p-0">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497683.80311319063!2d79.38369216057679!3d12.96195019839876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e491f67%3A0x944b42131b757d2d!2sVellore%20Institute%20of%20Technology%20-%20Chennai!5e0!3m2!1sen!2sin!4v1744520110604!5m2!1sen!2sin" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                className="rounded-b-xl"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}