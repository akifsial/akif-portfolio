import React from 'react'
import Sidebar from './components/Sidebar';
import SidebarTab from './components/SidebarTab';
import ContactForm from './components/ContactForm';

function Contact() {
  return (
    <div className='lg:flex-row overflow-y-auto flex flex-col w-[100%] h-[100%] '>
      <div className='w-full h-full lg:w-[20.3%]'>
        <Sidebar />
      </div>
      <div className='w-full lg:w-[79.7%] lg:overflow-y-auto'>
        <SidebarTab />
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact;