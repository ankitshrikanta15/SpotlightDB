import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

const ContactUs = () => {
  document.title = 'Spotlight | Contact Us';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    toast.info('Message Sent!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  };



  return (
    <div className="w-screen min-h-screen bg-[#1F1F1F] p-5">
      <Link to="/" className="inline-flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full 
        hover:bg-zinc-700 duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(39,39,42,0.5)]">
        <IoArrowBack className="text-zinc-400 text-xl group-hover:text-white" />
        <span className="text-zinc-400 group-hover:text-white font-medium">Go Back</span>
      </Link>

      <div className="max-w-6xl mx-auto mt-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#6556CD] to-[#9747FF] 
            bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-zinc-400 text-lg">Get in touch with us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-zinc-900/50 p-6 rounded-xl backdrop-blur-sm border border-zinc-800/50
            hover:border-[#6556CD]/30 transition-all duration-300 group text-center">
            <IoMdMail className="text-4xl text-[#6556CD] mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-zinc-400 group-hover:text-zinc-300">ankitshrikanta@gmail.com</p>
          </div>

          <div className="bg-zinc-900/50 p-6 rounded-xl backdrop-blur-sm border border-zinc-800/50
            hover:border-[#6556CD]/30 transition-all duration-300 group text-center">
            <FaPhoneAlt className="text-4xl text-[#6556CD] mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Phone</h3>
            <p className="text-zinc-400 group-hover:text-zinc-300 uppercase">+91 xox oxo xoxo</p>
          </div>

          <div className="bg-zinc-900/50 p-6 rounded-xl backdrop-blur-sm border border-zinc-800/50
            hover:border-[#6556CD]/30 transition-all duration-300 group text-center">
            <FaMapMarkerAlt className="text-4xl text-[#6556CD] mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Location</h3>
            <p className="text-zinc-400 group-hover:text-zinc-300">JHARSUGUDA, IN</p>
          </div>
        </div>

        <div className="bg-[#1F1F1F]">
        <div className="bg-zinc-900/50 p-8 rounded-xl backdrop-blur-sm border border-zinc-800/50">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-zinc-800/50 text-white px-4 py-3 rounded-lg border border-zinc-700/50
                  focus:outline-none focus:border-[#6556CD] transition-colors duration-300
                  placeholder:text-zinc-500"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-zinc-800/50 text-white px-4 py-3 rounded-lg border border-zinc-700/50
                  focus:outline-none focus:border-[#6556CD] transition-colors duration-300
                  placeholder:text-zinc-500"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-zinc-800/50 text-white px-4 py-3 rounded-lg border border-zinc-700/50
                focus:outline-none focus:border-[#6556CD] transition-colors duration-300
                placeholder:text-zinc-500"
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full bg-zinc-800/50 text-white px-4 py-3 rounded-lg border border-zinc-700/50
                focus:outline-none focus:border-[#6556CD] transition-colors duration-300
                placeholder:text-zinc-500 resize-none"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#6556CD] to-[#9747FF] text-white py-3 rounded-lg
                font-semibold hover:opacity-90 transition-opacity duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        </div>
      </div>
      <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
              />
    </div>
  );
};

export default ContactUs;