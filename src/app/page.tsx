'use client'
import { useState } from 'react'
import { Mail, Phone, Globe, Linkedin, Instagram, MessageCircle, GithubIcon } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'


export default function Home() {
  const handleMessage = (phoneNumber:any) => {
  
    window.location.href = `https://wa.me/${phoneNumber}`;
  };

  const handleAddToContacts = () => {
    window.open('/nizam.vcf', '_blank');
  };  

  return (
 <div className='w-full flex justify-center items-center min-h-screen'>
     <Card className="max-w-md mx-auto overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg m-2">
    <CardHeader className="p-6 bg-slate-100">
      <div className="flex items-center space-x-4">
        <Avatar className="w-20 h-20 border-4 border-slate-400 ">
          <AvatarImage src="/profile.jpeg" alt="Muhammed Nizamudheen" />
          <AvatarFallback>MN</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-bold ">Muhammed Nizamudheen</h2>
          <p className="">Software Developer</p>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-6">
      <div className="space-y-4">
        <Button
          onClick={() => handleMessage('+971569367867')}
          className="w-full "
        >
          <MessageCircle className="mr-2 h-4 w-4" /> Message on WhatsApp
        </Button>
        <Button
          onClick={handleAddToContacts}
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
}
