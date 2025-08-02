import React from 'react'
import { socials } from '../socials';
import { FaEnvelope } from 'react-icons/fa6';


const LeftComponent = () => {
  const openResume = () => {
    window.open("/resume.pdf");
  };
  return (
    <div className="w-full lg:w-[400px] lg:sticky lg:top-6 lg:h-fit mb-5" >
    {/* Profile Header */}
    <div className="flex items-center gap-4 mb-5">
      <img
        src="/me.png"
        alt="Profile"
        width={120}
        height={120}
        className="rounded-full"
      />
      <div>
        <h1 className="text-2xl font-mono font-bold">Himanshu Prakash Mishra</h1>
        <p className="text-sm text-base-content/70">Full Stack Developer</p>
      </div>
    </div>

    {/* Bio */}
    <div className="space-y-6">
      <p className="text-lg leading-relaxed text-base-content/80">
        Aspiring full stack developer skilled in building scalable web apps with React,
        Tailwind, Java, Node.js, and MySQL. Trained in OOP, DSA, and real-time systems.
        Passionate problem-solver eager to craft impactful, user-first solutions.
      </p>
      <button onClick={openResume} className="btn btn-outline rounded-full mb-5">
        More about Me
      </button>
    </div>

    {/* Social Links */}
    <div className="space-y-4">
      <div className="flex gap-4">
        {socials.map((social, index) => {
          const Icon = social.img;
          return (
            <a
              key={index}
              href={social.href}
              className="btn btn-ghost btn-circle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>
      {/* Contact Section */}
      <section className="mt-10 relative overflow-hidden rounded-xl bg-base-200 p-6">
        <div className="max-w-md mx-auto space-y-4">
          <h2 className="text-xl font-bold font-mono text-center">Contact Me</h2>
          <div className="contact-info-container flex items-center gap-4">
            <FaEnvelope />
            <p>
              <a
                href="mailto:mhimanshuprakash@gmail.com"
                className="text-blue-500 hover:underline"
              >
                mhimanshuprakash@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
  )
}

export default LeftComponent