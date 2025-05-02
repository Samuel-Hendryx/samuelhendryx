// @/resume/
import Image from 'next/image';
import React from 'react';

const Resume = () => {
  return( 
  <div className='min-h-[calc(100vh-60px)] h-full max-w-[1000px] flex flex-col mx-auto px-2 justify-center items-center'>
    <div className='flex space-x-4 p-4 items-center max-w-[700px] w-full'>
      <Image className='me-circle' src='/assets/images/photos/samuelhendryx.png' width='150' height='150' alt='Samuel Hendryx' />
      <div className='flex flex-col p-2'>
        <h1>Samuel Hendryx</h1>
        <h2>Software Developer</h2>
      </div>
    </div>
    <div className='p-2 max-w-[700px] w-full'>
      <div className='py-2'>
        <h2>HCL America</h2>
        <h3>HCLTech</h3>
        <h4>Junior Developer</h4>
        <p>Worked for HCL for 3 years on a variety of software engineering projects.  Also taught AI courses to 
          software engineers.  Developed the course to help other technical professionals update their knowledge and 
          skills in emerging technologies. The most relevant courses were a course on AI tools for android app testing 
          and a Linux course on command line tools and file permissions. Created curriculum and PowerPoints to deliver 
          clear concise lessons.</p>
        <p>Tools: Tools: Android Studio, VSCode, Microsoft Office, Linux.</p>
        <h3>Verizon</h3>
        <h4>Software Engineer</h4>
        <p>Designed and developed RESTful APIs using Python. Integrated APIs with MySQL, NewRelic, and Amazon AWS APIs. 
          Developed and maintained API documentation and specifications. Developed and maintained unit tests. Conducted 
          extensive troubleshooting and debugging of API issues. Worked closely with customer/user teams and management 
          to ensure that software specifications, documentation, functionality and user manual met expectations.  
          Personally responsible for writing the user manual and documentation for the team. Collaborated with teams of 
          other developers and stakeholders to ensure software reliability and quality. Documented and delivered 
          product presentation at handoff meeting to stakeholders.</p>
        <p>Tools: AWS (boto3), Python, Jira, VSCode, Postman, Confluence, GitLab, Google Docs.</p>
        <h3>Google</h3>
        <h4>Software Engineer</h4>
        <p>Designed and developed Selenium automated tests in Python and Java. Designed and developed functional, 
          integration, unit, and screen-diffing tests. Seeded and tested basic and custom web content for function and 
          appearance. Configured virtual test servers and environments in Python, Kotlin, and Go. Onboarded new 
          teammates, and assisted in setup of development environments. Provided coding assistance and guidance to 
          conform to Google standards. Ran daily standups and delegated tasks. Participated in the code review process, 
          and approved code.</p>
        <p>Tools: Selenium, Python, Java, JavaScript, Kotlin, Go, Linux, Buganizer, Task Manager, Critique, VSCode</p>
      </div>
      <div className='py-2'>
        <h2>California State University, Sacramento</h2>
        <h3>Student Assistant</h3>
        <h4>Computer Lab Assistant</h4>
        <p>Procured hardware and software for the College of Engineering and Computer Science for faculty, staff and 
          students in lab environments, for individual faculty and department offices. Communicated with vendors for 
          bids and equipment. Worked with the Computer Services team and vendors to schedule service and repair of 
          equipment. Responsible for computer troubleshooting, repair, and configuration. Assisted with the design, 
          layout and configuration of hardware. Documented lab layouts and configurations. Assisted students and 
          professors with hardware and software issues.</p>
      </div>
      <div className='py-2'>
        <h2>California Precision Service</h2>
        <h3>IT Department Lead</h3>
        <p>Installation, maintenance, updating and troubleshooting of hardware and software; debugging network issues; 
          and configuring servers. Configured group based access privileges for Windows accounts. Configured the print 
          server, and peripherals, and set default printers for client machines. Designed and configured on-site backup 
          server and wrote backup scripts. On-call support: troubleshooting, problem solving, debugging, resolving 
          technical issues.</p>
        <h3>Subcontract Manager / Lead Technician</h3>
        <p>Managed 6 lens optical repair technicians. Developed technical manuals for complex 
        adjustment equipment. Trained technicians on lens optical repair and adjustment. Reduced reworks by 10%. 
        Increased production by 30%.</p>
        <h3>Master Canon Repair Technician</h3>
        <p>Self taught to repair Canon lenses and digital SLRs. Increased in-house repairs by 20%. Increased 
          profit by 25%. Decreased turn around time by 30%.</p>
      </div>
    </div>
  </div>
  );
};

export default Resume;