'use client';

import React from 'react';
import { Mail, Phone, Globe, Linkedin, Instagram, MessageCircle, GithubIcon } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Page = () => {
  return (
    <div className="font-sans text-center mx-auto p-6 max-w-4xl">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white p-6 rounded-lg mb-6">
        <h1 className="text-2xl font-bold">Opportunity to Join your team!</h1>
      </div>

      {/* Content Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Hello there!</h2>
        <p className="text-gray-700 mb-4">
        I am <span className='font-bold font-sans'>Muhammed Nizamudheen</span>  writing to express my interest to join your team. With a strong background in both frontend and backend development specializing in MERN and Next.js, I am confident in my ability to contribute effectively to your team.!</p>
        <p className="text-gray-700 mb-4">
        Seeking a position with a progressive company that offers opportunities
for career advancement. </p>
        <p className="text-gray-700">Attached is my resume, which gives a detailed overview of my experience and skills</p>
      </div>

      {/* Contact Card */}
      <Card className=" p-6 rounded-lg mt-3">
    <CardHeader className="p-0">
      <div className="flex items-center space-x-4">
        <Avatar className="w-20 h-20 border-4 border-slate-400 ">
          <AvatarImage className='scale-125' src="/profile.jpeg" alt="Muhammed Nizamudheen" />
          <AvatarFallback>MN</AvatarFallback>
        </Avatar>
        <div className='text-left'>
          <h2 className="text-2xl font-bold ">Muhammed Nizamudheen</h2>
          <p className="">Software Developer</p>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-2">
      <div className="space-y-2">
        <Button
          className="w-full "
        >
          <MessageCircle className="mr-2 h-4 w-4" /> Message on WhatsApp
        </Button>
        <Button
          variant="outline"
          className="w-full"
        >
          Add to Contacts
        </Button>
        <div className="pt-4 space-y-2">
          <a href="mailto:nizam@winndeal.com" className="flex items-center text-sm ">
            <Mail className="mr-2 h-4 w-4" /> nizam@winndeal.com
          </a>
          <a href="tel:+971569367867" className="flex items-center text-sm ">
            <Phone className="mr-2 h-4 w-4" /> +971 56 936 7867
          </a>
          <a href="tel:+917560845014" className="flex items-center text-sm ">
            <Phone className="mr-2 h-4 w-4" /> +91 7560845014
          </a>
          <a href="https://www.nizamudheen.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm ">
            <Globe className="mr-2 h-4 w-4" /> www.nizamudheen.com
          </a>
        </div>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out`}>
          <div className="pt-4 flex justify-center space-x-4">
            <a href="https://github.com/novus318" target="_blank" rel="noopener noreferrer" className="text-gray-600 ">
              <GithubIcon className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/muhammednizamudheen/" target="_blank" rel="noopener noreferrer" className="text-gray-600 ">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://instagram.com/n_i_zam___" target="_blank" rel="noopener noreferrer" className="text-gray-600 ">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
    </div>
  );
};

export default Page;
