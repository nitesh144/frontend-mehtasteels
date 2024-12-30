import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios"

const Contact = () => {

  const [formData, setFormData]=useState({
    name: "",
    email: "",
    message:"",
  });

  const handleChange = (e) =>{
    const {name, value}= e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try{
      const response = await axios.post("http://localhost:5000/send-email", formData);
      toast.success("Details send successfully!");
    }catch(error){
      console.error("Error: ", error);
      toast.error("Filed to send Details. Please try again")
    }
  };

    return (
      <section id="contact" className="py-16 bg-white font-kabel">
        <Toaster position="top-center" reverseOrder={false}/>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#243388]">
            Contact Details
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <form className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-md"
            onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none 
                           focus:ring-2 focus:ring-[#009889]"
                           required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none 
                           focus:ring-2 focus:ring-[#009889]"
                           required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  type="text"
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none 
                           focus:ring-2 focus:ring-[#009889]"
                ></textarea>
              </div>
              <button type="submit"
              className="w-[100px] bg-[#243388] text-white py-3 rounded-lg 
                             hover:bg-opacity-90 transition-colors ">
                Send 
              </button>
            </form>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#243388] mb-4 text-center md:text-justify">
                  Corporate Office
                </h3>
                <p className="text-gray-600 font-semibold text-center md:text-justify">
                  137 Light Industrial Area<br />
                  Bhilai, Chhattisgarh pin:490026, <br />
                  India
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#243388] mb-4 text-center md:text-justify">
                  Contact Us
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600 font-semibold text-center md:text-justify">
                  Phone: +91-9302834985, <br/>+91-9993530009 <br />
                  Fax: +91-788-2286268 <br />
                  </p>
                  <p className="text-gray-600 font-semibold text-center md:text-justify">Email:
                  <a href="mailto:mehta_steels@rediffmail.com" className="text-gray-600"> mehta_steels@rediffmail.com</a><br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Contact;